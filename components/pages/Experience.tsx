"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Building2, MapPin } from "lucide-react"

const experiences = [
    {
        year: "Dec 2025 — Present",
        role: "Unity Developer Intern",
        company: "Dweek Studios",
        location: "Ahmedabad, India • On-site",
        desc: "Developed a VR industrial demo independently, contributed to slot games with VFX, and worked on 'Ved: Journey Beyond Cube' using Shader Graph and game logic.",
        tech: ["Unity", "C#", "VR", "Shader Graph", "VFX Graph", "Particle System"],
    },
    {
        year: "Feb 2025 — Aug 2025",
        role: "Junior Unity Developer",
        company: "The Intellify",
        location: "Ahmedabad, India • On-site",
        desc: "Developed AR applications with real-world interactions, built an AI-driven zombie shooter, and created optimized 2D games with physics-based movement.",
        tech: ["Unity", "C#", "AR Foundation", "AI", "Physics", "UI System"],
    },
]

export default function Experience() {
    return (
        <section className="py-24 px-6">

            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
                Experience
            </h2>

            <div className="relative max-w-4xl mx-auto">
                <span className="pointer-events-none absolute left-1 top-0 bottom-0 w-px bg-border/60" />

                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="relative pl-6 md:pl-8 mb-10"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="absolute left-0 top-1 size-2 rounded-full bg-primary ring-2 ring-background" />

                        <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-card/70 backdrop-blur border border-border p-5 shadow-sm">
                            <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span>{exp.role}</span>
                                </div>
                                <div className="hidden sm:flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{exp.year}</span>
                                </div>
                            </div>

                            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Building2 className="h-4 w-4" />
                                    <span>{exp.company}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{exp.location}</span>
                                </div>

                                <span className="sm:hidden">• {exp.year}</span>
                            </div>

                            <h3 className="mt-2 text-lg font-semibold text-foreground">
                                {exp.role}
                            </h3>
                            <p className="text-muted-foreground mt-1">
                                {exp.desc}
                            </p>
                            {Array.isArray(exp.tech) && exp.tech.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <Badge key={t} variant="outline">{t}</Badge>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}
