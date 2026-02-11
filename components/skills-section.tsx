"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Langages",
    skills: ["C", "Python", "C#", "HTML", "CSS", "SQL"],
  },
  {
    title: "Algorithmique",
    skills: ["Structures de données", "Complexité", "Tri & recherche", "Graphes"],
  },
  {
    title: "Système",
    skills: ["Unix", "Linux", "Shell", "Processus", "Mémoire"],
  },
  {
    title: "Outils",
    skills: ["Git", "GitHub", "VS Code", "Emacs", "gcc", "Makefile"],
  },
  {
    title: "Qualité",
    skills: ["Debug", "Tests", "Valgrind", "gdb"],
  },
  {
    title: "Diagnostic",
    skills: ["Dump système", "Analyse binaire", "Core dump"],
  },
]

export function SkillsSection() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl">
        <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {"Compétences"}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="mb-3 text-sm font-medium text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
