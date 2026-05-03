export type Project = {
  slug: string
  title: string
  description: string
  long?: string
  year?: string
  stack: string[]
  links?: { demo?: string; source?: string }
  images?: string[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: "ved-journey-beyond-cube",
    title: "Ved: Journey Beyond Cube",
    description:
      "Implemented dynamic visuals and gameplay effects using Shader Graph and VFX Graph for immersive gaming experiences.",
    long:
      "Worked on Ved: Journey Beyond Cube, focusing on high-quality game visuals. Implemented dynamic effects for gameplay events using Unity's advanced visual tools and optimized game logic for seamless transitions.",
    year: "2025",
    stack: ["Unity", "C#", "Shader Graph", "VFX Graph", "Particle System"],
    links: { demo: "#", source: "#" },
    highlights: [
      "Worked on game visuals using Particle System, Shader Graph, and VFX Graph",
      "Implemented dynamic effects for gameplay events and transitions",
      "Optimized visual effects for real-time performance",
    ],
  },
  {
    slug: "redplum-slot-games",
    title: "RedPlum Slot Game Development",
    description:
      "Contributed to the development of casino-style slot games focusing on visual polish, ad integration, and player retention.",
    long:
      "Contributed to the development of casino-style slot games using Unity, focusing on visual polish, ad integration, and immersive player experience. My work centered on creating engaging animations, particle effects, and optimizing in-game visuals for performance and retention.\n\nKey Responsibilities:\n- Created high-quality particle effects (win bursts, coin showers, bonus triggers)\n- Designed and implemented UI animations for reels, buttons, and reward feedback\n- Integrated Unity Ads and AdMob for monetization\n- Optimized animations and effects for mobile performance",
    year: "2025",
    stack: ["Unity", "C#", "Unity Ads", "AdMob", "Timeline"],
    links: { demo: "#", source: "#" },
    highlights: [
      "Created high-quality particle effects for wins and jackpots",
      "Designed and implemented smooth UI animations for reels and feedback",
      "Integrated rewarded and interstitial ads for monetization",
      "Optimized performance to ensure smooth gameplay on mobile devices",
    ],
  },
  {
    slug: "vr-defensive-driving",
    title: "VR Defensive Driving Construction Demo",
    description:
      "A VR training simulation featuring a vehicle controller and interactive safety activities for construction environments.",
    long:
      "Developed a VR training demo with a custom vehicle controller and multiple interactive activities. Independently handled core functionality and user interactions to create a realistic training experience.",
    year: "2025",
    stack: ["Unity", "C#", "VR", "XR Interaction Toolkit"],
    links: { demo: "#", source: "#" },
    highlights: [
      "Developed a VR training demo with vehicle controller",
      "Multiple interactive activities for construction safety",
      "Independently handled core functionality and user interactions",
    ],
  },
  {
    slug: "vr-scaffolding-demo",
    title: "VR Scaffolding Demo (Safety Training)",
    description:
      "Bilingual VR safety training module for scaffolding and work-at-height permits with synchronized audio and UI.",
    long:
      "Built a VR safety training module with bilingual support (Hindi/English). Implemented a language selector with synchronized audio and UI text to ensure accessibility for diverse users.",
    year: "2025",
    stack: ["Unity", "C#", "VR", "UI System"],
    links: { demo: "#", source: "#" },
    highlights: [
      "Built a VR safety training module with bilingual (Hindi/English) support",
      "Implemented language selector with synchronized audio and UI text",
      "Focused on Work at Height Permit safety protocols",
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
