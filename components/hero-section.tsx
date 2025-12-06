"use client";
import { Profile } from "@/types/Profile";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";


interface HeroSectionProps {
  profile:Profile|null
}

export function HeroSection({ profile }: HeroSectionProps) {
  if (!profile) {
    return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 animate-pulse">
      <div>
        {/* Avatar skeleton */}
        <div className="flex items-center gap-6 justify-center mb-5">
          <div className="h-28 w-28 rounded-full bg-muted"></div>
        </div>

        {/* Name */}
        <div className="h-7 bg-muted rounded w-2/3 mx-auto lg:mx-0"></div>

        {/* Role */}
        <div className="h-5 bg-muted rounded w-1/2 mt-3 mx-auto lg:mx-0"></div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-muted rounded w-full max-w-xs"></div>
          <div className="h-4 bg-muted rounded w-4/5 max-w-xs"></div>
          <div className="h-4 bg-muted rounded w-3/5 max-w-xs"></div>
        </div>
      </div>
    </header>
  );
  }
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-center gap-6 justify-center lg:justify-center mb-5">
          <Image
            src={profile?.avatar ||"https://res.cloudinary.com/dhrtfixu8/image/upload/v1764929511/khoif_nlitbm.jpg" }
            width={112}
            height={112}
            alt="Avatar"
            className="rounded-full object-cover border-2 border-primary shadow-lg"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {profile?.name || "Nguyễn Trần Khôi Nguyên"}
        </h1>
        <h2 className="mt-3 text-lg font-medium text-primary">
          {profile?.role || "Frontend Developer"}
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          {profile?.description}
        </p>
        
          <div>
          
        </div>
      </div>

      {/* <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} (opens in a new tab)`}
            >
              <link.icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul> */}
    </header>
  );
}
