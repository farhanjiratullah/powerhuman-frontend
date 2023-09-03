// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            baseUrl: "",
            apiBase: "",
        },
    },
    vue: {
        defineModel: true,
        propsDestructure: true,
    },
    routeRules: {
        "/": { redirect: { to: "login" } },
    },
    modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
        ],
    },
    imports: {
        dirs: ["stores"],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
});
