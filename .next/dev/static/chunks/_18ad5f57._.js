(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "ved-journey-beyond-cube",
        title: "Ved: Journey Beyond Cube",
        description: "Implemented dynamic visuals and gameplay effects using Shader Graph and VFX Graph for immersive gaming experiences.",
        long: "Worked on Ved: Journey Beyond Cube, focusing on high-quality game visuals. Implemented dynamic effects for gameplay events using Unity's advanced visual tools and optimized game logic for seamless transitions.",
        year: "2025",
        stack: [
            "Unity",
            "C#",
            "Shader Graph",
            "VFX Graph",
            "Particle System"
        ],
        links: {
            demo: "#",
            source: "#"
        },
        highlights: [
            "Worked on game visuals using Particle System, Shader Graph, and VFX Graph",
            "Implemented dynamic effects for gameplay events and transitions",
            "Optimized visual effects for real-time performance"
        ]
    },
    {
        slug: "redplum-slot-games",
        title: "RedPlum Slot Game Development",
        description: "Contributed to the development of casino-style slot games focusing on visual polish, ad integration, and player retention.",
        long: "Contributed to the development of casino-style slot games using Unity, focusing on visual polish, ad integration, and immersive player experience. My work centered on creating engaging animations, particle effects, and optimizing in-game visuals for performance and retention.\n\nKey Responsibilities:\n- Created high-quality particle effects (win bursts, coin showers, bonus triggers)\n- Designed and implemented UI animations for reels, buttons, and reward feedback\n- Integrated Unity Ads and AdMob for monetization\n- Optimized animations and effects for mobile performance",
        year: "2025",
        stack: [
            "Unity",
            "C#",
            "Unity Ads",
            "AdMob",
            "Timeline"
        ],
        links: {
            demo: "#",
            source: "#"
        },
        highlights: [
            "Created high-quality particle effects for wins and jackpots",
            "Designed and implemented smooth UI animations for reels and feedback",
            "Integrated rewarded and interstitial ads for monetization",
            "Optimized performance to ensure smooth gameplay on mobile devices"
        ]
    },
    {
        slug: "vr-defensive-driving",
        title: "VR Defensive Driving Construction Demo",
        description: "A VR training simulation featuring a vehicle controller and interactive safety activities for construction environments.",
        long: "Developed a VR training demo with a custom vehicle controller and multiple interactive activities. Independently handled core functionality and user interactions to create a realistic training experience.",
        year: "2025",
        stack: [
            "Unity",
            "C#",
            "VR",
            "XR Interaction Toolkit"
        ],
        links: {
            demo: "#",
            source: "#"
        },
        highlights: [
            "Developed a VR training demo with vehicle controller",
            "Multiple interactive activities for construction safety",
            "Independently handled core functionality and user interactions"
        ]
    },
    {
        slug: "vr-scaffolding-demo",
        title: "VR Scaffolding Demo (Safety Training)",
        description: "Bilingual VR safety training module for scaffolding and work-at-height permits with synchronized audio and UI.",
        long: "Built a VR safety training module with bilingual support (Hindi/English). Implemented a language selector with synchronized audio and UI text to ensure accessibility for diverse users.",
        year: "2025",
        stack: [
            "Unity",
            "C#",
            "VR",
            "UI System"
        ],
        links: {
            demo: "#",
            source: "#"
        },
        highlights: [
            "Built a VR safety training module with bilingual (Hindi/English) support",
            "Implemented language selector with synchronized audio and UI text",
            "Focused on Work at Height Permit safety protocols"
        ]
    }
];
function getProjectBySlug(slug) {
    return projects.find((p)=>p.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Background3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Background3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@react-three/fiber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@react-three/drei'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function TechObject({ type, index, isDark, total }) {
    const getProps = ()=>{
        const lowerType = type.toLowerCase();
        if (lowerType.includes("react")) return {
            color: "#61dafb",
            shape: "torus",
            speed: 2,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 38,
                columnNumber: 101
            }, this)
        };
        if (lowerType.includes("next")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "sphere",
            speed: 2.1,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 39,
                columnNumber: 124
            }, this)
        };
        if (lowerType.includes("typescript")) return {
            color: "#3178c6",
            shape: "icosahedron",
            speed: 2.2,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 40,
                columnNumber: 114
            }, this)
        };
        if (lowerType.includes("tailwind")) return {
            color: "#38bdf8",
            shape: "torus",
            speed: 1.6,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTailwindcss"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 41,
                columnNumber: 106
            }, this)
        };
        if (lowerType.includes("node")) return {
            color: "#68a063",
            shape: "sphere",
            speed: 1.5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 42,
                columnNumber: 103
            }, this)
        };
        if (lowerType.includes("express")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "octahedron",
            speed: 1.7,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiExpress"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 43,
                columnNumber: 131
            }, this)
        };
        if (lowerType.includes("mongo")) return {
            color: "#47a248",
            shape: "octahedron",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMongodb"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 44,
                columnNumber: 108
            }, this)
        };
        if (lowerType.includes("postgres")) return {
            color: "#336791",
            shape: "sphere",
            speed: 1.9,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPostgresql"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 45,
                columnNumber: 107
            }, this)
        };
        if (lowerType.includes("redux")) return {
            color: "#764abc",
            shape: "icosahedron",
            speed: 2.3,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiRedux"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 46,
                columnNumber: 109
            }, this)
        };
        if (lowerType.includes("javascript") || lowerType === "js") return {
            color: "#f7df1e",
            shape: "sphere",
            speed: 1.5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJavascript"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 47,
                columnNumber: 131
            }, this)
        };
        if (lowerType.includes("framer")) return {
            color: "#0055ff",
            shape: "torus",
            speed: 2.4,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFramer"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 48,
                columnNumber: 104
            }, this)
        };
        if (lowerType.includes("github")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "sphere",
            speed: 1.4,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiGithub"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 49,
                columnNumber: 126
            }, this)
        };
        if (lowerType.includes("socket")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "octahedron",
            speed: 1.6,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSocketdotio"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 50,
                columnNumber: 130
            }, this)
        };
        if (lowerType.includes("postman")) return {
            color: "#ff6c37",
            shape: "sphere",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPostman"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 51,
                columnNumber: 106
            }, this)
        };
        if (lowerType.includes("material ui")) return {
            color: "#0073E6",
            shape: "sphere",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMui"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 52,
                columnNumber: 110
            }, this)
        };
        if (lowerType.includes("unity")) return {
            color: isDark ? "#ffffff" : "#222c37",
            shape: "sphere",
            speed: 1.6,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiUnity"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 53,
                columnNumber: 125
            }, this)
        };
        if (lowerType.includes("c#") || lowerType === "csharp") return {
            color: "#239120",
            shape: "icosahedron",
            speed: 2.1,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSharp"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 54,
                columnNumber: 132
            }, this)
        };
        if (lowerType.includes("vr") || lowerType.includes("xr")) return {
            color: "#38bdf8",
            shape: "torus",
            speed: 1.7,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbHeadset"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 55,
                columnNumber: 128
            }, this)
        };
        if (lowerType.includes("ar") || lowerType.includes("augmented")) return {
            color: "#f43f5e",
            shape: "torus",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbAugmentedReality"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 56,
                columnNumber: 135
            }, this)
        };
        if (lowerType.includes("shader") || lowerType.includes("vfx")) return {
            color: "#8b5cf6",
            shape: "octahedron",
            speed: 2.0,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbVectorBezier2"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 57,
                columnNumber: 138
            }, this)
        };
        if (lowerType.includes("particle") || lowerType.includes("physics")) return {
            color: "#f59e0b",
            shape: "sphere",
            speed: 1.5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbActivity"], {}, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 58,
                columnNumber: 140
            }, this)
        };
        return {
            color: isDark ? "#8b5cf6" : "#6d28d9",
            shape: "sphere",
            speed: 1.5,
            icon: null
        };
    };
    const { color, shape, speed, icon } = getProps();
    // Spread objects across the full screen background
    const xPos = (index % 2 === 0 ? 1 : -1) * (5 + Math.random() * 8);
    const yPos = (index - total / 2) * 4;
    const position = [
        xPos,
        yPos,
        -10 - Math.random() * 10
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Float, {
        speed: speed,
        rotationIntensity: 1.2,
        floatIntensity: 1.5,
        children: [
            shape === "torus" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Torus, {
                args: [
                    1.2,
                    0.25,
                    16,
                    32
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeshDistortMaterial, {
                    color: color,
                    speed: 2,
                    distort: 0.3,
                    transparent: true,
                    opacity: isDark ? 0.3 : 0.2
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 73,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 72,
                columnNumber: 17
            }, this),
            shape === "sphere" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sphere, {
                args: [
                    1.2,
                    32,
                    32
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeshDistortMaterial, {
                    color: color,
                    speed: 2,
                    distort: 0.4,
                    transparent: true,
                    opacity: isDark ? 0.3 : 0.2
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 78,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this),
            shape === "octahedron" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Octahedron, {
                args: [
                    1.4
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeshDistortMaterial, {
                    color: color,
                    speed: 2,
                    distort: 0.2,
                    transparent: true,
                    opacity: isDark ? 0.3 : 0.2
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this),
            shape === "icosahedron" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icosahedron, {
                args: [
                    1.4
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeshDistortMaterial, {
                    color: color,
                    speed: 2,
                    distort: 0.3,
                    transparent: true,
                    opacity: isDark ? 0.3 : 0.2
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Html, {
                position: position,
                center: true,
                distanceFactor: 15,
                className: "pointer-events-none select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-4xl sm:text-5xl lg:text-7xl transition-all duration-500 ${isDark ? "opacity-20" : "opacity-15"}`,
                    style: {
                        color
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 94,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Background3D.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Background3D.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_c = TechObject;
function Background3D() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const allTech = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].flatMap((p)=>p.stack)));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Background3D.useEffect": ()=>{
            const observer = new MutationObserver({
                "Background3D.useEffect": (mutations)=>{
                    mutations.forEach({
                        "Background3D.useEffect": (mutation)=>{
                            if (mutation.attributeName === "class") {
                                setIsDark(document.documentElement.classList.contains("dark"));
                            }
                        }
                    }["Background3D.useEffect"]);
                }
            }["Background3D.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true
            });
            setIsDark(document.documentElement.classList.contains("dark"));
            return ({
                "Background3D.useEffect": ()=>observer.disconnect()
            })["Background3D.useEffect"];
        }
    }["Background3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-20 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Canvas, {
            camera: {
                position: [
                    0,
                    0,
                    20
                ],
                fov: 50
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: isDark ? 0.3 : 0.6
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 123,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        10,
                        10,
                        10
                    ],
                    intensity: isDark ? 0.8 : 1.2
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this),
                allTech.map((tech, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechObject, {
                        type: tech,
                        index: idx,
                        isDark: isDark,
                        total: allTech.length
                    }, `${tech}-${idx}`, false, {
                        fileName: "[project]/components/ui/Background3D.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                    attach: "fog",
                    args: [
                        isDark ? "#0f172a" : "#ffffff",
                        20,
                        45
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/ui/Background3D.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Background3D.tsx",
            lineNumber: 122,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Background3D.tsx",
        lineNumber: 121,
        columnNumber: 9
    }, this);
}
_s(Background3D, "76OfTKswtlYfcyBWk5XLQJOYEek=");
_c1 = Background3D;
var _c, _c1;
__turbopack_context__.k.register(_c, "TechObject");
__turbopack_context__.k.register(_c1, "Background3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_18ad5f57._.js.map