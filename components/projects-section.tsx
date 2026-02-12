"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, X } from "lucide-react"

type Project = {
  title: string
  description: string
  tags: string[]
  repoUrl: string
  details: string
  image: string
}

const projects: Project[] = [
  {
    title: "My_top",
    description: "Reconstitution de la commande Top.",
    tags: ["C", "Unix", "Mémoire"],
    repoUrl: "https://github.com/Mutnak98/my_top",
    image: "/images/image-my_top.png",
    details:
      "Implémentation d'une machine virtuelle capable d'exécuter un jeu de bytecode personnalisé. Le projet inclut un système de dump mémoire pour l'analyse et le débogage, la gestion des registres et un cycle fetch-decode-execute complet.",
  },
  {
    title: "My_radar",
    description: "Simulation aérienne avec quadtree et optimisation spatiale.",
    tags: ["C", "Quadtree", "Optimisation", "CSFML"],
    repoUrl: "https://github.com/Mutnak98/my_radar",
    image: "/images/image-my_radar.png",
    details:
      "Simulation de contrôle du trafic aérien utilisant un quadtree pour la détection de collisions en temps réel. Optimisation des performances avec partitionnement spatial et rendu graphique via CSFML.",
  },
  {
    title: "My_hunter",
    description: "Premier projet Graphique | Dunck hunt personalisé",
    tags: ["C", "CSFLML", "Liste chaînée"],
    repoUrl: "https://github.com/Mutnak98/my_hunter/blob/main/README.md",
    image: "/images/image-my_hunter.png",
    details:
      "my_hunter est un jeu 2D en C avec la CSFML où l’on clique sur des cibles animées pour marquer des points.Il utilise sprites, events, clocks et une boucle de jeu avec gestion dynamique des entités.",
  },
  {
    title: "Secured",
    description: "Système de hachage et table de hachage.",
    tags: ["C", "Hash", "Crypto", "Structures"],
    repoUrl: "https://github.com/Mutnak98/secured",
    image: "/images/image-secured.png",
    details:
      "Implémentation de fonctions de hachage et d'une table de hachage avec gestion de collisions. Le projet explore les concepts de sécurité et d'intégrité des données à travers la cryptographie appliquée.",
  },
  {
    title: "Cross Scolaire",
    description: "Site web interactif avec gestion de base de données pour les résultats d'un cross collège-lycée.",
    tags: ["Python", "HTML", "CSS", "SQL"],
    repoUrl: "https://github.com/Mutnak98/site_cross",
    image: "/images/image-site-cross.png",
    details:
      "Développement d'un site web interactif permettant de gérer et afficher les résultats d'un cross scolaire collège-lycée. Le projet inclut une base de données SQL pour stocker les participants et leurs performances, une interface HTML/CSS pour la consultation des classements, et un backend Python pour la logique serveur et le traitement des données.",
  },
]

export function ProjectsSection() {
  const ref = useScrollAnimation()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="px-6 py-24">
        <div ref={ref} className="mx-auto max-w-3xl">
          <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {"Projets"}
          </h2>

          {/* Project cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                >
              <div
                className="group overflow-hidden rounded-lg border border-border bg-card transition-colors duration-200 hover:border-muted-foreground"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Illustration du projet ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation() 
                        setSelectedProject(project)
                      }}
                      className="text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
                    >
                      {"Détails \u2192"}
                    </button>
                  </div>
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
          onClick={() => setSelectedProject(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du projet ${selectedProject.title}`}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
            role="document"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={`Illustration du projet ${selectedProject.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 rounded-full bg-background/60 p-1.5 text-muted-foreground backdrop-blur-sm transition-colors duration-150 hover:text-foreground"
                aria-label="Fermer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-foreground">{selectedProject.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {selectedProject.details}
              </p>
              <div className="mt-6">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors duration-150 hover:bg-accent"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {"Voir le dépôt"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
