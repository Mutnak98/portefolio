"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowDown, Github, Mail } from "lucide-react"

export function HeroSection() {
  const ref = useScrollAnimation()

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-wide text-muted-foreground">
          {"Louis GERARD"}
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {"Étudiant informatique"}
          <br />
          <span className="text-muted-foreground">{"Recherche stage développement"}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-muted-foreground">
          {"Passionné par la rigueur algorithmique, la programmation bas niveau en C et la résolution de problèmes concrets. Je construis des projets solides, testés et documentés."}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-150 hover:opacity-80"
          >
            Projets
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Mutnak98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-accent"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
