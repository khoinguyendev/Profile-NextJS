"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "Về tôi", href: "#about" },
  // { label: "Experience", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Liên hệ", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`flex items-center gap-3 text-xs font-medium uppercase tracking-widest transition-all duration-300 group ${
                activeSection === item.href.slice(1) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "w-16 bg-foreground"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                }`}
              />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
