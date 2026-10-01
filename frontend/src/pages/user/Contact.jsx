import {
  FiArrowUpRight,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import Footers from "../../components/Footer";

const contactDetails = [
  {
    label: "Email",
    value: "melakuzenebu3@gmail.com",
    href: "mailto:melakuzenebu3@gmail.com",
    Icon: FiMail,
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.google.com/?q=Addis+Ababa+Ethiopia",
    Icon: FiMapPin,
  },
];

const profileLinks = [
  {
    label: "Portfolio",
    value: "zenivaworks.vercel.app",
    href: "https://zenivaworks.vercel.app/",
    Icon: FiGlobe,
  },
  {
    label: "GitHub",
    value: "@zenebumelaku",
    href: "https://github.com/zenebumelaku",
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/zenebu-melaku-7b9331225/",
    Icon: FiLinkedin,
  },
];

function Contact() {
  return (
    <>
      <main className="bg-[#f5f8f6] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="relative isolate overflow-hidden rounded-3xl bg-[#111b16] px-7 py-10 text-white shadow-xl sm:px-11 sm:py-14">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-green-500/30 blur-3xl"
              />
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
                Get to know me
              </p>
              <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
                Hello, I&apos;m{" "}
                <span className="text-green-400">Zenebu Melaku.</span>
              </h1>
              <p className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-green-100">
                Full-Stack Developer
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m a full-stack developer based in Addis Ababa, Ethiopia.
                Get in touch by email, or find me through my portfolio and
                professional profiles.
              </p>
              <a
                href="mailto:melakuzenebu3@gmail.com"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 font-semibold text-[#102017] transition hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 focus:ring-offset-[#111b16]"
              >
                <FiMail aria-hidden="true" />
                Email me
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </section>

            <section
              aria-labelledby="contact-details-heading"
              className="rounded-3xl border border-emerald-950/5 bg-white p-7 shadow-sm sm:p-9"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Contact details
              </p>
              <h2
                id="contact-details-heading"
                className="mt-3 text-2xl font-bold text-slate-900"
              >
                Let&apos;s start a conversation
              </h2>
              <div className="mt-7 space-y-3">
                {contactDetails.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Location" ? "_blank" : undefined}
                    rel={label === "Location" ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-green-400 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-100 text-xl text-emerald-800">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-slate-500">
                        {label}
                      </span>
                      <span className="block break-words font-semibold text-slate-900">
                        {value}
                      </span>
                    </span>
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="shrink-0 text-slate-400 transition group-hover:text-emerald-700"
                    />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <section aria-labelledby="profiles-heading" className="mt-12">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Around the web
                </p>
                <h2
                  id="profiles-heading"
                  className="mt-2 text-2xl font-bold text-slate-900"
                >
                  Find me online
                </h2>
              </div>
              <p className="text-sm text-slate-600">
                Explore my work and professional profile.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {profileLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#111b16] text-xl text-green-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-slate-900">
                      {label}
                    </span>
                    <span className="block break-all text-sm text-slate-600">
                      {value}
                    </span>
                  </span>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="shrink-0 text-slate-400 transition group-hover:text-emerald-700"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footers />
    </>
  );
}

export default Contact;
