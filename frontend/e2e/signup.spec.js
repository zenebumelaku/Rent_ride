import { expect, test } from "@playwright/test";

const mockVehicleModels = async (page) => {
  await page.route("**/api/admin/getVehicleModels", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: "[]",
    }),
  );
};

test("visitor can reach sign-up from the home page and register", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await mockVehicleModels(page);

  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(
    page.getByRole("heading", { name: /save big with our car rental/i }),
  ).toBeVisible();

  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(page).toHaveURL(/\/signup$/);
  await expect(page.getByRole("heading", { name: "Sign Up" })).toBeVisible();

  const signupRequest = page.waitForRequest("**/api/auth/signup");
  const email = `e2e-${Date.now()}@example.com`;
  await page.route("**/api/auth/signup", (route) =>
    route.fulfill({
      status: 201,
      contentType: "application/json",
      body: JSON.stringify({ succes: true }),
    }),
  );

  await page.getByPlaceholder("UserName").fill("E2E Test User");
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Password").fill("test-password-123");
  await page.getByRole("button", { name: "Register" }).click();

  const request = await signupRequest;
  expect(JSON.parse(request.postData())).toMatchObject({
    username: "E2E Test User",
    email,
    password: "test-password-123",
  });
  await expect(page).toHaveURL(/\/signin$/);
  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
});

test("sign-up displays validation for required fields", async ({ page }) => {
  await page.goto("/signup", { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("minimum 3 characters required")).toBeVisible();
  await expect(page.getByText("email required")).toBeVisible();
  await expect(page.getByText("minimum 4 characters required")).toBeVisible();
});

test("sign-up shows an error when the server rejects registration", async ({
  page,
}) => {
  await page.route("**/api/auth/signup", (route) =>
    route.fulfill({
      status: 409,
      contentType: "application/json",
      body: JSON.stringify({ succes: false, message: "Email already exists" }),
    }),
  );

  await page.goto("/signup", { waitUntil: "domcontentloaded" });
  await page.getByPlaceholder("UserName").fill("E2E Test User");
  await page.getByPlaceholder("Email").fill("existing@example.com");
  await page.getByPlaceholder("Password").fill("test-password-123");
  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("something went wrong")).toBeVisible();
  await expect(page).toHaveURL(/\/signup$/);
});
