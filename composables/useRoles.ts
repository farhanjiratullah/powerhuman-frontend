export const useRoles = () => {
    const accessToken = useCookie("accessToken");
    const isLoading = ref(false);

    const store = async (form: any, errors: any) => {
        try {
            isLoading.value = true;

            const { data, error, status } = await useLazyFetch(
                `${useRuntimeConfig().public.apiBase}/roles`,
                {
                    method: "POST",
                    body: form,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken.value}`,
                    },
                }
            );

            if (status.value === "error") {
                errors.value = error?.value?.data?.errors;
            }

            if (status.value === "success") {
                return navigateTo({ name: "dashboard-roles" });
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    };

    return { store, isLoading };
};
