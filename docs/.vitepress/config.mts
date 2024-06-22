import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import Mathjax from "markdown-it-mathjax3";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Edu",
	description: "Education at SRBIAU",
	base: "/docs/",
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
		sidebar: generateSidebar(),

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},

	markdown: {
		math: {
			tex: {
				inlineMath: [
					["$", "$"],
					["$ ", " $"],
					["\\(", "\\)"],
				],
				macros: {
					ra: "\\green\\Longrightarrow",
					"=>": "\\green\\Longrightarrow",
					"->": "\\green\\Longrightarrow",
					f: "\\frac",
					t: "\\times",
					RR: "{\\bf R}",
					bold: ["{\\bf #1}", 1],
				},
			},
		},
	},
});

