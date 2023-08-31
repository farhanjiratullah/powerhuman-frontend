export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuthStore();

    if (!isLoggedIn) {
        return navigateTo({ name: "login" }, { replace: true });
    }
});
