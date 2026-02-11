"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    period: "2026",
    title: "Stage développement",
    company: "En recherche",
    description: "Recherche active d'un stage en développement logiciel pour mettre en pratique mes compétences en C, Python et algorithmique.",
    tags: ["C", "Python", "Développement"],
  },
  {
    period: "Septembre 2025 — présent",
    title: "Projets académiques",
    company: "Formation informatique à EPITECH",
    description: "Réalisation de projets système et algorithmique : machine virtuelle, quadtree, table de hachage. Travail en équipe et gestion de version avec Git.",
    tags: ["C", "Unix", "Git", "Algorithmique"],
  },
  {
    period: "2022 — 2025",
    title: "Lycée Saint-Esprit | Beauvais ",
    company: "BAC général | obtention mention très bien",
    description: "Spécialités : Mathématiques, Numériques-Sciences-Informatiques, Physique-Chimie (en première)",
    tags: ["Python"],
  },
]

export function ExperienceSection() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl">
        <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {"Expérience"}
        </h2>
        <div className="mt-8 space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className="group relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full border border-muted-foreground bg-background" />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="-mt-0.5 flex-1 pb-2">
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                <h3 className="mt-1 text-sm font-medium text-foreground">
                  {exp.title}
                  <span className="text-muted-foreground">{" · "}{exp.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
