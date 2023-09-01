export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuthStore();

    if (
        !isLoggedIn &&
        (to.meta.layout === "dashboard" || to.meta.layout === "form")
    ) {
        return navigateTo({ name: "login" }, { replace: true });
    } else if (isLoggedIn && (to.name === "login" || to.name === "register")) {
        return navigateTo({ name: "dashboard" }, { replace: true });
    }
});
