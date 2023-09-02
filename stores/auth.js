export const useAuthStore = defineStore(
    "auth",
    () => {
        const router = useRouter();

        const accessToken = useCookie("accessToken", {
            maxAge: 60 * 60,
        });
        const intendedRoute = useCookie("intendedRoute");

        const authUser = ref(null);
        const loading = ref(false);

        const user = computed(() => authUser.value);
        const isLoggedIn = computed(() => authUser.value !== null);
        const isLoading = computed(() => loading.value);

        const handleLogin = async (form, errors) => {
            try {
                loading.value = true;
                const { data, error, status } = await useCustomFetch("/login", {
                    method: "POST",
                    body: {
                        email: form.email,
                        password: form.password,
                    },
                });

                if (status.value === "error") {
                    errors.value = error.value.data.errors;
                }

                if (status.value === "success") {
                    authUser.value = data?.value?.data?.user;

                    accessToken.value = data?.value?.data?.token?.access_token;

                    intendedRoute.value = intendedRoute.value || "/dashboard";

                    const resolvedRoute = router.resolve({
                        path: intendedRoute.value,
                    });

                    intendedRoute.value = "";

                    return navigateTo(
                        { name: resolvedRoute.name },
                        {
                            replace: true,
                        }
                    );
                }
            } catch (error) {
                console.error(error);
            } finally {
                loading.value = false;
            }
        };

        const handleRegister = async (form, errors) => {
            try {
                const formData = new FormData();
                formData.append("name", form.name);
                formData.append("email", form.email);
                formData.append("password", form.password);
                formData.append(
                    "password_confirmation",
                    form.password_confirmation
                );
                formData.append("company[name]", form.company.name);
                formData.append("company[logo]", form.company.logo);

                loading.value = true;
                const { data, error, status } = await useFetch(
                    `${useRuntimeConfig().public.apiBase}/register`,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                if (status.value === "error") {
                    errors.value = error.value.data.errors;
                }

                if (status.value === "success") {
                    authUser.value = data?.value?.data?.user;

                    accessToken.value = data?.value?.data?.token?.access_token;

                    return navigateTo(
                        { name: "dashboard" },
                        {
                            replace: true,
                        }
                    );
                }
            } catch (error) {
                console.error(error);
            } finally {
                loading.value = false;
            }
        };

        const handleLogout = async () => {
            try {
                const { error, status } = await useCustomFetch("/logout", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${accessToken.value}`,
                    },
                });

                if (status.value === "success") {
                    authUser.value = null;
                    accessToken.value = null;

                    return navigateTo(
                        { name: "login" },
                        {
                            replace: true,
                        }
                    );
                }
            } catch (error) {
                console.error(error);
            }
        };

        return {
            authUser,
            loading,
            user,
            isLoggedIn,
            isLoading,
            handleLogin,
            handleRegister,
            handleLogout,
        };
    },
    {
        persist: {
            storage: persistedState.cookiesWithOptions({
                maxAge: 60 * 60,
            }),
        },
    }
);
