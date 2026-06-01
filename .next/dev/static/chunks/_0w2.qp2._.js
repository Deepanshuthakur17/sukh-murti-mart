(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/hero-store.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hero-store.0mrl09~e3vb.k.jpg");}),
"[project]/src/assets/hero-store.jpg.mjs { IMAGE => \"[project]/src/assets/hero-store.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero$2d$store$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/hero-store.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero$2d$store$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1600,
    height: 1100,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDNl0OytrJpjCGYFR1OMkZzXkLGXmo9ztq0HSjeR//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/MagneticButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MagneticButton",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function MagneticButton({ children, href, className = "", onClick, type }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMove = (e)=>{
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
    };
    const reset = ()=>{
        if (ref.current) ref.current.style.transform = "translate(0,0)";
    };
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        whileTap: {
            scale: 0.96
        },
        className: "inline-flex items-center gap-2",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/site/MagneticButton.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            href: href,
            onMouseMove: handleMove,
            onMouseLeave: reset,
            onClick: onClick,
            className: `inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${className}`,
            children: inner
        }, void 0, false, {
            fileName: "[project]/src/components/site/MagneticButton.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: type ?? "button",
        onMouseMove: handleMove,
        onMouseLeave: reset,
        onClick: onClick,
        className: `inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${className}`,
        children: inner
    }, void 0, false, {
        fileName: "[project]/src/components/site/MagneticButton.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(MagneticButton, "QMBuJFIdzLIeqBcFwhMf246mjOM=");
_c = MagneticButton;
var _c;
__turbopack_context__.k.register(_c, "MagneticButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firecms$2f$neat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firecms/neat/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero$2d$store$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$hero$2d$store$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/hero-store.jpg.mjs { IMAGE => "[project]/src/assets/hero-store.jpg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/MagneticButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Hero() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!canvasRef.current) return;
            const config = {
                colors: [
                    {
                        color: '#0F7A45',
                        enabled: true
                    },
                    {
                        color: '#14a35c',
                        enabled: true
                    },
                    {
                        color: '#FF9F1A',
                        enabled: true
                    },
                    {
                        color: '#ffb84d',
                        enabled: true
                    },
                    {
                        color: '#f5e1e5',
                        enabled: false
                    }
                ],
                speed: 6,
                horizontalPressure: 7,
                verticalPressure: 8,
                waveFrequencyX: 1,
                waveFrequencyY: 2,
                waveAmplitude: 8,
                shadows: 4,
                highlights: 6,
                colorBrightness: 0.95,
                colorSaturation: -8,
                wireframe: false,
                colorBlending: 10,
                backgroundColor: '#0F7A45',
                backgroundAlpha: 1,
                grainScale: 4,
                grainSparsity: 0,
                grainIntensity: 0.25,
                grainSpeed: 1,
                resolution: 1,
                yOffset: 0,
                yOffsetWaveMultiplier: 6.2,
                yOffsetColorMultiplier: 5.8,
                yOffsetFlowMultiplier: 6.5,
                flowDistortionA: 1.1,
                flowDistortionB: 0.8,
                flowScale: 1.6,
                flowEase: 0.32,
                flowEnabled: true,
                enableProceduralTexture: false,
                textureVoidLikelihood: 0.27,
                textureVoidWidthMin: 60,
                textureVoidWidthMax: 420,
                textureBandDensity: 1.2,
                textureColorBlending: 0.06,
                textureSeed: 333,
                textureEase: 0.22,
                proceduralBackgroundColor: '#0E0707',
                textureShapeTriangles: 20,
                textureShapeCircles: 15,
                textureShapeBars: 15,
                textureShapeSquiggles: 10,
                domainWarpEnabled: false,
                domainWarpIntensity: 0,
                domainWarpScale: 3,
                vignetteIntensity: 0,
                vignetteRadius: 0.8,
                fresnelEnabled: false,
                fresnelPower: 2,
                fresnelIntensity: 0.5,
                fresnelColor: '#FFFFFF',
                iridescenceEnabled: false,
                iridescenceIntensity: 0.5,
                iridescenceSpeed: 1,
                bloomIntensity: 0,
                bloomThreshold: 0.7,
                chromaticAberration: 0
            };
            const gradient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firecms$2f$neat$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeatGradient"]({
                ref: canvasRef.current,
                ...config
            });
            const handleScroll = {
                "Hero.useEffect.handleScroll": ()=>{
                    gradient.yOffset = window.scrollY;
                }
            }["Hero.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Hero.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    gradient.destroy();
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative min-h-svh overflow-hidden pt-28 pb-16 noise transition-colors duration-500 isolate",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$hero$2d$store$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$hero$2d$store$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                        alt: "Sukh Murti Mart store",
                        width: 1600,
                        height: 1100,
                        className: "absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        className: "absolute inset-0 mix-blend-screen dark:mix-blend-lighten opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-linear-to-b from-background/40 via-background/80 to-background dark:from-background/20 dark:via-background/60 dark:to-background pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-mesh opacity-60 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orb animate-orb",
                        style: {
                            width: 500,
                            height: 500,
                            left: "-10%",
                            top: "10%",
                            background: "radial-gradient(circle, oklch(0.65 0.16 152 / 0.25), transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "orb animate-orb",
                        style: {
                            width: 400,
                            height: 400,
                            right: "-5%",
                            bottom: "20%",
                            background: "radial-gradient(circle, oklch(0.85 0.15 70 / 0.15), transparent 70%)",
                            animationDelay: "4s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/Hero.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center min-h-[80svh] relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "inline-flex items-center gap-2 glass-light dark:glass rounded-full px-4 py-2 text-xs md:text-sm font-medium mb-6 text-foreground border-primary/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex w-2 h-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/Hero.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/Hero.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    "Open now · Fresh stock arrived today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                className: "text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground",
                                children: [
                                    "Moradabad's ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary dark:text-primary underline decoration-accent/30 decoration-4 underline-offset-4",
                                        children: "Trusted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 139,
                                        columnNumber: 151
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70",
                                        children: "Grocery & Wholesale Mart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.25
                                },
                                className: "mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
                                children: "Quality groceries, daily essentials and wholesale products at trusted prices — served fresh to families and businesses across the city."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.4
                                },
                                className: "mt-8 flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagneticButton"], {
                                        href: "#contact",
                                        className: "bg-gradient-brand text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/Hero.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            " Contact Us"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagneticButton"], {
                                        href: "#contact",
                                        className: "glass-light dark:glass text-foreground px-8 py-4 rounded-full font-semibold hover:scale-105",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/Hero.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            " Visit Store"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.55
                                },
                                className: "mt-10 flex flex-wrap gap-2 text-xs text-muted-foreground",
                                children: [
                                    {
                                        i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                                        t: "Trusted by 10K+ families"
                                    },
                                    {
                                        i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                                        t: "Home delivery available"
                                    },
                                    {
                                        i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                        t: "Replies in ~5 min"
                                    }
                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5 glass-light dark:glass rounded-full px-4 py-2 border border-foreground/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.i, {
                                                className: "w-3.5 h-3.5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/Hero.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            c.t
                                        ]
                                    }, c.t, true, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 relative h-[420px] lg:h-[540px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.3
                                },
                                className: "absolute top-4 right-0 lg:right-6 glass-light dark:glass rounded-3xl p-6 w-64 animate-float border-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 text-primary mb-2",
                                        children: [
                                            ...Array(5)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-4 h-4 fill-current"
                                            }, i, false, {
                                                fileName: "[project]/src/components/site/Hero.tsx",
                                                lineNumber: 193,
                                                columnNumber: 44
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-foreground",
                                        children: "4.5★"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold",
                                        children: "Customer Rating"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-muted-foreground/60 mt-0.5",
                                        children: "Based on 83+ Verified Reviews"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.5
                                },
                                className: "absolute bottom-24 left-2 lg:left-0 glass-light dark:glass rounded-3xl p-6 w-60 animate-float-delay border-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand shadow-glow mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                            className: "w-6 h-6 text-primary-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/Hero.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-bold text-foreground",
                                        children: "Fresh Daily"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground mt-1 leading-relaxed",
                                        children: "Stocked & quality checked every single morning."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.7
                                },
                                className: "absolute bottom-2 right-4 glass-light dark:glass rounded-3xl p-6 w-56 animate-float border-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid place-items-center w-12 h-12 rounded-2xl bg-gradient-warm shadow-warm mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                            className: "w-6 h-6 text-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/Hero.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base font-bold text-foreground",
                                        children: "Local Trust"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-muted-foreground mt-1 leading-relaxed",
                                        children: "Moradabad's favorite wholesale partner."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Hero.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Hero.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/Hero.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/Hero.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 inset-x-0 h-24 bg-linear-to-b from-transparent to-background"
            }, void 0, false, {
                fileName: "[project]/src/components/site/Hero.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/Hero.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Hero, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/Hero.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/site/Hero.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/@firecms/neat/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeatGradient",
    ()=>We
]);
const Ce = `void main() {
    vUv = uv;

    // SCROLLING LOGIC
    // Separate multipliers for wave, color, and flow offsets
    float waveOffset = -u_y_offset * u_y_offset_wave_multiplier;
    float colorOffset = -u_y_offset * u_y_offset_color_multiplier;
    float flowOffset = -u_y_offset * u_y_offset_flow_multiplier;

    // 1. DISPLACEMENT (WAVES)
    // We add waveOffset to Y to scroll the wave pattern
    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * (position.y + waveOffset) + u_time,
        u_time
    ));

    // 2. FLOW FIELD
    // Apply flow offset to scroll the flow field mask
    vec2 baseUv = vUv;
    baseUv.y += flowOffset / u_plane_height; // Scale to match wave speed
    vec2 flowUv = baseUv;

    if (u_flow_enabled > 0.5) {
        if (u_flow_ease > 0.0 || u_flow_distortion_a > 0.0) {
            vec2 ppp = -1.0 + 2.0 * baseUv;
            ppp += 0.1 * cos((1.5 * u_flow_scale) * ppp.yx + 1.1 * u_time + vec2(0.1, 1.1));
            ppp += 0.1 * cos((2.3 * u_flow_scale) * ppp.yx + 1.3 * u_time + vec2(3.2, 3.4));
            ppp += 0.1 * cos((2.2 * u_flow_scale) * ppp.yx + 1.7 * u_time + vec2(1.8, 5.2));
            ppp += u_flow_distortion_a * cos((u_flow_distortion_b * u_flow_scale) * ppp.yx + 1.4 * u_time + vec2(6.3, 3.9));

            float r = length(ppp);
            flowUv = mix(baseUv, vec2(baseUv.x * (1.0 - u_flow_ease) + r * u_flow_ease, baseUv.y), u_flow_ease);
        }
    }

    // Pass the standard flow UV to fragment shader (for texture)
    vFlowUv = flowUv;

    // 3. COLOR MIXING
    // We take the computed flow UVs and apply the color offset
    // Scale by plane height to match wave offset speed (world space vs UV space)
    vec3 color = u_colors[0].color;
    // ...
    vec2 adjustedUv = flowUv;
    adjustedUv.y += colorOffset / u_plane_height; // Scroll the color mixing pattern

    vec2 noise_cord = adjustedUv * u_color_pressure;
    const float minNoise = .0;
    const float maxNoise = .9;

    for (int i = 1; i < 6; i++) {
        if (i < u_colors_count) {
            if (u_colors[i].is_active > 0.5) {
                float noiseFlow = (1. + float(i)) / 30.;
                float noiseSpeed = (1. + float(i)) * 0.11;
                float noiseSeed = 13. + float(i) * 7.;

                float noise = snoise(
                    vec3(
                        noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                        noise_cord.y * u_color_pressure.y,
                        u_time * noiseSpeed
                    ) + noiseSeed
                ) - (.1 * float(i)) + (.5 * u_color_blending);

                noise = clamp(noise, minNoise, maxNoise + float(i) * 0.02);
                color = mix(color, u_colors[i].color, smoothstep(0.0, u_color_blending, noise));
            }
        }
    }

    v_color = color;

    // 4. FRESNEL (rim glow)
    // (Calculated in fragment shader using displacement slope approximation)

    // 5. VERTEX POSITION
    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    v_new_position = gl_Position;
}
`, Pe = `float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float fbm(vec3 x) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        value += amplitude * snoise(x * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

// Branchless HSL to RGB for iridescence
vec3 hsl2rgb(float h, float s, float l) {
    vec3 rgb = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return l + s * (rgb - 0.5) * (1.0 - abs(2.0 * l - 1.0));
}

void main() {
    vec2 finalUv = vFlowUv;
    
    vec3 baseColor;

    if (u_enable_procedural_texture > 0.5) {
        vec2 ppp = -1.0 + 2.0 * finalUv;
        ppp += 0.1 * cos((1.5 * u_flow_scale) * ppp.yx + 1.1 * u_time + vec2(0.1, 1.1));
        ppp += 0.1 * cos((2.3 * u_flow_scale) * ppp.yx + 1.3 * u_time + vec2(3.2, 3.4));
        ppp += 0.1 * cos((2.2 * u_flow_scale) * ppp.yx + 1.7 * u_time + vec2(1.8, 5.2));
        ppp += u_flow_distortion_a * cos((u_flow_distortion_b * u_flow_scale) * ppp.yx + 1.4 * u_time + vec2(6.3, 3.9));
        float r = length(ppp);
        
        float vx = (finalUv.x * u_texture_ease) + (r * (1.0 - u_texture_ease));
        float vy = (finalUv.y * u_texture_ease) + (0.0 * (1.0 - u_texture_ease));
        vec2 texUv = vec2(vx, vy);

        float parallaxFactor = 0.25;
        texUv.y -= (u_y_offset * u_y_offset_color_multiplier / u_plane_height) * parallaxFactor;
        texUv *= 1.5;

        vec4 texSample = texture2D(u_procedural_texture, texUv);
        baseColor = texSample.rgb;
    } else {
        baseColor = v_color;
    }

    vec3 color = baseColor;

    // === DOMAIN WARPING (simplified: 3 fbm calls instead of 5) ===
    if (u_domain_warp_enabled > 0.5) {
        vec3 p = vec3(finalUv * u_domain_warp_scale, u_time * 0.15);
        vec2 q = vec2(fbm(p), fbm(p + vec3(5.2, 1.3, 0.0)));
        float f = fbm(p + vec3(4.0 * q, 0.0));
        vec3 warpColor = color * (1.0 + f * 0.8 * u_domain_warp_intensity);
        float pattern = clamp(f * f * f + 0.6 * f * f + 0.5 * f, 0.0, 1.0);
        color = mix(color, warpColor * (0.6 + pattern * 0.8), u_domain_warp_intensity * 0.7);
    }

    // Post-processing
    color += v_displacement_amount * u_highlights;
    float shadowFactor = 1.0 - v_displacement_amount;
    color -= shadowFactor * shadowFactor * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;

    // === IRIDESCENCE ===
    if (u_iridescence_enabled > 0.5) {
        float hue = fract(v_displacement_amount * 0.5 + 0.5 + u_time * u_iridescence_speed * 0.05);
        vec3 iriColor = hsl2rgb(hue, 0.8, 0.6);
        color = mix(color, iriColor, u_iridescence_intensity * abs(v_displacement_amount) * 0.6);
    }

    // === FRESNEL (Rim glow) ===
    if (u_fresnel_enabled > 0.5) {
        float slope = 1.0 - abs(v_displacement_amount);
        float fresnel = pow(max(slope, 0.0), u_fresnel_power);
        color += u_fresnel_color * fresnel * u_fresnel_intensity;
    }

    // === VIGNETTE ===
    if (u_vignette_intensity > 0.0) {
        float dist = length(vUv - vec2(0.5));
        float vig = smoothstep(u_vignette_radius, u_vignette_radius * 0.3, dist);
        color *= mix(1.0, vig, u_vignette_intensity);
    }

    // === FAKE BLOOM ===
    if (u_bloom_intensity > 0.0) {
        float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
        float bloomMask = smoothstep(u_bloom_threshold, 1.0, luma);
        color += color * bloomMask * u_bloom_intensity;
    }

    // === CHROMATIC ABERRATION ===
    if (u_chromatic_aberration > 0.0) {
        float caAmount = u_chromatic_aberration * 0.008;
        float dist = length(vUv - vec2(0.5));
        float rShift = v_displacement_amount + caAmount * dist;
        float bShift = v_displacement_amount - caAmount * dist;
        color.r *= 1.0 + rShift * caAmount * 10.0;
        color.b *= 1.0 - bShift * caAmount * 10.0;
    }

    // Grain (use cheap hash noise instead of expensive fbm when static)
    float grain = 0.0;
    if (u_grain_intensity > 0.0) {
        vec2 noiseCoords = gl_FragCoord.xy / u_grain_scale;
        if (u_grain_speed != 0.0) {
            grain = fbm(vec3(noiseCoords, u_time * u_grain_speed));
        } else {
            // Static grain: use cheap hash instead of fbm
            grain = random(noiseCoords) - 0.5;
        }

        grain = grain * 0.5 + 0.5;
        grain -= 0.5;
        grain = (grain > u_grain_sparsity) ? grain : 0.0;
        grain *= u_grain_intensity;
    }

    color += vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}
`;
function De() {
    return `precision highp float;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;
varying vec2 vFlowUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_color_pressure;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;
uniform float u_wave_amplitude;
uniform float u_plane_width;
uniform float u_plane_height;
uniform float u_color_blending;

uniform int u_colors_count;
struct ColorStop {
    float is_active;
    vec3 color;
    float influence;
};
uniform ColorStop u_colors[6];

uniform float u_y_offset;
uniform float u_y_offset_wave_multiplier;
uniform float u_y_offset_color_multiplier;
uniform float u_y_offset_flow_multiplier;

// Flow field uniforms
uniform float u_flow_distortion_a;
uniform float u_flow_distortion_b;
uniform float u_flow_scale;
uniform float u_flow_ease;
uniform float u_flow_enabled;

// Fresnel uniforms
uniform float u_fresnel_enabled;
uniform float u_fresnel_power;
uniform float u_fresnel_intensity;
uniform vec3 u_fresnel_color;
`;
}
function ze() {
    return `precision highp float;

varying vec2 vUv;
varying vec2 vFlowUv;
varying vec3 v_color;
varying float v_displacement_amount;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;
uniform float u_grain_intensity; 
uniform float u_grain_sparsity; 
uniform float u_grain_scale; 
uniform float u_grain_speed; 

uniform float u_y_offset;
uniform float u_y_offset_color_multiplier;

// Flow field uniforms
uniform float u_flow_distortion_a;
uniform float u_flow_distortion_b;
uniform float u_flow_scale;

// Procedural texture uniforms
uniform sampler2D u_procedural_texture;
uniform float u_enable_procedural_texture;
uniform float u_texture_ease;

// Domain warping uniforms
uniform float u_domain_warp_enabled;
uniform float u_domain_warp_intensity;
uniform float u_domain_warp_scale;

// Vignette uniforms
uniform float u_vignette_intensity;
uniform float u_vignette_radius;

// Fresnel uniforms (fragment side)
uniform float u_fresnel_enabled;
uniform float u_fresnel_power;
uniform float u_fresnel_intensity;
uniform vec3 u_fresnel_color;



// Iridescence uniforms
uniform float u_iridescence_enabled;
uniform float u_iridescence_intensity;
uniform float u_iridescence_speed;

// Bloom uniforms
uniform float u_bloom_intensity;
uniform float u_bloom_threshold;

// Chromatic aberration
uniform float u_chromatic_aberration;
`;
}
function Y() {
    return `
// 1. REPLACEMENT PERMUTE: 
// Uses a hash function (fract/sin) instead of a modular lookup table.
vec4 permute(vec4 x) {
    return floor(fract(sin(x) * 43758.5453123) * 289.0);
}

// Taylor Inverse Sqrt
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// Fade function
vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// 3D Simplex Noise
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  // Permutations
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
`;
}
function j() {
    return `
vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
`;
}
class J {
    elements;
    constructor(){
        this.elements = new Float32Array([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    translate(e, r, s) {
        return this.elements[12] += this.elements[0] * e + this.elements[4] * r + this.elements[8] * s, this.elements[13] += this.elements[1] * e + this.elements[5] * r + this.elements[9] * s, this.elements[14] += this.elements[2] * e + this.elements[6] * r + this.elements[10] * s, this.elements[15] += this.elements[3] * e + this.elements[7] * r + this.elements[11] * s, this;
    }
    rotateX(e) {
        const r = Math.cos(e), s = Math.sin(e), t = this.elements[4], S = this.elements[5], y = this.elements[6], a = this.elements[7], p = this.elements[8], v = this.elements[9], T = this.elements[10], x = this.elements[11];
        return this.elements[4] = r * t + s * p, this.elements[5] = r * S + s * v, this.elements[6] = r * y + s * T, this.elements[7] = r * a + s * x, this.elements[8] = r * p - s * t, this.elements[9] = r * v - s * S, this.elements[10] = r * T - s * y, this.elements[11] = r * x - s * a, this;
    }
}
class Fe {
    left;
    right;
    top;
    bottom;
    near;
    far;
    position;
    projectionMatrix;
    constructor(e, r, s, t, S, y){
        this.left = e, this.right = r, this.top = s, this.bottom = t, this.near = S, this.far = y, this.position = [
            0,
            0,
            0
        ], this.projectionMatrix = new J(), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
        const e = 1 / (this.right - this.left), r = 1 / (this.top - this.bottom), s = 1 / (this.far - this.near), t = (this.right + this.left) * e, S = (this.top + this.bottom) * r, y = (this.far + this.near) * s;
        this.projectionMatrix.elements = new Float32Array([
            2 * e,
            0,
            0,
            0,
            0,
            2 * r,
            0,
            0,
            0,
            0,
            -2 * s,
            0,
            -t,
            -S,
            -y,
            1
        ]);
    }
}
function H(l, e, r, s = 50, t = 50) {
    const a = e * r / 1e6 * s * t / 1.5, p = e / r, v = Math.sqrt(a * p), T = a / v;
    let x = -s / 2, h = Math.min((x + v) / 1.5, s / 2), b = t / 4, R = Math.max((b - T) / 2, -t / 4);
    if (p < 1) {
        const E = p;
        x = x * E, h = h * E;
        const g = 1.05;
        x = x * g, h = h * g, b = b * g, R = R * g;
    }
    l.left = x, l.right = h, l.top = b, l.bottom = R, l.near = -100, l.far = 1e3, l.updateProjectionMatrix();
}
function Ie(l, e, r, s) {
    const t = l / 2, S = e / 2, y = Math.floor(r), a = Math.floor(s), p = y + 1, v = a + 1, T = l / y, x = e / a, h = [], b = [], R = [], E = [];
    for(let _ = 0; _ < v; _++){
        const u = _ * x - S;
        for(let m = 0; m < p; m++){
            const n = m * T - t;
            b.push(n, -u, 0), R.push(0, 0, 1), E.push(m / y), E.push(1 - _ / a);
        }
    }
    for(let _ = 0; _ < a; _++)for(let u = 0; u < y; u++){
        const m = u + p * _, n = u + p * (_ + 1), f = u + 1 + p * (_ + 1), c = u + 1 + p * _;
        h.push(m, n, c), h.push(n, f, c);
    }
    const g = b.length / 3 > 65535, A = [];
    for(let _ = 0; _ < h.length; _ += 3){
        const u = h[_], m = h[_ + 1], n = h[_ + 2];
        A.push(u, m, m, n, n, u);
    }
    return {
        position: new Float32Array(b),
        normal: new Float32Array(R),
        uv: new Float32Array(E),
        index: g ? new Uint32Array(h) : new Uint16Array(h),
        wireframeIndex: g ? new Uint32Array(A) : new Uint16Array(A)
    };
}
console.info(`%c\u{1F308} Neat Gradients%c

Licensed under MIT + The Commons Clause.
Free for personal and commercial use.
Selling this software or its derivatives is strictly prohibited.
https://neat.firecms.co`, "font-weight: bold; font-size: 14px; color: #FF5772;", "color: inherit;");
const $ = 50, K = 80, O = 6, Me = Le();
class We {
    _ref;
    _speed = -1;
    _horizontalPressure = -1;
    _verticalPressure = -1;
    _waveFrequencyX = -1;
    _waveFrequencyY = -1;
    _waveAmplitude = -1;
    _shadows = -1;
    _highlights = -1;
    _saturation = -1;
    _brightness = -1;
    _grainScale = -1;
    _grainIntensity = -1;
    _grainSparsity = -1;
    _grainSpeed = -1;
    _colorBlending = -1;
    _colors = [];
    _wireframe = !1;
    _backgroundColor = "#FFFFFF";
    _backgroundColorRgb = [
        1,
        1,
        1
    ];
    _backgroundAlpha = 1;
    _flowDistortionA = 0;
    _flowDistortionB = 0;
    _flowScale = 1;
    _flowEase = 0;
    _flowEnabled = !0;
    glState;
    _enableProceduralTexture = !1;
    _textureVoidLikelihood = 0.45;
    _textureVoidWidthMin = 200;
    _textureVoidWidthMax = 486;
    _textureBandDensity = 2.15;
    _textureColorBlending = 0.01;
    _textureSeed = 333;
    _textureEase = 0.5;
    _domainWarpEnabled = !1;
    _domainWarpIntensity = 0.5;
    _domainWarpScale = 1;
    _vignetteIntensity = 0.5;
    _vignetteRadius = 0.8;
    _fresnelEnabled = !1;
    _fresnelPower = 2;
    _fresnelIntensity = 0.5;
    _fresnelColor = "#FFFFFF";
    _fresnelColorRgb = [
        1,
        1,
        1
    ];
    _iridescenceEnabled = !1;
    _iridescenceIntensity = 0.5;
    _iridescenceSpeed = 1;
    _bloomIntensity = 0;
    _bloomThreshold = 0.7;
    _chromaticAberration = 0;
    _proceduralTexture = null;
    _proceduralBackgroundColor = "#000000";
    _textureShapeTriangles = 20;
    _textureShapeCircles = 15;
    _textureShapeBars = 15;
    _textureShapeSquiggles = 10;
    requestRef = -1;
    sizeObserver;
    _initialized = !1;
    _linkElement = null;
    _cachedColorRgb = [];
    _yOffset = 0;
    _yOffsetWaveMultiplier = 4e-3;
    _yOffsetColorMultiplier = 4e-3;
    _yOffsetFlowMultiplier = 4e-3;
    _resizeTimeoutId = null;
    _textureNeedsUpdate = !1;
    _linkCheckCounter = 0;
    _colorsChanged = !0;
    _uniformsDirty = !0;
    _textureDirty = !0;
    constructor(e){
        const { ref: r, speed: s = 4, horizontalPressure: t = 3, verticalPressure: S = 3, waveFrequencyX: y = 5, waveFrequencyY: a = 5, waveAmplitude: p = 3, colors: v, highlights: T = 4, shadows: x = 4, colorSaturation: h = 0, colorBrightness: b = 1, colorBlending: R = 5, grainScale: E = 2, grainIntensity: g = 0.55, grainSparsity: A = 0, grainSpeed: _ = 0.1, wireframe: u = !1, backgroundColor: m = "#FFFFFF", backgroundAlpha: n = 1, resolution: f = 1, seed: c, yOffset: d = 0, yOffsetWaveMultiplier: C = 4, yOffsetColorMultiplier: D = 4, yOffsetFlowMultiplier: F = 4, flowDistortionA: I = 0, flowDistortionB: N = 0, flowScale: W = 1, flowEase: z = 0, flowEnabled: w = !0, enableProceduralTexture: M = !1, textureVoidLikelihood: Q = 0.45, textureVoidWidthMin: ee = 200, textureVoidWidthMax: te = 486, textureBandDensity: ie = 2.15, textureColorBlending: re = 0.01, textureSeed: oe = 333, textureEase: se = 0.5, proceduralBackgroundColor: ne = "#000000", textureShapeTriangles: ae = 20, textureShapeCircles: le = 15, textureShapeBars: ue = 15, textureShapeSquiggles: fe = 10, domainWarpEnabled: _e = !1, domainWarpIntensity: ce = 0.5, domainWarpScale: he = 1, vignetteIntensity: de = 0.5, vignetteRadius: me = 0.8, fresnelEnabled: pe = !1, fresnelPower: ge = 2, fresnelIntensity: xe = 0.5, fresnelColor: ye = "#FFFFFF", iridescenceEnabled: ve = !1, iridescenceIntensity: be = 0.5, iridescenceSpeed: we = 1, bloomIntensity: Se = 0, bloomThreshold: Ee = 0.7, chromaticAberration: Te = 0 } = e;
        this._ref = r, this.destroy = this.destroy.bind(this), this._initScene = this._initScene.bind(this), this.speed = s, this.horizontalPressure = t, this.verticalPressure = S, this.waveFrequencyX = y, this.waveFrequencyY = a, this.waveAmplitude = p, this.colorBlending = R, this.grainScale = E, this.grainIntensity = g, this.grainSparsity = A, this.grainSpeed = _, this.colors = v, this.shadows = x, this.highlights = T, this.colorSaturation = h, this.colorBrightness = b, this.wireframe = u, this.backgroundColor = m, this.backgroundAlpha = n, this.yOffset = d, this.yOffsetWaveMultiplier = C, this.yOffsetColorMultiplier = D, this.yOffsetFlowMultiplier = F, this.flowDistortionA = I, this.flowDistortionB = N, this.flowScale = W, this.flowEase = z, this.flowEnabled = w, this.enableProceduralTexture = M, this.textureVoidLikelihood = Q, this.textureVoidWidthMin = ee, this.textureVoidWidthMax = te, this.textureBandDensity = ie, this.textureColorBlending = re, this.textureSeed = oe, this.textureEase = se, this._proceduralBackgroundColor = ne, this._textureShapeTriangles = ae, this._textureShapeCircles = le, this._textureShapeBars = ue, this._textureShapeSquiggles = fe, this.domainWarpEnabled = _e, this.domainWarpIntensity = ce, this.domainWarpScale = he, this.vignetteIntensity = de, this.vignetteRadius = me, this.fresnelEnabled = pe, this.fresnelPower = ge, this.fresnelIntensity = xe, this.fresnelColor = ye, this.iridescenceEnabled = ve, this.iridescenceIntensity = be, this.iridescenceSpeed = we, this.bloomIntensity = Se, this.bloomThreshold = Ee, this.chromaticAberration = Te, this.glState = this._initScene(f), Ne();
        let k = c !== void 0 ? c : Be(), q = performance.now();
        const V = ()=>{
            const { gl: i, program: B, locations: o, indexCount: U, indexType: L } = this.glState;
            if (this._linkCheckCounter++, this._linkCheckCounter >= 300 && (this._linkCheckCounter = 0, (!this._linkElement || !document.contains(this._linkElement)) && (this._linkElement = Ue(r))), this._initialized) {
                const X = performance.now();
                if (k += (X - q) / 1e3 * this._speed, q = X, i.useProgram(B), i.uniform1f(o.uniforms.u_time, k), this._uniformsDirty && (i.uniform2f(o.uniforms.u_resolution, this._ref.clientWidth, this._ref.clientHeight), i.uniform2f(o.uniforms.u_color_pressure, this._horizontalPressure, this._verticalPressure), i.uniform1f(o.uniforms.u_wave_frequency_x, this._waveFrequencyX), i.uniform1f(o.uniforms.u_wave_frequency_y, this._waveFrequencyY), i.uniform1f(o.uniforms.u_wave_amplitude, this._waveAmplitude), i.uniform1f(o.uniforms.u_color_blending, this._colorBlending), i.uniform1f(o.uniforms.u_shadows, this._shadows), i.uniform1f(o.uniforms.u_highlights, this._highlights), i.uniform1f(o.uniforms.u_saturation, this._saturation), i.uniform1f(o.uniforms.u_brightness, this._brightness), i.uniform1f(o.uniforms.u_grain_intensity, this._grainIntensity), i.uniform1f(o.uniforms.u_grain_sparsity, this._grainSparsity), i.uniform1f(o.uniforms.u_grain_speed, this._grainSpeed), i.uniform1f(o.uniforms.u_grain_scale, this._grainScale), i.uniform1f(o.uniforms.u_y_offset, this._yOffset), i.uniform1f(o.uniforms.u_y_offset_wave_multiplier, this._yOffsetWaveMultiplier), i.uniform1f(o.uniforms.u_y_offset_color_multiplier, this._yOffsetColorMultiplier), i.uniform1f(o.uniforms.u_y_offset_flow_multiplier, this._yOffsetFlowMultiplier), i.uniform1f(o.uniforms.u_flow_distortion_a, this._flowDistortionA), i.uniform1f(o.uniforms.u_flow_distortion_b, this._flowDistortionB), i.uniform1f(o.uniforms.u_flow_scale, this._flowScale), i.uniform1f(o.uniforms.u_flow_ease, this._flowEase), i.uniform1f(o.uniforms.u_flow_enabled, this._flowEnabled ? 1 : 0), i.uniform1f(o.uniforms.u_enable_procedural_texture, this._enableProceduralTexture ? 1 : 0), i.uniform1f(o.uniforms.u_texture_ease, this._textureEase), i.uniform1f(o.uniforms.u_domain_warp_enabled, this._domainWarpEnabled ? 1 : 0), i.uniform1f(o.uniforms.u_domain_warp_intensity, this._domainWarpIntensity), i.uniform1f(o.uniforms.u_domain_warp_scale, this._domainWarpScale), i.uniform1f(o.uniforms.u_vignette_intensity, this._vignetteIntensity), i.uniform1f(o.uniforms.u_vignette_radius, this._vignetteRadius), i.uniform1f(o.uniforms.u_fresnel_enabled, this._fresnelEnabled ? 1 : 0), i.uniform1f(o.uniforms.u_fresnel_power, this._fresnelPower), i.uniform1f(o.uniforms.u_fresnel_intensity, this._fresnelIntensity), i.uniform3fv(o.uniforms.u_fresnel_color, this._fresnelColorRgb), i.uniform1f(o.uniforms.u_iridescence_enabled, this._iridescenceEnabled ? 1 : 0), i.uniform1f(o.uniforms.u_iridescence_intensity, this._iridescenceIntensity), i.uniform1f(o.uniforms.u_iridescence_speed, this._iridescenceSpeed), i.uniform1f(o.uniforms.u_bloom_intensity, this._bloomIntensity), i.uniform1f(o.uniforms.u_bloom_threshold, this._bloomThreshold), i.uniform1f(o.uniforms.u_chromatic_aberration, this._chromaticAberration), this._uniformsDirty = !1), this._textureNeedsUpdate && this._enableProceduralTexture && (this._proceduralTexture && i.deleteTexture(this._proceduralTexture), this._proceduralTexture = this._createProceduralTexture(i), this._textureNeedsUpdate = !1, this._textureDirty = !0), this._textureDirty && this._proceduralTexture && (i.activeTexture(i.TEXTURE1), i.bindTexture(i.TEXTURE_2D, this._proceduralTexture), i.uniform1i(o.uniforms.u_procedural_texture, 1), this._textureDirty = !1), this._colorsChanged) {
                    this._colorsChanged = !1;
                    for(let P = 0; P < O; P++)if (P < this._colors.length) {
                        const G = this._colors[P], Ae = this._cachedColorRgb[P] || [
                            0,
                            0,
                            0
                        ];
                        i.uniform1f(o.uniforms[`u_colors[${P}].is_active`], G.enabled ? 1 : 0), i.uniform3fv(o.uniforms[`u_colors[${P}].color`], Ae), i.uniform1f(o.uniforms[`u_colors[${P}].influence`], G.influence || 0);
                    } else i.uniform1f(o.uniforms[`u_colors[${P}].is_active`], 0);
                    i.uniform1i(o.uniforms.u_colors_count, O);
                }
            }
            i.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], this._backgroundAlpha), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), this._wireframe ? (i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.glState.buffers.wireframeIndex), i.drawElements(i.LINES, this.glState.wireframeIndexCount, L, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.glState.buffers.index)) : i.drawElements(i.TRIANGLES, U, L, 0), this.requestRef = requestAnimationFrame(V);
        }, Re = ()=>{
            const { gl: i, camera: B } = this.glState, o = this._ref.clientWidth, U = this._ref.clientHeight;
            this._ref.width = o, this._ref.height = U, i.viewport(0, 0, o, U), H(B, o, U);
            const L = i.getUniformLocation(this.glState.program, "projectionMatrix");
            i.useProgram(this.glState.program), i.uniformMatrix4fv(L, !1, B.projectionMatrix.elements);
        };
        this.sizeObserver = new ResizeObserver(()=>{
            this._resizeTimeoutId !== null && clearTimeout(this._resizeTimeoutId), this._resizeTimeoutId = window.setTimeout(()=>{
                Re(), this._resizeTimeoutId = null;
            }, 100);
        }), this.sizeObserver.observe(r), V();
    }
    destroy() {
        if (cancelAnimationFrame(this.requestRef), this.sizeObserver.disconnect(), this._resizeTimeoutId !== null && (clearTimeout(this._resizeTimeoutId), this._resizeTimeoutId = null), this._linkElement && this._linkElement.parentElement && (this._linkElement.parentElement.removeChild(this._linkElement), this._linkElement = null), this.glState) {
            const e = this.glState.gl;
            e.deleteProgram(this.glState.program), e.deleteBuffer(this.glState.buffers.position), e.deleteBuffer(this.glState.buffers.normal), e.deleteBuffer(this.glState.buffers.uv), e.deleteBuffer(this.glState.buffers.index), e.deleteBuffer(this.glState.buffers.wireframeIndex);
        }
        this._proceduralTexture && this.glState && this.glState.gl.deleteTexture(this._proceduralTexture);
    }
    downloadAsPNG(e = "neat.png") {
        const r = this._ref.toDataURL("image/png");
        Oe(r, e);
    }
    set speed(e) {
        this._uniformsDirty = !0, this._speed = e / 20;
    }
    set horizontalPressure(e) {
        this._uniformsDirty = !0, this._horizontalPressure = e / 4;
    }
    set verticalPressure(e) {
        this._uniformsDirty = !0, this._verticalPressure = e / 4;
    }
    set waveFrequencyX(e) {
        this._uniformsDirty = !0, this._waveFrequencyX = e * 0.04;
    }
    set waveFrequencyY(e) {
        this._uniformsDirty = !0, this._waveFrequencyY = e * 0.04;
    }
    set waveAmplitude(e) {
        this._uniformsDirty = !0, this._waveAmplitude = e * 0.75;
    }
    set colors(e) {
        this._uniformsDirty = !0, this._colors = e, this._cachedColorRgb = e.map((r)=>this._hexToRgb(r.color)), this._colorsChanged = !0;
    }
    set highlights(e) {
        this._uniformsDirty = !0, this._highlights = e / 100;
    }
    set shadows(e) {
        this._uniformsDirty = !0, this._shadows = e / 100;
    }
    set colorSaturation(e) {
        this._uniformsDirty = !0, this._saturation = e / 10;
    }
    set colorBrightness(e) {
        this._uniformsDirty = !0, this._brightness = e;
    }
    set colorBlending(e) {
        this._uniformsDirty = !0, this._colorBlending = e / 10;
    }
    set grainScale(e) {
        this._uniformsDirty = !0, this._grainScale = e == 0 ? 1 : e;
    }
    set grainIntensity(e) {
        this._uniformsDirty = !0, this._grainIntensity = e;
    }
    set grainSparsity(e) {
        this._uniformsDirty = !0, this._grainSparsity = e;
    }
    set grainSpeed(e) {
        this._uniformsDirty = !0, this._grainSpeed = e;
    }
    set wireframe(e) {
        this._uniformsDirty = !0, this._wireframe = e;
    }
    set resolution(e) {
        if (this._uniformsDirty = !0, this.glState) {
            const r = this.glState.gl;
            r.deleteProgram(this.glState.program), r.deleteBuffer(this.glState.buffers.position), r.deleteBuffer(this.glState.buffers.normal), r.deleteBuffer(this.glState.buffers.uv), r.deleteBuffer(this.glState.buffers.index), r.deleteBuffer(this.glState.buffers.wireframeIndex);
        }
        this.glState = this._initScene(e);
    }
    set backgroundColor(e) {
        this._uniformsDirty = !0, this._backgroundColor = e, this._backgroundColorRgb = this._hexToRgb(e);
    }
    set backgroundAlpha(e) {
        this._uniformsDirty = !0, this._backgroundAlpha = e;
    }
    set yOffset(e) {
        this._uniformsDirty = !0, this._yOffset = e;
    }
    get yOffsetWaveMultiplier() {
        return this._yOffsetWaveMultiplier * 1e3;
    }
    set yOffsetWaveMultiplier(e) {
        this._uniformsDirty = !0, this._yOffsetWaveMultiplier = e / 1e3;
    }
    get yOffsetColorMultiplier() {
        return this._yOffsetColorMultiplier * 1e3;
    }
    set yOffsetColorMultiplier(e) {
        this._uniformsDirty = !0, this._yOffsetColorMultiplier = e / 1e3;
    }
    get yOffsetFlowMultiplier() {
        return this._yOffsetFlowMultiplier * 1e3;
    }
    set yOffsetFlowMultiplier(e) {
        this._uniformsDirty = !0, this._yOffsetFlowMultiplier = e / 1e3;
    }
    set flowDistortionA(e) {
        this._uniformsDirty = !0, this._flowDistortionA = e;
    }
    set flowDistortionB(e) {
        this._uniformsDirty = !0, this._flowDistortionB = e;
    }
    set flowScale(e) {
        this._uniformsDirty = !0, this._flowScale = e;
    }
    set flowEase(e) {
        this._uniformsDirty = !0, this._flowEase = e;
    }
    set flowEnabled(e) {
        this._uniformsDirty = !0, this._flowEnabled = e;
    }
    get flowEnabled() {
        return this._flowEnabled;
    }
    set enableProceduralTexture(e) {
        this._uniformsDirty = !0, this._enableProceduralTexture = e, e && !this._proceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureVoidLikelihood(e) {
        this._uniformsDirty = !0, this._textureVoidLikelihood = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureVoidWidthMin(e) {
        this._uniformsDirty = !0, this._textureVoidWidthMin = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureVoidWidthMax(e) {
        this._uniformsDirty = !0, this._textureVoidWidthMax = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureBandDensity(e) {
        this._uniformsDirty = !0, this._textureBandDensity = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureColorBlending(e) {
        this._uniformsDirty = !0, this._textureColorBlending = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureSeed(e) {
        this._uniformsDirty = !0, this._textureSeed = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    get textureEase() {
        return this._textureEase;
    }
    set textureEase(e) {
        this._uniformsDirty = !0, this._textureEase = e;
    }
    set proceduralBackgroundColor(e) {
        this._uniformsDirty = !0, this._proceduralBackgroundColor = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureShapeTriangles(e) {
        this._uniformsDirty = !0, this._textureShapeTriangles = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureShapeCircles(e) {
        this._uniformsDirty = !0, this._textureShapeCircles = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureShapeBars(e) {
        this._uniformsDirty = !0, this._textureShapeBars = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    set textureShapeSquiggles(e) {
        this._uniformsDirty = !0, this._textureShapeSquiggles = e, this._enableProceduralTexture && (this._textureNeedsUpdate = !0);
    }
    _hexToRgb(e) {
        const r = parseInt(e.replace("#", ""), 16);
        return [
            (r >> 16 & 255) / 255,
            (r >> 8 & 255) / 255,
            (r & 255) / 255
        ];
    }
    _initScene(e) {
        const r = this._ref.clientWidth, s = this._ref.clientHeight, t = this._ref.getContext("webgl2", {
            alpha: !0,
            preserveDrawingBuffer: !0,
            antialias: !0
        }) || this._ref.getContext("webgl", {
            alpha: !0,
            preserveDrawingBuffer: !0,
            antialias: !0
        });
        if (!t) throw new Error("WebGL not supported");
        t.getExtension("OES_standard_derivatives"), t.getExtension("OES_element_index_uint"), t.viewport(0, 0, r, s);
        const { position: S, normal: y, uv: a, index: p, wireframeIndex: v } = Ie($, K, 240 * e, 240 * e), T = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, T), t.bufferData(t.ARRAY_BUFFER, S, t.STATIC_DRAW);
        const x = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, x), t.bufferData(t.ARRAY_BUFFER, y, t.STATIC_DRAW);
        const h = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, h), t.bufferData(t.ARRAY_BUFFER, a, t.STATIC_DRAW);
        const b = t.createBuffer();
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, b), t.bufferData(t.ELEMENT_ARRAY_BUFFER, p, t.STATIC_DRAW);
        const R = t.createBuffer();
        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, R), t.bufferData(t.ELEMENT_ARRAY_BUFFER, v, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, b);
        const E = De() + `
` + Y() + `
` + j() + `
` + Ce, g = t.createShader(t.VERTEX_SHADER);
        t.shaderSource(g, E), t.compileShader(g), t.getShaderParameter(g, t.COMPILE_STATUS) || (console.log("VERTEX_SHADER_ERROR_START"), console.log("Vertex shader error: ", t.getShaderInfoLog(g)), console.log("GL Error Code:", t.getError()), console.log("Vertex Shader Source Dump:"), console.log(E.split(`
`).map((w, M)=>`${M + 1}: ${w}`).join(`
`)), console.log("VERTEX_SHADER_ERROR_END"));
        const A = ze() + `
` + j() + `
` + Y() + `
` + Pe, _ = t.createShader(t.FRAGMENT_SHADER);
        t.shaderSource(_, A), t.compileShader(_), t.getShaderParameter(_, t.COMPILE_STATUS) || (console.log("FRAGMENT_SHADER_ERROR_START"), console.log("Fragment shader error: ", t.getShaderInfoLog(_)), console.log("GL Error Code:", t.getError()), console.log("Fragment Shader Source Dump:"), console.log(A.split(`
`).map((w, M)=>`${M + 1}: ${w}`).join(`
`)), console.log("FRAGMENT_SHADER_ERROR_END"));
        const u = t.createProgram();
        t.attachShader(u, g), t.attachShader(u, _), t.linkProgram(u), t.getProgramParameter(u, t.LINK_STATUS) || (console.log("PROGRAM_LINK_ERROR_START"), console.log("Program linking error: ", t.getProgramInfoLog(u)), console.log("GL Error Code:", t.getError()), console.log("PROGRAM_LINK_ERROR_END")), t.useProgram(u);
        const m = new Fe(0, 0, 0, 0, 0, 1e3);
        m.position = [
            0,
            0,
            5
        ], H(m, r, s);
        const n = t.getAttribLocation(u, "position"), f = t.getAttribLocation(u, "normal"), c = t.getAttribLocation(u, "uv");
        t.enableVertexAttribArray(n), t.bindBuffer(t.ARRAY_BUFFER, T), t.vertexAttribPointer(n, 3, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(f), t.bindBuffer(t.ARRAY_BUFFER, x), t.vertexAttribPointer(f, 3, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(c), t.bindBuffer(t.ARRAY_BUFFER, h), t.vertexAttribPointer(c, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, b);
        const d = new J();
        d.translate(-m.position[0], -m.position[1], -m.position[2]), d.translate(0, 0, -1), d.rotateX(-Math.PI / 3.5);
        const C = t.getUniformLocation(u, "modelViewMatrix");
        t.uniformMatrix4fv(C, !1, d.elements);
        const D = t.getUniformLocation(u, "projectionMatrix");
        t.uniformMatrix4fv(D, !1, m.projectionMatrix.elements);
        const F = t.getUniformLocation(u, "u_plane_width");
        t.uniform1f(F, $);
        const I = t.getUniformLocation(u, "u_plane_height");
        t.uniform1f(I, K);
        const N = t.getUniformLocation(u, "u_colors_count");
        t.uniform1i(N, O);
        const W = [
            "u_time",
            "u_resolution",
            "u_color_pressure",
            "u_wave_frequency_x",
            "u_wave_frequency_y",
            "u_wave_amplitude",
            "u_colors_count",
            "u_plane_width",
            "u_plane_height",
            "u_shadows",
            "u_highlights",
            "u_grain_intensity",
            "u_grain_sparsity",
            "u_grain_scale",
            "u_grain_speed",
            "u_flow_distortion_a",
            "u_flow_distortion_b",
            "u_flow_scale",
            "u_flow_ease",
            "u_flow_enabled",
            "u_y_offset",
            "u_y_offset_wave_multiplier",
            "u_y_offset_color_multiplier",
            "u_y_offset_flow_multiplier",
            "u_procedural_texture",
            "u_enable_procedural_texture",
            "u_texture_ease",
            "u_saturation",
            "u_brightness",
            "u_color_blending",
            "u_domain_warp_enabled",
            "u_domain_warp_intensity",
            "u_domain_warp_scale",
            "u_vignette_intensity",
            "u_vignette_radius",
            "u_fresnel_enabled",
            "u_fresnel_power",
            "u_fresnel_intensity",
            "u_fresnel_color",
            "u_iridescence_enabled",
            "u_iridescence_intensity",
            "u_iridescence_speed",
            "u_bloom_intensity",
            "u_bloom_threshold",
            "u_chromatic_aberration"
        ], z = {
            attributes: {
                position: n,
                normal: f,
                uv: c
            },
            uniforms: {}
        };
        W.forEach((w)=>{
            z.uniforms[w] = t.getUniformLocation(u, w);
        });
        for(let w = 0; w < O; w++)z.uniforms[`u_colors[${w}].is_active`] = t.getUniformLocation(u, `u_colors[${w}].is_active`), z.uniforms[`u_colors[${w}].color`] = t.getUniformLocation(u, `u_colors[${w}].color`), z.uniforms[`u_colors[${w}].influence`] = t.getUniformLocation(u, `u_colors[${w}].influence`);
        return this._initialized = !0, this._uniformsDirty = !0, this._colorsChanged = !0, this._textureDirty = !0, t.enable(t.BLEND), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA), t.enable(t.DEPTH_TEST), {
            gl: t,
            program: u,
            buffers: {
                position: T,
                normal: x,
                uv: h,
                index: b,
                wireframeIndex: R
            },
            locations: z,
            camera: m,
            indexCount: p.length,
            wireframeIndexCount: v.length,
            indexType: p instanceof Uint32Array ? t.UNSIGNED_INT : t.UNSIGNED_SHORT
        };
    }
    _createProceduralTexture(e) {
        const s = document.createElement("canvas");
        s.width = 1024, s.height = 1024;
        const t = s.getContext("2d", {
            willReadFrequently: !0
        });
        if (!t) return null;
        let S = this._textureSeed;
        const y = this._textureSeed;
        function a() {
            const n = Math.sin(S++) * 1e4;
            return n - Math.floor(n);
        }
        const p = (n)=>{
            S = y + n;
        }, v = this._colors.filter((n)=>n.enabled).map((n)=>n.color);
        if (v.length === 0) return null;
        function T(n) {
            const f = parseInt(n.replace("#", ""), 16);
            return {
                r: f >> 16 & 255,
                g: f >> 8 & 255,
                b: f & 255
            };
        }
        function x(n, f, c) {
            return "#" + ((1 << 24) + (Math.round(n) << 16) + (Math.round(f) << 8) + Math.round(c)).toString(16).slice(1).padStart(6, "0");
        }
        const h = ()=>{
            const n = v[Math.floor(a() * v.length)], f = v[Math.floor(a() * v.length)], c = a() * this._textureColorBlending, d = T(n), C = T(f), D = d.r + (C.r - d.r) * c, F = d.g + (C.g - d.g) * c, I = d.b + (C.b - d.b) * c;
            return x(D, F, I);
        }, b = this._proceduralBackgroundColor || "#000000";
        t.fillStyle = b, t.fillRect(0, 0, 1024, 1024);
        const R = t.createLinearGradient(0, 0, 0, 1024);
        R.addColorStop(0, h()), R.addColorStop(1, h()), t.fillStyle = R, t.fillRect(0, 0, 1024, 1024);
        for(let n = 0; n < this._textureShapeTriangles; n++){
            t.fillStyle = h(), t.beginPath();
            const f = a() * 1024, c = a() * 1024, d = 100 + a() * 300;
            t.moveTo(f, c), t.lineTo(f + (a() - 0.5) * d, c + (a() - 0.5) * d), t.lineTo(f + (a() - 0.5) * d, c + (a() - 0.5) * d), t.fill();
        }
        for(let n = 0; n < this._textureShapeCircles; n++){
            t.strokeStyle = h(), t.lineWidth = 10 + a() * 50, t.beginPath();
            const f = a() * 1024, c = a() * 1024, d = 50 + a() * 150;
            t.arc(f, c, d, 0, Math.PI * 2), t.stroke();
        }
        for(let n = 0; n < this._textureShapeBars; n++)t.fillStyle = h(), t.save(), t.translate(a() * 1024, a() * 1024), t.rotate(a() * Math.PI), t.fillRect(-150, -25, 300, 50), t.restore();
        t.lineWidth = 15, t.lineCap = "round";
        for(let n = 0; n < this._textureShapeSquiggles; n++){
            t.strokeStyle = h(), t.beginPath();
            let f = a() * 1024, c = a() * 1024;
            t.moveTo(f, c);
            for(let d = 0; d < 4; d++)t.bezierCurveTo(f + (a() - 0.5) * 300, c + (a() - 0.5) * 300, f + (a() - 0.5) * 300, c + (a() - 0.5) * 300, f + (a() - 0.5) * 300, c + (a() - 0.5) * 300), f += (a() - 0.5) * 300, c += (a() - 0.5) * 300;
            t.stroke();
        }
        p(5e4);
        const E = document.createElement("canvas");
        E.width = 1024, E.height = 1024;
        const g = E.getContext("2d", {
            willReadFrequently: !0
        });
        if (!g) return null;
        g.fillStyle = b, g.fillRect(0, 0, 1024, 1024);
        let A = 0;
        const _ = [];
        for(; A < 1024;)if (a() < this._textureVoidLikelihood) {
            const f = this._textureVoidWidthMin + a() * (this._textureVoidWidthMax - this._textureVoidWidthMin);
            _.push({
                type: "void",
                x: A,
                width: f
            }), A += f;
        } else {
            const f = 50 + a() * 200;
            _.push({
                type: "matter",
                x: A,
                width: f
            }), A += f;
        }
        for (const n of _)if (n.type === "matter") {
            const f = n.x, c = Math.min(n.x + n.width, 1024);
            let d = f;
            for(; d < c;){
                const C = (2 + a() * 20) / this._textureBandDensity, D = Math.floor(a() * 1024);
                g.drawImage(s, D, 0, C, 1024, d, 0, C, 1024), d += C;
            }
        }
        const u = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, u), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, E), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.generateMipmap(e.TEXTURE_2D);
        const m = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        if (m) {
            const n = e.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            e.texParameterf(e.TEXTURE_2D, m.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(16, n));
        }
        return u;
    }
    set domainWarpEnabled(e) {
        this._domainWarpEnabled !== e && (this._domainWarpEnabled = e, this._uniformsDirty = !0);
    }
    set domainWarpIntensity(e) {
        this._domainWarpIntensity !== e && (this._domainWarpIntensity = e, this._uniformsDirty = !0);
    }
    set domainWarpScale(e) {
        this._domainWarpScale !== e && (this._domainWarpScale = e, this._uniformsDirty = !0);
    }
    set vignetteIntensity(e) {
        this._vignetteIntensity !== e && (this._vignetteIntensity = e, this._uniformsDirty = !0);
    }
    set vignetteRadius(e) {
        this._vignetteRadius !== e && (this._vignetteRadius = e, this._uniformsDirty = !0);
    }
    set fresnelEnabled(e) {
        this._fresnelEnabled !== e && (this._fresnelEnabled = e, this._uniformsDirty = !0);
    }
    set fresnelPower(e) {
        this._fresnelPower !== e && (this._fresnelPower = e, this._uniformsDirty = !0);
    }
    set fresnelIntensity(e) {
        this._fresnelIntensity !== e && (this._fresnelIntensity = e, this._uniformsDirty = !0);
    }
    set fresnelColor(e) {
        this._fresnelColor !== e && (this._fresnelColor = e, this._fresnelColorRgb = this._hexToRgb(e), this._uniformsDirty = !0);
    }
    set iridescenceEnabled(e) {
        this._iridescenceEnabled !== e && (this._iridescenceEnabled = e, this._uniformsDirty = !0);
    }
    set iridescenceIntensity(e) {
        this._iridescenceIntensity !== e && (this._iridescenceIntensity = e, this._uniformsDirty = !0);
    }
    set iridescenceSpeed(e) {
        this._iridescenceSpeed !== e && (this._iridescenceSpeed = e, this._uniformsDirty = !0);
    }
    set bloomIntensity(e) {
        this._bloomIntensity !== e && (this._bloomIntensity = e, this._uniformsDirty = !0);
    }
    set bloomThreshold(e) {
        this._bloomThreshold !== e && (this._bloomThreshold = e, this._uniformsDirty = !0);
    }
    set chromaticAberration(e) {
        this._chromaticAberration !== e && (this._chromaticAberration = e, this._uniformsDirty = !0);
    }
}
const Z = (l)=>{
    l.id = Me, l.href = "https://neat.firecms.co", l.target = "_blank", l.style.position = "absolute", l.style.display = "block", l.style.bottom = "0", l.style.right = "0", l.style.padding = "10px", l.style.color = "#dcdcdc", l.style.opacity = "0.8", l.style.fontFamily = "sans-serif", l.style.fontSize = "16px", l.style.fontWeight = "bold", l.style.textDecoration = "none", l.style.zIndex = "10000", l.style.pointerEvents = "auto", l.setAttribute("data-n", "1"), l.innerHTML = "NEAT";
}, Ue = (l)=>{
    const e = l.parentElement;
    if (e && getComputedStyle(e).position === "static" && (e.style.position = "relative"), e) {
        const s = e.querySelector("a[data-n]");
        if (s) return Z(s), s;
    }
    const r = document.createElement("a");
    return Z(r), e?.appendChild(r), r;
};
function Be() {
    const l = new Date(), e = l.getMinutes(), r = l.getSeconds();
    return e * 60 + r;
}
function Le(l = 6) {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let r = "";
    for(let s = 0; s < l; s++){
        const t = Math.floor(Math.random() * e.length);
        r += e.charAt(t);
    }
    return r;
}
function Oe(l, e) {
    const r = document.createElement("a");
    r.download = e, r.href = l, document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
function Ne() {
    if (document.getElementById("neat-seo-schema")) return;
    const l = document.createElement("script");
    l.id = "neat-seo-schema", l.type = "application/ld+json", l.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "NEAT Gradient",
        url: "https://neat.firecms.co",
        author: {
            "@type": "Organization",
            name: "FireCMS",
            url: "https://firecms.co"
        },
        description: "Beautiful, fast, heavily customizable, WebGL based gradients."
    }), document.head.appendChild(l);
    const e = document.createElement("div");
    e.style.position = "absolute", e.style.width = "1px", e.style.height = "1px", e.style.padding = "0", e.style.margin = "-1px", e.style.overflow = "hidden", e.style.clip = "rect(0, 0, 0, 0)", e.style.whiteSpace = "nowrap", e.style.borderWidth = "0";
    try {
        const r = e.attachShadow({
            mode: "closed"
        }), s = document.createElement("a");
        s.href = "https://firecms.co", s.textContent = "FireCMS", r.appendChild(s);
    } catch  {
        const s = document.createElement("a");
        s.href = "https://firecms.co", s.textContent = "FireCMS", e.appendChild(s);
    }
    document.body.appendChild(e);
}
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Leaf
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
            key: "nnexq3"
        }
    ],
    [
        "path",
        {
            d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
            key: "mt58a7"
        }
    ]
];
const Leaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("leaf", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Leaf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Truck
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }
    ],
    [
        "path",
        {
            d: "M15 18H9",
            key: "1lyqi6"
        }
    ],
    [
        "path",
        {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }
    ]
];
const Truck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("truck", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Truck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_0w2.qp2._.js.map