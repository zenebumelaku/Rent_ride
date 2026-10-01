import { expect, test } from "@playwright/test";

test("contact page shows the developer's public contact details and profiles", async ({
  page,
}) => {
  await page.goto("/contact", { waitUntil: "domcontentloaded" });

  await expect(
    page.getByRole("heading", { name: "Hello, I'm Zenebu Melaku." }),
  ).toBeVisible();
  await expect(page.getByText("Full-Stack Developer").first()).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Location Addis Ababa, Ethiopia/ }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: /melakuzenebu3@gmail\.com/ }),
  ).toHaveAttribute("href", "mailto:melakuzenebu3@gmail.com");
  await expect(page.getByRole("link", { name: /Portfolio/ })).toHaveAttribute(
    "href",
    "https://zenivaworks.vercel.app/",
  );
  await expect(page.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/zenebumelaku",
  );
  await expect(page.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/zenebu-melaku-7b9331225/",
  );
});
