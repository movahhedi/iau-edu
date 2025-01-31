// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.scss";
import "vazirmatn/misc/Non-Latin/Vazirmatn-NL-font-face.css";
import dirAutoPlugin from "../plugins/dirAutoPlugin";

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app }) {
		app.use(dirAutoPlugin);
	},
} satisfies Theme;

