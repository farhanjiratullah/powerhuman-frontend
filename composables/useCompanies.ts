export const useCompanies = () => {
    const accessToken = useCookie("accessToken");
    const isLoading = ref(false);

    const store = async (form: any, errors: any) => {
        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("logo", form.logo);

            isLoading.value = true;

            const { data, error, status } = await useFetch(
                `${useRuntimeConfig().public.apiBase}/companies`,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${accessToken.value}`,
                    },
                }
            );

            if (status.value === "error") {
                errors.value = error?.value?.data?.errors;
            }

            if (status.value === "success") {
                return navigateTo({ name: "dashboard-companies" });
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    };

    return { store, isLoading };
};
