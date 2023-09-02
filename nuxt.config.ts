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
    // modules: ["@pinia/nuxt", "@sidebase/nuxt-auth"],
    // auth: {
    //     globalAppMiddleware: {
    //         isEnabled: true,
    //         allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
    //         addDefaultCallbackUrl: "/dashboard", // Where authenticated user will be redirected to by default
    //     },
    //     baseURL: process.env.NUXT_PUBLIC_API_BASE,
    //     provider: {
    //         type: "local",
    //         endpoints: {
    //             signIn: { path: "/login", method: "post" },
    //             signOut: { path: "/logout", method: "post" },
    //             signUp: { path: "/register", method: "post" },
    //             getSession: { path: "/user", method: "get" },
    //         },
    //         pages: {
    //             login: "/login",
    //         },
    //         token: {
    //             signInResponseTokenPointer: "/data/token/access_token",
    //             maxAgeInSeconds: 60 * 60 * 24 * 7,
    //         },
    //         sessionDataType: {},
    //     },
    // },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
});
