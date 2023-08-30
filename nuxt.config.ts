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
    modules: ["@pinia/nuxt"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
});
