"use client";

import { supabase } from "@/lib/supabaseClient"; // thêm dòng này
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { useEffect, useState } from "react";
import { Profile } from "@/types/Profile";

export default function HomePage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profile")
          .select("*")
          .single(); // đảm bảo lấy 1 object
          
        if (error) throw error;

        setProfile(data);
      } catch (err) {
        console.error("Fetch profile error:", err);
      } 
    };

    fetchProfile();
  }, []);

 
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="lg:flex lg:gap-12">
          <HeroSection profile={profile}  />
          <div className="lg:w-1/2 lg:py-24">
            <AboutSection profile={profile} />
            {/* <ExperienceSection /> */}
            <ProjectsSection />
            <ContactSection profile={profile}/>
          </div>
        </div>
      </main>
    </div>
  );
}
