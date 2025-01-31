import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const isVercel = process.env.VERCEL;

const base = isVercel ? "" : "/iau-edu/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Edu",
	description: "Education at SRBIAU",
	base,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		/* sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		], */
		sidebar: generateSidebar({
			useTitleFromFileHeading: true,
			documentRootPath: "/docs",
		}),

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],

		outline: {
			level: [2, 3],
		},
	},
	head: [
		[
			"script",
			{},
			"console.log(123);"
		]
	],

	markdown: {
		image: {
			// image lazy loading is disabled by default
			lazyLoading: true,
		},
		math: {
			tex: {
				inlineMath: [
					["$", "$"],
					["$ ", " $"],
					["\\(", "\\)"],
				],
				macros: {
					// ra: "\\green\\Longrightarrow",
					// "=>": "\\green\\Longrightarrow",
					// "->": "\\green\\Longrightarrow",
					ra: "\\Longrightarrow",
					"=>": "\\Longrightarrow",
					"->": "\\Longrightarrow",
					f: "\\frac",
					t: "\\times",
					Z: "\\mathbb{Z}",
					d: "\\text{d}",
					// RR: "{\\bf R}",
					// bold: ["{\\bf #1}", 1],
					sys: "\\fbox{system}",
					sysra: "\\ra \\fbox{system} \\ra",
				},
			},
		},
	},
});
