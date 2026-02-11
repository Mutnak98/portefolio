"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl">
        <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {"À propos"}
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            {"Étudiant en informatique, je me forme à la programmation système, à l'algorithmique et aux structures de données. Mon langage principal est le C, que je pratique au quotidien à travers des projets variés : machines virtuelles, optimisation spatiale, cryptographie."}
          </p>
          <p>
            {"J'accorde une importance particulière à la qualité du code : lisibilité, modularité, tests et documentation. Je travaille sous environnement Unix/Linux et maîtrise les outils de développement classiques (Git, Makefile, gdb, Valgrind)."}
          </p>
          <p>
            {"Curieux et autonome, je cherche un stage qui me permettra de confronter mes compétences à des problématiques réelles et de contribuer à un projet d'équipe."}
          </p>
        </div>
      </div>
    </section>
  )
}
