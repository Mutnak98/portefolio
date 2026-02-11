"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  {
    label: "Email",
    href: "mailto:louis.gerard@epitech.eu",
    icon: Mail,
    value: "louis.gerard@epitech.eu",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mutnak98",
    icon: Github,
    value: "github.com/louis-gerard",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/louis-gerard-3763a53ab/",
    icon: Linkedin,
    value: "linkedin.com/in/louis-gerard",
  },
]

export function ContactSection() {
  const ref = useScrollAnimation()

  return (
    <section id="contact" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl">
        <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {"Contact"}
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          {"Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'une opportunité de stage ou de collaboration."}
        </p>
        <div className="mt-8 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-border p-4 transition-colors duration-200 hover:border-muted-foreground"
            >
              <link.icon className="h-5 w-5 text-muted-foreground transition-colors duration-150 group-hover:text-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
