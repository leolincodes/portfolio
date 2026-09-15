import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-noir.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo Lin — Software Engineer | Resume & Portfolio" },
      {
        name: "description",
        content:
          "Software engineer resume and portfolio: skills, experience, education, and the GT Movies Store project with a demo video.",
      },
      { property: "og:title", content: "Leo Lin — Software Engineer | Resume & Portfolio" },
      {
        property: "og:description",
        content:
          "Software engineer resume and portfolio: skills, experience, education, and the GT Movies Store project with a demo video.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
];

/* Replace this with your real demo link. */
const DEMO_URL = "#";

/* Paste your GT Movies Store write-up here — each string is a paragraph. */
const MOVIE_STORE_DESCRIPTION = [
  "Add your GT Movies Store description here. Elaborate on the web app you designed and developed, and describe how the different screens and features respond to the required user stories.",
  "This block takes as many paragraphs as you need — replace this placeholder text with your own and it will keep the same typography and spacing.",
];

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"] },
  { group: "Frameworks", items: ["Django", "React", "Node.js", "Tailwind CSS"] },
  { group: "Data", items: ["PostgreSQL", "SQLite", "Database design", "REST APIs"] },
  { group: "Tooling", items: ["Git & GitHub", "VS Code", "Docker", "Unit testing"] },
  { group: "Practices", items: ["User stories", "Code review", "Agile increments", "Debugging"] },
];

const EXPERIENCE = [
  {
    period: "2025 — Present",
    role: "Software Engineering Intern",
    org: "Company name",
    points: [
      "Add a bullet describing what you built and the impact it had.",
      "Add a bullet naming the stack you worked in and what you owned.",
      "Add a bullet about collaboration, code review, or testing.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Freelance Web Developer",
    org: "Self-employed",
    points: [
      "Add a bullet about a client project and the problem it solved.",
      "Add a bullet about the technologies you chose and why.",
    ],
  },
];

const EDUCATION = [
  {
    period: "2023 — 2027",
    role: "BSc Computer Science",
    org: "University name",
    points: [
      "Relevant coursework: web development, databases, software engineering.",
      "Add honours, GPA, or notable coursework here.",
    ],
  },
];

const PROCESS = [
  {
    title: "Read the stories first",
    body: "I started from the user stories rather than the screens, turning each one into a checklist item with a clear definition of done. That decided the data model before any templates were written.",
  },
  {
    title: "Build in thin vertical slices",
    body: "Each slice went model → view → template → manual test, so the app stayed runnable at every step and a broken piece was never more than one change away from the last good state.",
  },
  {
    title: "Version control as a diary",
    body: "Small, single-purpose commits with messages tied to the story they closed, so a regression could be traced back to the exact change responsible.",
  },
  {
    title: "Working through doubts",
    body: "When stuck, I reproduced the problem in the smallest possible case and read the framework documentation before searching for answers. Larger design questions I sketched both ways, then picked the option that needed the least special-casing.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/60 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold md:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function TimelineItem({
  period,
  role,
  org,
  points,
}: {
  period: string;
  role: string;
  org: string;
  points: string[];
}) {
  return (
    <li className="grid gap-3 border-l border-border/60 pb-10 pl-6 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8">
      <p className="font-display text-xs tracking-[0.16em] text-gold uppercase md:pt-1">{period}</p>
      <div>
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="mt-1 text-sm text-gold-soft">{org}</p>
        <ul className="mt-4 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-gold/70" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
            Leo <span className="text-gold">Lin</span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Résumé header */}
        <section className="relative overflow-hidden border-b border-border/60">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
            <p className="eyebrow">Software Engineer</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Leo <span className="text-gradient-gold">Lin</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Full-stack software engineer building web applications from the data model up. Most
              recently GT Movies Store — a movie store designed, developed and tested end to end from
              a set of user stories.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              {[
                ["Location", "Your city"],
                ["Email", "you@example.com"],
                ["GitHub", "github.com/yourhandle"],
                ["LinkedIn", "linkedin.com/in/yourhandle"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-1 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01" title="About me">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I am a software engineer who cares most about the part of the work people never see —
              the data model that stops being awkward once it is named properly, the guard that keeps
              a user from editing someone else's record, the page that still behaves on a small
              screen.
            </p>
            <p>
              I work from user stories, ship in thin vertical slices, and treat a readable commit
              history as part of the deliverable. I would rather ship four screens that behave
              correctly than twelve that only look finished.
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="02" title="Skills">
          <dl className="grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group} className="bg-card p-6">
                <dt className="eyebrow">{s.group}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-sm border border-gold/25 bg-secondary px-2.5 py-1 text-xs text-gold-soft"
                    >
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="03" title="Experience">
          <ul>
            {EXPERIENCE.map((e) => (
              <TimelineItem key={e.role} {...e} />
            ))}
          </ul>
          <h3 className="mt-16 font-display text-xl font-semibold">Education</h3>
          <ul className="mt-8">
            {EDUCATION.map((e) => (
              <TimelineItem key={e.role} {...e} />
            ))}
          </ul>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="04" title="Projects">
          <article className="panel p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl">GT Movies Store</h3>
                <p className="mt-2 text-sm text-gold-soft">
                  Full-stack web application — Django, Python, SQL, HTML/CSS
                </p>
              </div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-5 py-2.5 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Watch the demo
              </a>
            </div>

            <div className="rule-gold my-8 opacity-40" />

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {MOVIE_STORE_DESCRIPTION.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Demo video:{" "}
              <a href={DEMO_URL} target="_blank" rel="noreferrer" className="text-gold underline">
                add your link here
              </a>
            </p>
          </article>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="05" title="Process">
          <ol className="grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-2">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="bg-card p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl font-semibold text-gold/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      </main>

      <footer className="border-t border-border/60 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-sm tracking-[0.2em] uppercase">
            Leo <span className="text-gold">Lin</span>
          </p>
          <p className="text-sm text-muted-foreground">Software engineer — resume & portfolio</p>
        </div>
      </footer>
    </div>
  );
}
