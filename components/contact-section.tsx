import { ArrowUpRight, Facebook, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Profile } from "@/types/Profile";

interface ContactSectionProps {
  profile: Profile|null
} 
export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Liên hệ
        </h2>
      </div>

      <div className="text-muted-foreground">
        <p className="mb-4 leading-relaxed text-lg">Thông tin liên hệ</p>

        <div className="flex flex-col gap-2 mt-4">
          {/* Email */}
          {profile?.email && (
            <Button variant="outline" asChild>
              <a href={`mailto:${profile.email}`} target="_blank">
                <Mail className="mr-2 h-4 w-4" /> {profile.email}
              </a>
            </Button>
          )}

          {/* Phone */}
          {profile?.phone && (
            <Button variant="outline" asChild>
              <a href={`tel:${profile.phone}`} target="_blank">
                <Phone className="mr-2 h-4 w-4" /> {profile.phone}
              </a>
            </Button>
          )}

          {/* Facebook */}
          {profile?.facebook && (
            <Button variant="outline" asChild>
              <a href={profile.facebook} target="_blank">
                <Facebook className="mr-2 h-4 w-4" /> Facebook
              </a>
            </Button>
          )}

          {/* GitHub */}
          {profile?.github && (
            <Button variant="outline" asChild>
              <a href={profile.github} target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}


        </div>

        {/* <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://nextjs.org"
              className="font-medium text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer noopener"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              className="font-medium text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tailwind CSS
            </a>
            , deployed on{" "}
            <a
              href="https://vercel.com"
              className="font-medium text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer noopener"
            >
              Vercel
            </a>
            .
          </p>
        </div> */}
      </div>
    </section>
  );
}
