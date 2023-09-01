export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuthStore();
    const intendedRoute = useCookie("intendedRoute", {
        maxAge: 60 * 5,
    });

    if (
        !isLoggedIn &&
        (to.meta.layout === "dashboard" || to.meta.layout === "form")
    ) {
        intendedRoute.value = to.path;

        return navigateTo({ name: "login" }, { replace: true });
    } else if (isLoggedIn && (to.name === "login" || to.name === "register")) {
        return navigateTo({ name: "dashboard" }, { replace: true });
    }
});
