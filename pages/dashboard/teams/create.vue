<script setup>
    definePageMeta({
        layout: "form",
    });

    useHead({
        title: "Create Team | PowerHuman",
        meta: [{ name: "description", content: "Create team page" }],
    });

    const accessToken = useCookie("accessToken");

    const { store, isLoading } = useTeams();

    const { data: companies, pending } = await useLazyFetch(
        `${useRuntimeConfig().public.apiBase}/companies/all`,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken.value}`,
            },
            transform: (companies) => companies.data,
        }
    );

    const form = ref({
        name: "",
        company_id: "",
        activated_at: "",
        icon: "",
    });

    const errors = ref({});

    const iconPreview = ref(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            form.value.icon = file;

            const reader = new FileReader();
            reader.onload = () => {
                iconPreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            form.value.icon = "";
            iconPreview.value = null;
        }
    };
</script>

<template>
    <div>
        <section
            class="py-[70px] flex flex-col items-center justify-center px-4"
        >
            <div class="text-[32px] font-semibold text-dark">
                Build New Team
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Team that can bring your company <br />
                growing bigger and bigger
            </p>
            <form
                class="w-full card"
                @submit.prevent="store(form, errors)"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="mb-[2px] mx-auto" v-if="form.icon">
                    <img
                        :src="iconPreview"
                        alt="Icon Preview"
                        class="w-[70px]"
                    />
                </div>
                <div class="form-group">
                    <label for="icon" class="text-grey">Icon</label>
                    <input
                        type="file"
                        name="icon"
                        id="icon"
                        @change="handleFileChange"
                        class="input-field"
                    />
                    <div v-if="errors?.value?.icon">
                        <p class="text-red-500">
                            {{ errors?.value?.icon[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="company_id" class="text-grey"
                        >Company <span class="text-red-500">*</span></label
                    >
                    <select
                        name="company_id"
                        id="company_id"
                        class="appearance-none input-field form-icon-chevron_down"
                        v-model="form.company_id"
                    >
                        <option v-if="pending">Loading...</option>
                        <template v-else>
                            <option
                                v-for="(company, index) in companies"
                                :key="company.id"
                                :value="company.id"
                            >
                                {{ company.name }}
                            </option>
                        </template>
                    </select>
                    <div v-if="errors?.value?.company_id">
                        <p class="text-red-500">
                            {{ errors?.value?.company_id[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="text-grey"
                        >Team Name <span class="text-red-500">*</span></label
                    >
                    <input
                        type="text"
                        name="name"
                        id="name"
                        class="input-field"
                        v-model="form.name"
                    />
                    <div v-if="errors?.value?.name">
                        <p class="text-red-500">
                            {{ errors?.value?.name[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="activated_at" class="text-grey"
                        >Status <span class="text-red-500">*</span></label
                    >
                    <select
                        name="activated_at"
                        id="activated_at"
                        class="appearance-none input-field form-icon-chevron_down"
                        v-model="form.activated_at"
                    >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                    <div v-if="errors?.value?.activated_at">
                        <p class="text-red-500">
                            {{ errors?.value?.activated_at[0] }}
                        </p>
                    </div>
                </div>
                <button
                    type="submit"
                    class="w-full btn btn-primary mt-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="isLoading"
                >
                    {{ isLoading ? "Loading..." : "Continue" }}
                </button>
            </form>
        </section>
    </div>
</template>
