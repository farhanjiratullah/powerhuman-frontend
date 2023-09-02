<script setup>
    definePageMeta({
        layout: "form",
    });

    useHead({
        title: "Companies | PowerHuman",
        meta: [{ name: "description", content: "Companies page" }],
    });

    const { store, isLoading } = useCompanies();

    const form = ref({
        name: "",
        logo: "",
    });

    const errors = ref({});

    const logoPreview = ref(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            form.value.logo = file;

            const reader = new FileReader();
            reader.onload = () => {
                logoPreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            form.value.logo = "";
            logoPreview.value = null;
        }
    };
</script>

<template>
    <div>
        <section
            class="py-[50px] flex flex-col items-center justify-center px-4"
        >
            <div class="text-[32px] font-semibold text-dark">
                Create Company
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Build your organization for success and growth <br />
                with effective management.
            </p>
            <form
                class="w-full card"
                @submit.prevent="store(form, errors)"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="form-group">
                    <label for="company-name" class="text-grey">Name</label>
                    <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        v-model="form.name"
                        class="input-field"
                    />
                    <div v-if="errors?.value?.name">
                        <p class="text-red-500">
                            {{ errors?.value?.name[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="logo" class="text-grey">Logo</label>
                    <input
                        type="file"
                        name="logo"
                        id="logo"
                        @change="handleFileChange"
                        class="input-field"
                    />
                    <img
                        v-if="form.logo"
                        :src="logoPreview"
                        alt="Logo Preview"
                        class="w-[100px]"
                    />
                    <div v-if="errors?.value?.logo">
                        <p class="text-red-500">
                            {{ errors?.value?.logo[0] }}
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
