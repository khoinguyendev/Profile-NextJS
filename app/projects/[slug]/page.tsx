"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects-data";
import { Button } from "@/components/ui/button";
import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types/Project";

// export async function generateStaticParams() {
//   return projects.map((project) => ({
//     slug: project.slug,
//   }));
// }

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   console.log("Generating metadata for slug:", slug)
//   const project = getProjectBySlug(slug)
//   if (!project) return { title: "Project Not Found" }
//   return {
//     title: `${project.title} | Portfolio`,
//     description: project.description,
//   }
// }

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // 👈 unwrap Promise

  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) {
        console.error("Error fetching project:", error);
        return;
      }

      setProject(data);
    };
    fetchData();
  }, [slug]);
  if (!project) {
    return (
    <div className="min-h-screen bg-background animate-pulse">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12 lg:py-24">

        <div className="h-4 w-32 bg-muted rounded mb-8"></div>

        {/* Title */}
        <div className="h-10 w-2/3 bg-muted rounded mb-4"></div>
        <div className="h-4 w-1/2 bg-muted rounded mb-6"></div>

        {/* Buttons */}
        <div className="flex gap-4 mb-12">
          <div className="h-10 w-32 bg-muted rounded"></div>
          <div className="h-10 w-32 bg-muted rounded"></div>
        </div>

        {/* Demo Video Skeleton */}
        <div className="h-64 w-full bg-muted rounded-xl mb-16"></div>

        {/* Paragraph skeleton */}
        <div className="space-y-3 mb-16">
          <div className="h-4 bg-muted w-full rounded"></div>
          <div className="h-4 bg-muted w-5/6 rounded"></div>
          <div className="h-4 bg-muted w-2/3 rounded"></div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <div className="h-6 w-48 bg-muted rounded mb-4"></div>
          <div className="flex gap-2 flex-wrap">
            <div className="h-8 w-20 bg-muted rounded-full"></div>
            <div className="h-8 w-20 bg-muted rounded-full"></div>
            <div className="h-8 w-20 bg-muted rounded-full"></div>
          </div>
        </div>

        {/* Screenshot */}
        <div className="mb-16">
          <div className="h-6 w-48 bg-muted rounded mb-4"></div>
          <div className="h-64 w-full bg-muted rounded-xl"></div>
        </div>
      </div>
    </div>
  );
  }
    const arr=project.detail.split('\n').filter(paragraph=>paragraph.trim()!=='');
  
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12 lg:py-24">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="group mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Quay lại
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {/* <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Site
              </a>
            </Button> */}
            <Button variant="outline" asChild>
              <a
                href={project.link_github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            </Button>
          </div>
        </header>

        {/* Demo Video Section */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center text-2xl font-semibold text-foreground">
            <Play className="mr-3 h-6 w-6 text-primary" />
            Demo Video
          </h2>
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            <iframe
              src={project.video}
              title={`${project.title} Demo Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </section>
        {/* Project Description */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Mô tả dự án
          </h2>
          <div className="prose prose-invert max-w-none">
            {arr.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Key Features */}
        {/* <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Key Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.technology_use.map((feature, index) => (
              <li
                key={index}
                className="flex items-start rounded-lg bg-card p-4 border border-border/50"
              >
                <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Công nghệ sử dụng
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technology_use.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Project Screenshot */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Ảnh chụp màn hình
          </h2>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            {project.screen_short?.map((image) => (
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} screenshot`}
                width={1200}
                height={675}
                className="w-full object-cover"
              />
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        {/* <footer className="border-t border-border pt-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            View All Projects
          </Link>
        </footer> */}
      </div>
    </div>
  );
}
