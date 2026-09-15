import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-noir.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leo Lin — Web Developer Portfolio & GT Movies Store" },
      {
        name: "description",
        content:
          "Portfolio of Leo Lin: an introduction, a deep dive into the GT Movies Store web app, the process behind it, and a demo video.",
      },
      { property: "og:title", content: "Leo Lin — Web Developer Portfolio & GT Movies Store" },
      {
        property: "og:description",
        content:
          "An introduction, the GT Movies Store case study, my process, and a demo video of the app in action.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#project", label: "GT Movies Store" },
  { href: "#process", label: "Process" },
  { href: "#demo", label: "Demo" },
];

const SCREENS = [
  {
    n: "01",
    name: "Home & Movie Catalogue",
    story: "As a visitor, I want to browse the movies on offer so I can see what is available.",
    body: "A grid of movie cards — poster, title, price — served straight from the database. A search field filters the catalogue by title, so the same template handles both browsing and searching without a second page.",
  },
  {
    n: "02",
    name: "Movie Detail & Reviews",
    story: "As a signed-in user, I want to leave, edit and delete my own review of a movie.",
    body: "Each movie has its own page with the full description and every review below it. The review form only appears when you are signed in, and edit/delete controls only render on reviews you wrote.",
  },
  {
    n: "03",
    name: "Cart & Order Flow",
    story: "As a shopper, I want to add movies to a cart and place an order.",
    body: "Adding to the cart stores quantities against the session, the cart page recalculates the running total on every change, and checkout writes an Order plus its Items so the history survives sign-out.",
  },
  {
    n: "04",
    name: "Accounts & Orders",
    story: "As a returning user, I want to sign in and see what I ordered before.",
    body: "Sign up, log in, log out and an Orders page listing past purchases newest-first. Protected pages redirect anonymous visitors to the login screen instead of failing silently.",
  },
  {
    n: "05",
    name: "Petitions",
    story: "As a fan, I want to petition for a movie and vote on other people's petitions.",
    body: "Users open a petition for a title the store does not carry and vote once each. Vote counts update on the list so the most-wanted titles rise to the top.",
  },
  {
    n: "06",
    name: "Responsive Layout",
    story: "As a user on a phone, I want the store to stay usable.",
    body: "One shared base template with a collapsing navigation bar. The catalogue reflows from four columns to one, and touch targets stay large enough on small screens.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Read the stories first",
    body: "I started from the user stories rather than the screens, turning each one into a checklist item with a clear definition of done. That decided the data model before I wrote any templates.",
  },
  {
    n: "02",
    title: "Build in thin vertical slices",
    body: "Each slice went model → view → template → manual test, so the app was runnable at every step. Working in small increments meant a broken piece was never more than one change away from the last good state.",
  },
  {
    n: "03",
    title: "Version control as a diary",
    body: "Small, single-purpose commits with messages tied to the story they closed. When something regressed I could read back through history and find the exact change responsible.",
  },
  {
    n: "04",
    title: "Working through doubts",
    body: "When I got stuck, I reproduced the problem in the smallest possible case, read the framework documentation before searching for answers, and checked my reading against the error trace. Bigger design questions — where cart state should live, how to guard owner-only actions — I sketched both options out and picked the one that needed the least special-casing.",
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
    <section id={id} className="border-t border-border/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl leading-[1.1] font-semibold md:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
            Leo <span className="text-gold">Lin</span>
          </a>
          <nav className="hidden gap-8 md:flex">
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
        {/* Hero */}
        <section className="relative flex min-h-screen items-end overflow-hidden">
          <img
            src={heroImg}
            alt="Gold spotlight falling across a dark cinema curtain"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
            <p className="eyebrow">Personal web portfolio</p>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[0.95] font-semibold md:text-7xl lg:text-8xl">
              I build web apps that
              <br />
              <span className="text-gradient-gold">earn their applause.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Full-stack developer and computing student. Most recently: GT Movies Store, a movie
              store built end to end from a set of user stories.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#project"
                className="rounded-md bg-primary px-6 py-3 font-display text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                See GT Movies Store
              </a>
              <a
                href="#demo"
                className="rounded-md border border-gold/50 px-6 py-3 font-display text-sm font-medium text-gold transition-colors hover:bg-accent"
              >
                Watch the demo
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" eyebrow="01 — Who I am" title="An introduction">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a computing student who ended up in web development the long way round: I liked
                taking things apart, and the web is the one place where you can take something apart
                and put it back together in the same afternoon.
              </p>
              <p>
                What I care about is the part of the work most people never see — the data model that
                stops being awkward once you name it properly, the guard that keeps a user from
                editing someone else's review, the page that still works on a five-inch screen. I
                would rather ship four screens that behave correctly than twelve that only look
                finished.
              </p>
              <p>
                Away from a terminal I watch far too many films, which is probably why a movie store
                was the project I enjoyed most.
              </p>
            </div>
            <dl className="panel h-fit divide-y divide-border/60 p-6">
              {[
                ["Focus", "Full-stack web development"],
                ["Backend", "Python, Django, SQL"],
                ["Frontend", "HTML, CSS, JavaScript"],
                ["Tools", "Git, GitHub, VS Code"],
                ["Approach", "User stories, thin vertical slices"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Project */}
        <Section
          id="project"
          eyebrow="02 — Case study"
          title="GT Movies Store — a movie store designed, built and tested end to end"
        >
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                GT Movies Store is a web application where visitors browse a catalogue of films, read
                and write reviews, collect titles in a cart, place an order and petition for movies
                the store does not stock yet. It is a Django project: models for movies, reviews,
                orders and petitions, class- and function-based views over them, and templates that
                all extend one base layout.
              </p>
              <p>
                Every screen exists to answer a specific user story, and each one below names the
                story it serves and how the interface responds to it.
              </p>
            </div>
            <div className="panel p-6">
              <p className="eyebrow">At a glance</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Catalogue browsing and title search</li>
                <li>Accounts with sign up, sign in, sign out</li>
                <li>Owner-only review editing and deletion</li>
                <li>Session cart with running totals</li>
                <li>Order history per user</li>
                <li>Petitions with one vote per person</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-2">
            {SCREENS.map((s) => (
              <article key={s.n} className="bg-card p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl font-semibold text-gold/40">{s.n}</span>
                  <h3 className="text-xl font-semibold">{s.name}</h3>
                </div>
                <p className="mt-5 border-l-2 border-gold/60 pl-4 text-sm italic text-gold-soft">
                  {s.story}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          id="process"
          eyebrow="03 — Process"
          title="How I worked on it, and how I got unstuck"
        >
          <ol className="space-y-px overflow-hidden rounded-lg border border-border/60 bg-border/60">
            {PROCESS.map((p) => (
              <li key={p.n} className="bg-card p-8 md:flex md:gap-10">
                <div className="flex items-baseline gap-4 md:w-72 md:shrink-0">
                  <span className="font-display text-2xl font-semibold text-gold/40">{p.n}</span>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-0">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Demo */}
        <Section id="demo" eyebrow="04 — Video demonstration" title="GT Movies Store in motion">
          <div className="panel overflow-hidden">
            <div className="aspect-video w-full bg-secondary">
              <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="flex size-16 items-center justify-center rounded-full border border-gold/50">
                  <span className="ml-1 block size-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-gold" />
                </span>
                <p className="font-display text-lg font-semibold">Demo video goes here</p>
                <p className="max-w-md text-sm text-muted-foreground">
                  Send me the link to your walkthrough recording and I will embed the player in this
                  frame.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            The walkthrough covers a full pass through the app: browsing and searching the catalogue,
            creating an account, writing and then editing a review, filling the cart, checking out,
            reviewing the order history, and opening and voting on a petition.
          </p>
        </Section>
      </main>

      <footer className="border-t border-border/60 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-sm tracking-[0.2em] uppercase">
            Leo <span className="text-gold">Lin</span>
          </p>
          <p className="text-sm text-muted-foreground">Personal web portfolio — GT Movies Store</p>
        </div>
      </footer>
    </div>
  );
}
