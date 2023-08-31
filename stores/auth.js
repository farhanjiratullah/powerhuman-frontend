export const useAuthStore = defineStore(
    "auth",
    () => {
        const authUser = ref(null);

        const user = computed(() => authUser.value);
        const isLoggedIn = computed(() => authUser.value !== null);

        const handleLogin = async (form) => {
            try {
                const { data, error, status } = await useCustomFetch("/login", {
                    method: "POST",
                    body: {
                        email: form.email,
                        password: form.password,
                    },
                });

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
            user,
            isLoggedIn,
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
