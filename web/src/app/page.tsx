export default function Home() {
  const features = [
    {
      title: "Vision to Prototype in Weeks",
      description:
        "We translate abstract ideas into interactive prototypes that let you feel the experience before a single line of production code ships.",
      icon: "⚡️",
    },
    {
      title: "Narrative-Driven Interfaces",
      description:
        "Micro-interactions and layered storytelling guide visitors through your product in a way that feels effortless yet unforgettable.",
      icon: "🎨",
    },
    {
      title: "Scalable Design Systems",
      description:
        "Every component is built on a unified design language, ensuring your brand looks cohesive across every touchpoint.",
      icon: "🧩",
    },
  ];

  const services = [
    {
      label: "Experience Strategy",
      body: "In-depth discovery workshops surface your brand truth, shape your product voice, and map the signature moments of the customer journey.",
    },
    {
      label: "Interface Design",
      body: "We craft immersive UI that balances emotion with clarity—responsive, accessible, and engineered with a modern design system.",
    },
    {
      label: "Full-Stack Delivery",
      body: "Next.js, edge-ready APIs, and automated deployments give your team a reliable, measurable foundation to grow.",
    },
    {
      label: "Lifecycle Optimization",
      body: "True partnership means iterating post-launch with experiments, analytics, and content support that keep momentum high.",
    },
  ];

  const metrics = [
    { label: "Projects launched", value: "120+" },
    { label: "Avg. conversion lift", value: "38%" },
    { label: "Client retention", value: "4.2 yrs" },
    { label: "Global team", value: "5 cities" },
  ];

  const testimonials = [
    {
      quote:
        "NovaSphere translated our complex product into an elegant story. Engagement skyrocketed and the experience finally reflects our brand.",
      author: "Cameron Wyatt",
      role: "Chief Product Officer, LumaLabs",
    },
    {
      quote:
        "From strategy to launch, the team worked like an extension of ours. Their craftsmanship set a new bar for every vendor we work with.",
      author: "Evelyn Brooks",
      role: "Director of Marketing, Orbit Analytics",
    },
  ];

  const faqs = [
    {
      question: "How do projects typically kick off?",
      answer:
        "We start with a two-week immersion to align on objectives, success metrics, and audience insights—culminating in a shared roadmap.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in SaaS, climate tech, fintech, and future-of-work products—places where clarity and trust are mission critical.",
    },
    {
      question: "Do you handle development in-house?",
      answer:
        "Yes. Our engineering team ships production-ready Next.js apps with robust CI/CD, analytics, and performance budgets baked in.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(127,90,240,0.22),_transparent_60%)]" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold text-white">
              NS
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                NovaSphere
              </p>
              <p className="text-sm text-white/50">Digital Experience Studio</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a className="transition-colors hover:text-white" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-white" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-white" href="#process">
              Process
            </a>
            <a className="transition-colors hover:text-white" href="#insights">
              Insights
            </a>
            <a className="transition-colors hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/20"
          >
            Start a Project
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 md:flex-row md:items-end md:px-8 md:pt-28">
          <div className="md:w-3/5">
            <span className="gradient-border inline-flex items-center gap-3 overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-white/80">
              <span className="relative z-10 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-sky-300" />
                Accepting partners for Q3
              </span>
            </span>
            <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              We design moments that connect ambition with delight.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              NovaSphere Studio blends strategy, storytelling, and engineering
              to build immersive web experiences. We help emerging teams share
              their vision, earn trust, and convert curiosity into loyalty.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                View Case Studies
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="glass-panel relative mt-12 flex w-full flex-col gap-5 rounded-3xl p-8 md:mt-0 md:w-2/5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Selected Metrics</span>
              <span>2024</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <hr className="border-white/10" />
            <p className="text-sm text-white/70">
              From early-stage startups to global R&D labs, we synthesize
              research, design, and engineering into outcomes your team can feel
              in days—not quarters.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8" id="approach">
          <div className="glass-panel rounded-3xl p-10 md:p-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Experiences engineered for resonance
                </h2>
                <p className="mt-4 max-w-2xl text-white/70">
                  From first impression to final conversion, we orchestrate
                  every layer of interaction to feel cinematic, human, and
                  grounded in your brand DNA.
                </p>
              </div>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Our Playbook →
              </a>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xl">
                    {feature.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="border-y border-white/5 bg-white/5 py-20 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Work that sparks conversation
                </h2>
                <p className="mt-4 max-w-2xl text-white/70">
                  Signature projects that blend cinematic storytelling with
                  measurable outcomes. Each engagement is tailored to the voice,
                  culture, and momentum of the teams we partner with.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Book a discovery call →
              </a>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "LumaLabs Immersive Launch",
                  description:
                    "Reimagined their product narrative with progressive storytelling, leading to a 52% lift in demo requests.",
                  tags: ["Strategy", "3D Web", "Product Marketing"],
                },
                {
                  title: "Halo Energy Command Center",
                  description:
                    "Built a data visualization platform with reactive dashboards and real-time energy forecasting.",
                  tags: ["Design Systems", "Data Viz", "Next.js"],
                },
                {
                  title: "Skybound Airspace Portal",
                  description:
                    "Crafted a trust-first experience for autonomous flight management with dynamic content personalization.",
                  tags: ["UX Research", "Content Design", "Performance"],
                },
              ].map((project) => (
                <article
                  key={project.title}
                  className="glass-panel group flex flex-col justify-between rounded-3xl p-8 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm text-white/70">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              End-to-end capabilities designed for velocity
            </h2>
            <p className="mt-4 text-white/70">
              We treat every engagement like a co-founding mission, aligning
              teams around a single narrative and shipping transformative
              experiences without the endless handoffs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.label}
                className="glass-panel rounded-3xl p-8 transition hover:-translate-y-1 hover:border-white/20"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  {service.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="process"
          className="border-y border-white/5 bg-gradient-to-br from-white/5 via-transparent to-white/10 py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:px-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                A choreography of craft
              </h2>
              <p className="mt-4 text-white/70">
                We lead with clarity—turning ideation into momentum with rituals
                that keep stakeholders aligned without draining their time.
              </p>
            </div>
            <ol className="glass-panel flex flex-1 flex-col gap-8 rounded-3xl p-8 md:p-10">
              {[
                {
                  title: "Signal Discovery",
                  description:
                    "Immersive workshops, qualitative interviews, and data dives to understand the truths powering your product.",
                },
                {
                  title: "Experience Architecture",
                  description:
                    "Journey maps, storyboards, and system diagrams that choreograph emotion across every interaction.",
                },
                {
                  title: "Design & Build Sprints",
                  description:
                    "Rapid prototyping with cross-functional critiques that ship production-ready features in weekly increments.",
                },
                {
                  title: "Launch & Amplify",
                  description:
                    "QA, performance tuning, analytics, and playbooks that ensure your team can operate and iterate with confidence.",
                },
              ].map((step, index) => (
                <li key={step.title} className="relative pl-10">
                  <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white/80">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="insights"
          className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28"
        >
          <div className="grid gap-10 md:grid-cols-5 md:items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                What our partners say
              </h2>
              <p className="mt-4 text-white/70">
                Collaboration is our superpower. We build long-term partnerships
                rooted in candor, experimentation, and respect.
              </p>
            </div>
            <div className="md:col-span-3 space-y-8">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="glass-panel rounded-3xl p-8 text-sm text-white/80"
                >
                  <p className="text-lg font-medium text-white">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 text-sm text-white/60">
                    {testimonial.author} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="border-y border-white/5 bg-gradient-to-br from-white/5 via-transparent to-white/5 py-24"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5 md:px-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Answers before you ask
              </h2>
              <p className="mt-4 text-white/70">
                High-velocity collaboration thrives on clarity. Here&apos;s how we
                approach new engagements and set projects up to win.
              </p>
            </div>
            <dl className="md:col-span-3 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="glass-panel rounded-3xl p-6">
                  <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-white/5 bg-white/5 py-24" id="contact">
          <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Ready to craft your next signature experience?
              </h2>
              <p className="mt-4 text-white/70">
                Tell us about the product, the audience, and the outcome you&apos;re
                aiming for. We&apos;ll assemble the right specialists and build a
                roadmap to make it real.
              </p>
              <dl className="mt-10 space-y-4 text-sm text-white/60">
                <div>
                  <dt className="font-semibold uppercase tracking-[0.2em] text-white/50">
                    Studio Hours
                  </dt>
                  <dd>Monday–Thursday · 9:00—18:00 EST</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.2em] text-white/50">
                    Collaborate
                  </dt>
                  <dd>hello@novasphere.studio</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.2em] text-white/50">
                    Press & Speaking
                  </dt>
                  <dd>press@novasphere.studio</dd>
                </div>
              </dl>
            </div>
            <form className="glass-panel rounded-3xl p-8 shadow-2xl" action="#">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2 text-sm text-white/70">
                  <span className="uppercase tracking-[0.2em] text-white/50">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Alex Rivers"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  <span className="uppercase tracking-[0.2em] text-white/50">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="alex@futureco.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="md:col-span-2 space-y-2 text-sm text-white/70">
                  <span className="uppercase tracking-[0.2em] text-white/50">
                    Company
                  </span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Future Co."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="md:col-span-2 space-y-2 text-sm text-white/70">
                  <span className="uppercase tracking-[0.2em] text-white/50">
                    Project Vision
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share the outcomes you&apos;re chasing..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                  />
                </label>
              </div>
              <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <label className="flex items-center gap-3 text-xs text-white/60">
                  <input
                    type="checkbox"
                    name="nda"
                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-purple-400 focus:ring-purple-300"
                  />
                  Request NDA before briefing
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Share your vision →
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} NovaSphere Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="hover:text-white">
              Capabilities
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#insights" className="hover:text-white">
              Stories
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
