(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/ProjectTech3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectTech3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
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
function TechObject({ type, index, isDark }) {
    // Determine shape, color, and icon based on tech type
    const getProps = ()=>{
        const lowerType = type.toLowerCase();
        const brandColor = (color)=>isDark ? color : color // Adjust if needed, but usually brand colors are okay
        ;
        if (lowerType.includes("react")) return {
            color: "#61dafb",
            shape: "torus",
            speed: 2,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 39,
                columnNumber: 101
            }, this)
        };
        if (lowerType.includes("next")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "sphere",
            speed: 2.1,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 40,
                columnNumber: 124
            }, this)
        };
        if (lowerType.includes("typescript")) return {
            color: "#3178c6",
            shape: "icosahedron",
            speed: 2.2,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 41,
                columnNumber: 114
            }, this)
        };
        if (lowerType.includes("tailwind")) return {
            color: "#38bdf8",
            shape: "torus",
            speed: 1.6,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTailwindcss"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 42,
                columnNumber: 106
            }, this)
        };
        if (lowerType.includes("node")) return {
            color: "#68a063",
            shape: "sphere",
            speed: 1.5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 43,
                columnNumber: 103
            }, this)
        };
        if (lowerType.includes("express")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "octahedron",
            speed: 1.7,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiExpress"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 44,
                columnNumber: 131
            }, this)
        };
        if (lowerType.includes("mongo")) return {
            color: "#47a248",
            shape: "octahedron",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMongodb"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 45,
                columnNumber: 108
            }, this)
        };
        if (lowerType.includes("postgres")) return {
            color: "#336791",
            shape: "sphere",
            speed: 1.9,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPostgresql"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 46,
                columnNumber: 107
            }, this)
        };
        if (lowerType.includes("redux")) return {
            color: "#764abc",
            shape: "icosahedron",
            speed: 2.3,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiRedux"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 47,
                columnNumber: 109
            }, this)
        };
        if (lowerType.includes("javascript") || lowerType === "js") return {
            color: "#f7df1e",
            shape: "sphere",
            speed: 1.5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJavascript"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 48,
                columnNumber: 131
            }, this)
        };
        if (lowerType.includes("framer")) return {
            color: "#0055ff",
            shape: "torus",
            speed: 2.4,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFramer"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 49,
                columnNumber: 104
            }, this)
        };
        if (lowerType.includes("github")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "sphere",
            speed: 1.4,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiGithub"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 50,
                columnNumber: 126
            }, this)
        };
        if (lowerType.includes("socket")) return {
            color: isDark ? "#ffffff" : "#000000",
            shape: "octahedron",
            speed: 1.6,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSocketdotio"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 51,
                columnNumber: 130
            }, this)
        };
        if (lowerType.includes("postman")) return {
            color: "#ff6c37",
            shape: "sphere",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPostman"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 52,
                columnNumber: 106
            }, this)
        };
        if (lowerType.includes("material ui")) return {
            color: "#0073E6",
            shape: "sphere",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMui"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 53,
                columnNumber: 110
            }, this)
        };
        if (lowerType.includes("unity")) return {
            color: isDark ? "#ffffff" : "#222c37",
            shape: "sphere",
            speed: 1.6,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiUnity"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 54,
                columnNumber: 125
            }, this)
        };
        if (lowerType.includes("c#") || lowerType === "csharp") return {
            color: "#239120",
            shape: "icosahedron",
            speed: 2.1,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSharp"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 55,
                columnNumber: 132
            }, this)
        };
        if (lowerType.includes("vr") || lowerType.includes("xr")) return {
            color: "#38bdf8",
            shape: "torus",
            speed: 1.7,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbHeadset"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 56,
                columnNumber: 128
            }, this)
        };
        if (lowerType.includes("ar") || lowerType.includes("augmented")) return {
            color: "#f43f5e",
            shape: "torus",
            speed: 1.8,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbAugmentedReality"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 57,
                columnNumber: 135
            }, this)
        };
        if (lowerType.includes("shader") || lowerType.includes("vfx")) return {
            color: "#8b5cf6",
            shape: "octahedron",
            speed: 2.0,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbVectorBezier2"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 58,
                columnNumber: 138
            }, this)
        };
        if (lowerType.includes("particle") || lowerType.includes("physics")) return {
            color: "#f59e0b",
            shape: "sphere",
            speed: 1.5,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbActivity"], {}, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 59,
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
    const position = [
        (index % 2 === 0 ? 1 : -1) * (4 + Math.random() * 4),
        (index - 2) * 3,
        -5 - Math.random() * 5
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
        speed: speed,
        rotationIntensity: 1.5,
        floatIntensity: 2,
        children: [
            shape === "torus" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Torus"], {
                args: [
                    1,
                    0.2,
                    16,
                    32
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                    color: color,
                    speed: 2,
                    distort: 0.3,
                    transparent: true,
                    opacity: isDark ? 0.6 : 0.4
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 77,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this),
            shape === "sphere" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                args: [
                    1,
                    32,
                    32
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                    color: color,
                    speed: 2,
                    distort: 0.4,
                    transparent: true,
                    opacity: isDark ? 0.6 : 0.4
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 82,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 81,
                columnNumber: 17
            }, this),
            shape === "octahedron" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octahedron"], {
                args: [
                    1.2
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                    color: color,
                    speed: 2,
                    distort: 0.2,
                    transparent: true,
                    opacity: isDark ? 0.6 : 0.4
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 87,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 86,
                columnNumber: 17
            }, this),
            shape === "icosahedron" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icosahedron"], {
                args: [
                    1.2
                ],
                position: position,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshDistortMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistortMaterial"], {
                    color: color,
                    speed: 2,
                    distort: 0.3,
                    transparent: true,
                    opacity: isDark ? 0.6 : 0.4
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 92,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, this),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: position,
                center: true,
                distanceFactor: 10,
                className: "pointer-events-none select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-4xl sm:text-5xl lg:text-6xl transition-all duration-500 hover:scale-125 ${isDark ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-80" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)] opacity-90"}`,
                    style: {
                        color
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 104,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ProjectTech3D.tsx",
                lineNumber: 98,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/ProjectTech3D.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_c = TechObject;
function ProjectTech3D({ stack }) {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectTech3D.useEffect": ()=>{
            // Track the "dark" class on the html element
            const observer = new MutationObserver({
                "ProjectTech3D.useEffect": (mutations)=>{
                    mutations.forEach({
                        "ProjectTech3D.useEffect": (mutation)=>{
                            if (mutation.attributeName === "class") {
                                setIsDark(document.documentElement.classList.contains("dark"));
                            }
                        }
                    }["ProjectTech3D.useEffect"]);
                }
            }["ProjectTech3D.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true
            });
            setIsDark(document.documentElement.classList.contains("dark"));
            return ({
                "ProjectTech3D.useEffect": ()=>observer.disconnect()
            })["ProjectTech3D.useEffect"];
        }
    }["ProjectTech3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    10
                ],
                fov: 50
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: isDark ? 0.4 : 0.7
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        10,
                        10,
                        10
                    ],
                    intensity: isDark ? 1 : 1.5
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                    position: [
                        -10,
                        -10,
                        10
                    ],
                    angle: 0.15,
                    penumbra: 1,
                    intensity: isDark ? 0.5 : 0.8
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                stack.map((tech, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechObject, {
                        type: tech,
                        index: idx,
                        isDark: isDark
                    }, `${tech}-${idx}`, false, {
                        fileName: "[project]/components/ui/ProjectTech3D.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                    attach: "fog",
                    args: [
                        isDark ? "#0f172a" : "#ffffff",
                        15,
                        35
                    ]
                }, void 0, false, {
                    fileName: "[project]/components/ui/ProjectTech3D.tsx",
                    lineNumber: 148,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/ProjectTech3D.tsx",
            lineNumber: 137,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/ProjectTech3D.tsx",
        lineNumber: 136,
        columnNumber: 9
    }, this);
}
_s(ProjectTech3D, "76OfTKswtlYfcyBWk5XLQJOYEek=");
_c1 = ProjectTech3D;
var _c, _c1;
__turbopack_context__.k.register(_c, "TechObject");
__turbopack_context__.k.register(_c1, "ProjectTech3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ProjectTech3D.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ui/ProjectTech3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_ui_ProjectTech3D_tsx_3ac7e02f._.js.map