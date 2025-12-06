import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct frontend architecture. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    period: "2020 — 2022",
    title: "Frontend Developer",
    company: "StartupXYZ",
    companyUrl: "#",
    description:
      "Developed and shipped highly interactive web applications for various clients. Collaborated with designers to create intuitive user interfaces and deliver exceptional user experiences.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2018 — 2020",
    title: "Junior Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Developed, maintained, and shipped production code for client websites. Worked with a variety of languages, platforms, and frameworks such as JavaScript, React, and WordPress.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Experience</h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a className="inline-flex items-center font-medium leading-tight text-foreground group" href="#">
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
              View Full Résumé
            </span>
            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
