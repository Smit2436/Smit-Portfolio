"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron, Html } from "@react-three/drei"
import { projects } from "@/lib/projects"
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiJavascript,
    SiFramer,
    SiGithub,
    SiSocketdotio,
    SiPostman,
    SiMui,
    SiUnity,
    SiSharp
} from "react-icons/si"
import { TbHeadset, TbVectorBezier2, TbActivity, TbAugmentedReality } from "react-icons/tb"

interface TechObjectProps {
    type: string
    index: number
    isDark: boolean
    total: number
}

function TechObject({ type, index, isDark, total }: TechObjectProps) {
    const getProps = () => {
        const lowerType = type.toLowerCase()
        if (lowerType.includes("react")) return { color: "#61dafb", shape: "torus", speed: 2, icon: <SiReact /> }
        if (lowerType.includes("next")) return { color: isDark ? "#ffffff" : "#000000", shape: "sphere", speed: 2.1, icon: <SiNextdotjs /> }
        if (lowerType.includes("typescript")) return { color: "#3178c6", shape: "icosahedron", speed: 2.2, icon: <SiTypescript /> }
        if (lowerType.includes("tailwind")) return { color: "#38bdf8", shape: "torus", speed: 1.6, icon: <SiTailwindcss /> }
        if (lowerType.includes("node")) return { color: "#68a063", shape: "sphere", speed: 1.5, icon: <SiNodedotjs /> }
        if (lowerType.includes("express")) return { color: isDark ? "#ffffff" : "#000000", shape: "octahedron", speed: 1.7, icon: <SiExpress /> }
        if (lowerType.includes("mongo")) return { color: "#47a248", shape: "octahedron", speed: 1.8, icon: <SiMongodb /> }
        if (lowerType.includes("postgres")) return { color: "#336791", shape: "sphere", speed: 1.9, icon: <SiPostgresql /> }
        if (lowerType.includes("redux")) return { color: "#764abc", shape: "icosahedron", speed: 2.3, icon: <SiRedux /> }
        if (lowerType.includes("javascript") || lowerType === "js") return { color: "#f7df1e", shape: "sphere", speed: 1.5, icon: <SiJavascript /> }
        if (lowerType.includes("framer")) return { color: "#0055ff", shape: "torus", speed: 2.4, icon: <SiFramer /> }
        if (lowerType.includes("github")) return { color: isDark ? "#ffffff" : "#000000", shape: "sphere", speed: 1.4, icon: <SiGithub /> }
        if (lowerType.includes("socket")) return { color: isDark ? "#ffffff" : "#000000", shape: "octahedron", speed: 1.6, icon: <SiSocketdotio /> }
        if (lowerType.includes("postman")) return { color: "#ff6c37", shape: "sphere", speed: 1.8, icon: <SiPostman /> }
        if (lowerType.includes("material ui")) return { color: "#0073E6", shape: "sphere", speed: 1.8, icon: <SiMui /> }
        if (lowerType.includes("unity")) return { color: isDark ? "#ffffff" : "#222c37", shape: "sphere", speed: 1.6, icon: <SiUnity /> }
        if (lowerType.includes("c#") || lowerType === "csharp") return { color: "#239120", shape: "icosahedron", speed: 2.1, icon: <SiSharp /> }
        if (lowerType.includes("vr") || lowerType.includes("xr")) return { color: "#38bdf8", shape: "torus", speed: 1.7, icon: <TbHeadset /> }
        if (lowerType.includes("ar") || lowerType.includes("augmented")) return { color: "#f43f5e", shape: "torus", speed: 1.8, icon: <TbAugmentedReality /> }
        if (lowerType.includes("shader") || lowerType.includes("vfx")) return { color: "#8b5cf6", shape: "octahedron", speed: 2.0, icon: <TbVectorBezier2 /> }
        if (lowerType.includes("particle") || lowerType.includes("physics")) return { color: "#f59e0b", shape: "sphere", speed: 1.5, icon: <TbActivity /> }
        return { color: isDark ? "#8b5cf6" : "#6d28d9", shape: "sphere", speed: 1.5, icon: null }
    }

    const { color, shape, speed, icon } = getProps()
    
    // Spread objects across the full screen background
    const xPos = (index % 2 === 0 ? 1 : -1) * (5 + Math.random() * 8)
    const yPos = (index - (total / 2)) * 4
    const position: [number, number, number] = [xPos, yPos, -10 - Math.random() * 10]

    return (
        <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.5}>
            {shape === "torus" && (
                <Torus args={[1.2, 0.25, 16, 32]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={isDark ? 0.3 : 0.2} />
                </Torus>
            )}
            {shape === "sphere" && (
                <Sphere args={[1.2, 32, 32]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.4} transparent opacity={isDark ? 0.3 : 0.2} />
                </Sphere>
            )}
            {shape === "octahedron" && (
                <Octahedron args={[1.4]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.2} transparent opacity={isDark ? 0.3 : 0.2} />
                </Octahedron>
            )}
            {shape === "icosahedron" && (
                <Icosahedron args={[1.4]} position={position}>
                    <MeshDistortMaterial color={color} speed={2} distort={0.3} transparent opacity={isDark ? 0.3 : 0.2} />
                </Icosahedron>
            )}

            {icon && (
                <Html position={position} center distanceFactor={15} className="pointer-events-none select-none">
                    <div className={`text-4xl sm:text-5xl lg:text-7xl transition-all duration-500 ${isDark ? "opacity-20" : "opacity-15"}`} style={{ color }}>
                        {icon}
                    </div>
                </Html>
            )}
        </Float>
    )
}

export default function Background3D() {
    const [isDark, setIsDark] = useState(true)
    const allTech = Array.from(new Set(projects.flatMap(p => p.stack)))

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDark(document.documentElement.classList.contains("dark"))
                }
            })
        })
        observer.observe(document.documentElement, { attributes: true })
        setIsDark(document.documentElement.classList.contains("dark"))
        return () => observer.disconnect()
    }, [])

    return (
        <div className="fixed inset-0 -z-20 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
                <ambientLight intensity={isDark ? 0.3 : 0.6} />
                <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 1.2} />
                
                {allTech.map((tech, idx) => (
                    <TechObject key={`${tech}-${idx}`} type={tech} index={idx} isDark={isDark} total={allTech.length} />
                ))}

                <fog attach="fog" args={[isDark ? "#0f172a" : "#ffffff", 20, 45]} />
            </Canvas>
        </div>
    )
}
