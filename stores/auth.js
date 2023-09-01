export const useAuthStore = defineStore(
    "auth",
    () => {
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

                    localStorage.setItem(
                        "accessToken",
                        data?.value?.data?.token?.access_token
                    );

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

        // const fetchUser = async () => {
        //     try {
        //         const { data, error, status } = await useCustomFetch("/user", {
        //             method: "GET",
        //             headers: {
        //                 Authorization: `Bearer ${localStorage.getItem(
        //                     "accessToken"
        //                 )}`,
        //             },
        //         });

        //         if (status.value === "success") {
        //             authUser.value = data?.value?.data;
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };

        return {
            authUser,
            loading,
            user,
            isLoggedIn,
            isLoading,
            handleLogin,
            // fetchUser,
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
