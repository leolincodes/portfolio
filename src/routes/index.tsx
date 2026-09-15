import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-noir.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo Lin — Software Engineer | Resume & Portfolio" },
      {
        name: "description",
        content:
          "Leo Lin, Computer Science at Georgia Tech. Software engineering experience in Python, Go, FastAPI and machine learning, plus the GT Movies Store project and demo.",
      },
      { property: "og:title", content: "Leo Lin — Software Engineer | Resume & Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science at Georgia Tech. Experience across FastAPI test infrastructure, computer vision, and robotics, plus the GT Movies Store web app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
];

/* ------------------------------------------------------------------
   EDIT ME: GT Movies Store demo video + code links, and the write-up.
   Each string in MOVIE_STORE_DESCRIPTION renders as its own paragraph.
------------------------------------------------------------------- */
const GT_MOVIES = {
  demoUrl: `${import.meta.env.BASE_URL}CS2340Proj1Demo.mp4`,
  description: [
    "This GT Movies Store is a web application designed to showcase and demonstrate the capabilities of the Georgia Tech Movies Store project. It is built using Django, Python, SQLite, and HTML/CSS. Each screen satisfies a user story depending on what they want. For example, there is an About page that describes what the app is about, and there are features for the review system such as deleting, adding, and editing, which are features that users wanted. ",
    "While working on this project, I mainly referenced the textbook for guidance. Otherwise, I reference StackOverflow for some extra support for debugging. My approach was just to follow the book, and if something went wrong I would look for any spacing issues, and if it was deeper than that, I would consult StackOverflow.",
  ],
};

const CONTACT = [
  { label: "Phone", value: "706-566-5165", href: "tel:+17065665165" },
  { label: "Email", value: "llin360@gatech.edu", href: "mailto:llin360@gatech.edu" },
  { label: "LinkedIn", value: "linkedin.com/in/leo-lin", href: "https://www.linkedin.com/" },
  { label: "GitHub", value: "github.com/leo-lin", href: "https://github.com/" },
];

const EXPERIENCE = [
  {
    period: "Dec 2025 — Present",
    role: "Software Engineer in Test",
    org: "AI Makerspace Nexus — Atlanta, GA",
    stack: "Python, FastAPI, SQLite, PyTest",
    points: [
      "Collaborated with NVIDIA and 25+ engineers to build a course-specific AI assistant for academic support.",
      "Built test infrastructure and release readiness for a FastAPI backend, using PyTest suites to validate workloads.",
      "Integrated an LLM + RAG pipeline with SQLite to generate automated feedback and debugging insights for users.",
      "Improved system reliability and UI/UX by continuously testing, validating and refining features across sprints.",
    ],
  },
  {
    period: "Sep 2025 — Present",
    role: "Machine Learning Engineer",
    org: "Big Data Big Impact: Perfect Punch — Atlanta, GA",
    stack: "Python, PyTorch, OpenCV",
    points: [
      "Collaborated with the platform and data-viz teams to ship a production-ready boxing app with personal feedback.",
      "Designed a computer vision pipeline using OpenCV/PyTorch to deliver personalized feedback based on the session.",
      "Used the pipeline to generate adaptive training obstacles, improving user performance by 27% session to session.",
      "Trained and deployed a 3D CNN achieving 92.3% punch classification accuracy on a curated 150-sample dataset.",
    ],
  },
  {
    period: "Aug 2022 — Apr 2025",
    role: "Lead Software Engineer",
    org: "Columbus Space Program — Columbus, GA",
    stack: "Java, C++, Git",
    points: [
      "Led and supervised the code for the arm and claw systems of the robot, reaching the top 0.01% of all robots in the state.",
      "Guided the sensors subsystem in C++ on Orange Pi 5 with OpenCV for object detection, increasing scoring by 85%.",
      "Implemented PID control algorithms to optimize motor control and motion accuracy across multiple subsystems.",
      "Applied CI/CD principles to streamline code creation and testing, driving a productivity increase of about 60%.",
    ],
  },
];

const EDUCATION = {
  period: "Expected May 2028",
  role: "B.S. Computer Science",
  org: "Georgia Institute of Technology — GPA 3.55/4.0",
  stack: "Concentrations: System Architecture and Machine Learning",
  points: [
    "Relevant coursework: Design & Analysis of Algorithms, Computer Architecture, Data Structures & Algorithms, Systems and Networks, Object Oriented Programming, Software Design, Deep Learning, Machine Learning.",
  ],
};

const PROJECTS = [
  {
    name: "Real-Time Traffic Ingestion Analytics Pipeline",
    stack: ["Go", "Python", "Redis", "AWS", "Docker", "Terraform"],
    points: [
      "Built a two-tier microservice system in Go/Python to handle incoming streams from simulated traffic cameras.",
      "Reduced API latency to under 5ms with a Redis queue, keeping the web gateway asynchronously responsive.",
      "Simplified local development and cloud deployment with Docker, provisioning AWS infrastructure via Terraform.",
    ],
  },
  {
    name: "Platform For Freshmen and Transfers",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Postgres"],
    points: [
      "Built a web app that helps freshmen and transfer students socialize by hobbies and interests.",
      "Used WebSockets for direct messages between users and REST APIs to handle signups and logins.",
      "Implemented a Node.js backend with Postgres for email verification and filtering students on a grid by hobbies.",
    ],
  },
  {
    name: "Facial Skincare Routine Analytics",
    stack: ["Firebase", "React", "Next.js", "Google Cloud", "Postgres"],
    points: [
      "Engineered an application that provides a routine and diagnosis of skin condition from an image or video.",
      "Developed a FastAPI and PyTorch pipeline trained on 35,000+ images using cross-validation.",
      "Secured sessions and user privacy with Firebase, pairing history with the ML model for dynamic feedback.",
    ],
  },
  {
    name: "Predictive Heart Attack Detection ML Pipeline",
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Jupyter"],
    points: [
      "Engineered an end-to-end ML pipeline to parse and preprocess 5,000+ patient records, standardizing data with Pandas.",
      "Evaluated and benchmarked tradeoffs across multiple classification models to reach 93.12% accuracy.",
      "Optimized computational efficiency, cutting inference latency 19% by selecting and deploying a Linear SVM.",
    ],
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "Go", "Java", "C++", "JavaScript/TypeScript", "SQL", "C#", "R", "MATLAB"],
  },
  {
    group: "Frameworks & Tools",
    items: [
      "FastAPI",
      "Docker",
      "Kubernetes",
      "AWS",
      "PyTorch",
      "OpenCV",
      "Spring Boot",
      "Terraform",
      "Git/GitHub",
    ],
  },
  { group: "Data & ML", items: ["NumPy", "Pandas", "Scikit-Learn", "Jupyter Notebook"] },
  {
    group: "Concepts",
    items: [
      "REST APIs",
      "Agile/Scrum",
      "Systems Programming",
      "Distributed Systems",
      "Microservices",
      "CI/CD",
      "Cloud Computing",
      "ML Pipelines",
    ],
  },
];

const PROCESS = [
  {
    title: "",
    body: "",
  },
  {
    title: "",
    body: "",
  },
  {
    title: "",
    body: "",
  },
  {
    title: "",
    body: ".",
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
  stack,
  points,
}: {
  period: string;
  role: string;
  org: string;
  stack?: string;
  points: string[];
}) {
  return (
    <li className="grid gap-3 border-l border-border/60 pb-10 pl-6 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="font-display text-xs tracking-[0.16em] text-gold uppercase md:pt-1">{period}</p>
      <div>
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="mt-1 text-sm text-gold-soft">{org}</p>
        {stack ? <p className="mt-1 text-xs text-muted-foreground">{stack}</p> : null}
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
            <p className="eyebrow">Software Engineer · Atlanta, GA · U.S. Citizen</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
              Leo <span className="text-gradient-gold">Lin</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Computer Science at Georgia Tech, concentrating in System Architecture and Machine
              Learning. I build and test backend systems, computer vision pipelines and full-stack web
              apps — from FastAPI test infrastructure to a 3D CNN with 92.3% classification accuracy.
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              {CONTACT.map((c) => (
                <div key={c.label}>
                  <dt className="eyebrow">{c.label}</dt>
                  <dd className="mt-1">
                    <a href={c.href} className="text-foreground transition-colors hover:text-gold">
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01" title="About me">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I am a Computer Science student at Georgia Tech who works across the whole stack, but
              gravitates toward the systems layer: the queue that keeps a gateway responsive, the test
              suite that makes a release boring, the data model that stops being awkward once it is
              named properly.
            </p>
            <p>
              Most of my work has been collaborative — 25+ engineers alongside NVIDIA on a course AI
              assistant, a platform and data-viz team on a production boxing app, and a robotics
              program where I led the code for the arm and claw subsystems. I work from user stories,
              ship in thin vertical slices, and treat a readable commit history as part of the
              deliverable.
            </p>
          </div>
        </Section>

        {/* Experience + Education */}
        <Section id="experience" eyebrow="02" title="Experience">
          <ul>
            {EXPERIENCE.map((e) => (
              <TimelineItem key={e.role} {...e} />
            ))}
          </ul>
          <h3 className="mt-16 font-display text-xl font-semibold">Education</h3>
          <ul className="mt-8">
            <TimelineItem {...EDUCATION} />
          </ul>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="03" title="Projects">
          {/* Featured: GT Movies Store — one big description block */}
          <article className="panel p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Featured</p>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">GT Movies Store</h3>
                <p className="mt-2 text-sm text-gold-soft">
                  Full-stack web application — Django, Python, SQL, HTML/CSS
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GT_MOVIES.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-primary px-5 py-2.5 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Watch the demo
                </a>
              </div>
            </div>

            <div className="rule-gold my-8 opacity-40" />

            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {GT_MOVIES.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-sm text-muted-foreground">
                Project Demo
              </p>

              <video
                controls
                className="w-full rounded-lg border border-border/60"
              >
                <source src={GT_MOVIES.demoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>

          {/* Other projects */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.name} className="flex flex-col bg-card p-7">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-gold/25 bg-secondary px-2 py-0.5 text-xs text-gold-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-gold/70" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="04" title="Technical skills">
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
          <p className="text-sm text-muted-foreground">
            <a href="mailto:llin360@gatech.edu" className="transition-colors hover:text-gold">
              llin360@gatech.edu
            </a>{" "}
            · 706-566-5165
          </p>
        </div>
      </footer>
    </div>
  );
}
