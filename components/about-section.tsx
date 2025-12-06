import { Profile } from "@/types/Profile";

export function AboutSection({ profile }: { profile: Profile | null }) {
  if (!profile)
    return (
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 animate-pulse"
      >
        <div className="sticky top-0 -mx-6 mb-4 w-screen px-6 py-5 bg-background/50 backdrop-blur lg:sr-only">
          <div className="h-4 w-16 bg-muted rounded" />
        </div>

        <div className="space-y-3">
          <div className="h-3 w-72 bg-muted rounded" />
          <div className="h-3 w-64 bg-muted rounded" />
          <div className="h-3 w-56 bg-muted rounded" />
          <div className="h-3 w-60 bg-muted rounded" />
        </div>
      </section>
    );
  const arr =
    profile?.introduction
      .split("\n")
      .filter((paragraph) => paragraph.trim() !== "") || [];
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>

      <div className="text-muted-foreground">
        {arr.map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
        {/* <p className="mb-4 leading-relaxed">
          Currently, I'm a Senior Developer at{" "}
          <a href="#" className="text-foreground font-medium hover:text-primary transition-colors">
            TechCorp
          </a>
          , specializing in frontend architecture. I contribute to the creation and maintenance of UI components that
          power our platform, ensuring our product meets web accessibility standards and best practices.
        </p>
        <p className="leading-relaxed">
          In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
          <span className="text-foreground font-medium">advertising agencies</span> and{" "}
          <span className="text-foreground font-medium">large corporations</span> to{" "}
          <span className="text-foreground font-medium">startups</span> and{" "}
          <span className="text-foreground font-medium">digital product studios</span>.
        </p> */}
      </div>
    </section>
  );
}
