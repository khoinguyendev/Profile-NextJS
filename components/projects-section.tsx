"use client";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { Project } from "@/types/Project";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });

        if (error) throw error;

        setProjects(data);
      } catch (err) {
        console.error("Fetch profile error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
  if (loading) {
    return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-pulse"
      aria-label="Skeleton Projects"
    >
      <div className="sticky top-0 -mx-6 mb-4 w-screen px-6 py-5 bg-background/50 backdrop-blur lg:sr-only">
        <div className="h-4 w-32 bg-muted rounded" />
      </div>

      <ul className="group/list">
        {[1, 2, 3].map((i) => (
          <li key={i} className="mb-12">
            <div className="group relative grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">

              <div className="z-10 sm:order-2 sm:col-span-6">
                <div className="h-5 w-48 bg-muted rounded mb-3" />
                <div className="h-3 w-72 bg-muted rounded mb-2" />
                <div className="h-3 w-64 bg-muted rounded mb-2" />

                <div className="flex gap-3 mt-3">
                  <div className="h-4 w-4 bg-muted rounded-full" />
                </div>

                <div className="flex gap-2 flex-wrap mt-3">
                  <div className="h-5 w-16 bg-muted rounded-full" />
                  <div className="h-5 w-20 bg-muted rounded-full" />
                  <div className="h-5 w-14 bg-muted rounded-full" />
                </div>
              </div>

              <div className="bg-muted rounded sm:order-1 sm:col-span-2 h-[120px]" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
  }
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Dự án nổi bật
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link"
                      href={`/projects/${project.slug}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.name}
                        <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" />
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href={project.link_github}
                      className="relative z-10 text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {/* <a
                      href={project.liveUrl}
                      className="relative z-10 text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View live site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a> */}
                  </div>

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technology_use.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <Image
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  width={200}
                  height={120}
                  className="rounded border-2 border-border/50 transition group-hover:border-border/80 sm:order-1 sm:col-span-2 sm:translate-y-1"
                  src={project.thumbail || "/placeholder.svg"}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-foreground group"
            href="#"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
             Xem toàn bộ dự án
            </span>
            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
