"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Zap, Cpu, GraduationCap, Award } from "lucide-react"

export default function About() {
    const coreFocus = [
        {
            title: "Immersive Experiences",
            desc: "Developing cutting-edge AR/VR applications for training and simulation.",
            icon: <Cpu className="h-6 w-6" />,
            color: "text-blue-500"
        },
        {
            title: "Optimization & VFX",
            desc: "Creating stunning visuals while maintaining high performance across devices.",
            icon: <Zap className="h-6 w-6" />,
            color: "text-yellow-500"
        },
        {
            title: "Game Mechanics",
            desc: "Implementing robust C# scripts for complex interactions and AI behavior.",
            icon: <ShieldCheck className="h-6 w-6" />,
            color: "text-emerald-500"
        }
    ]

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        About Me
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1.5 bg-primary mx-auto rounded-full"
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Professional Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <Badge variant="outline" className="px-3 py-1 text-primary border-primary/20 bg-primary/5">
                                My Professional Journey
                            </Badge>
                            <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                                <span className="text-primary">Unity Developer</span> with a passion for building immersive experiences.
                            </h3>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify">
                                <p>
                                    I am a <span className="font-semibold text-foreground">Motivated Unity Developer with 8 months of hands-on experience</span> in building interactive applications using <span className="font-semibold text-primary">C# and Unity tools</span>.
                                </p>
                                <p>
                                    Skilled in <span className="font-semibold text-foreground">AR/VR development, multiplayer systems, UI design, and performance optimization</span>.
                                </p>
                                <p>
                                    Seeking an opportunity to contribute creative solutions and grow in a challenging game or simulation development environment. Passionate about building high-quality, user-focused applications.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Core Focus Grid */}
                    <div className="grid gap-6">
                        {coreFocus.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        {item.icon}
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className={`p-3 rounded-xl bg-card border border-border shadow-sm ${item.color} group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300`}>
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="mt-20 grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 bg-card/40 backdrop-blur-md border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <h4 className="text-xl font-bold text-foreground">Education</h4>
                            </div>
                            <div className="space-y-2">
                                <p className="font-semibold text-foreground">Bachelor&apos;s Degree in Computer Science & Engineering</p>
                                <p className="text-muted-foreground">Sal Engineering and Technical Institute</p>
                                <p className="text-sm text-primary">2022 — 2026</p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-6 bg-card/40 backdrop-blur-md border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Award className="h-6 w-6" />
                                </div>
                                <h4 className="text-xl font-bold text-foreground">Certifications</h4>
                            </div>
                            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                <li>Completed 5 Coursera courses for Technical Skills Improvement</li>
                                <li>Attended multiple Webinars and Seminars on Game Dev</li>
                            </ul>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
