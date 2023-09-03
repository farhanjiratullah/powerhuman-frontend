export const useTeams = () => {
    const accessToken = useCookie("accessToken");
    const isLoading = ref(false);

    const store = async (form: any, errors: any) => {
        try {
            const formData = new FormData();
            formData.append("company_id", form.company_id);
            formData.append("name", form.name);
            formData.append("activated_at", form.activated_at);
            formData.append("icon", form.icon);

            isLoading.value = true;

            const { data, error, status } = await useFetch(
                `${useRuntimeConfig().public.apiBase}/teams`,
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
                return navigateTo({ name: "dashboard-teams" });
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    };

    return { store, isLoading };
};
