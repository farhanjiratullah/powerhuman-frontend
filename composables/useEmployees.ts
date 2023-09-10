export const useEmployees = () => {
    const accessToken = useCookie("accessToken");
    const isLoading = ref(false);

    const store = async (form: any, errors: any) => {
        try {
            const formData = new FormData();
            formData.append("team_id", form.team_id);
            formData.append("role_id", form.role_id);
            formData.append("name", form.name);
            formData.append("email", form.email);
            formData.append("gender", form.gender);
            formData.append("age", form.age);
            formData.append("phone", form.phone);
            formData.append("photo", form.photo);

            isLoading.value = true;

            const { data, error, status } = await useLazyFetch(
                `${useRuntimeConfig().public.apiBase}/employees`,
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
                return navigateTo({ name: "dashboard-employees" });
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    };

    return { store, isLoading };
};
