export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@nuxt/eslint'],
	css: ['~/assets/css/main.css'],
	compatibilityDate: '2026-11-26',
	app: {
		head: {
			title: 'Planoday',
			htmlAttrs: { lang: 'ru' },
		},
	},
	ui: {
		fonts: false,
	},
});
