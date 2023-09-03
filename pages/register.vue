<script setup>
    import { useAuthStore } from "~/stores/auth";

    // definePageMeta({
    //     middleware: "guest",
    // });

    useHead({
        title: "Register | PowerHuman",
        meta: [{ name: "description", content: "Register page" }],
    });

    const form = ref({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        company: {
            name: "",
            logo: "",
        },
    });

    const errors = ref({});

    const logoPreview = ref(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            form.value.company.logo = file;

            const reader = new FileReader();
            reader.onload = () => {
                logoPreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            form.value.company.logo = "";
            logoPreview.value = null;
        }
    };

    const auth = useAuthStore();
</script>

<template>
    <div>
        <section
            class="py-[50px] flex flex-col items-center justify-center px-4"
        >
            <img src="/svgs/logo-type.svg" alt="" />
            <div class="text-[32px] font-semibold text-dark mt-[70px]">
                Sign Up
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Manage your employees to achieve <br />
                a bigger goals for your company
            </p>
            <form
                class="w-full card"
                @submit.prevent="auth.handleRegister(form, errors)"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="mb-[2px] mx-auto" v-if="form.company.logo">
                    <img
                        :src="logoPreview"
                        alt="Logo Preview"
                        class="w-[70px]"
                    />
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

                    <div v-if="errors?.value?.company.logo">
                        <p class="text-red-500">
                            {{ errors?.value?.company.logo[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="text-grey"
                        >Name <span class="text-red-500">*</span></label
                    >
                    <input
                        type="text"
                        name="name"
                        id="name"
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
                    <label for="email" class="text-grey"
                        >Email Address
                        <span class="text-red-500">*</span></label
                    >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        v-model="form.email"
                        class="input-field"
                    />
                    <div v-if="errors?.value?.email">
                        <p class="text-red-500">
                            {{ errors?.value?.email[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="text-grey"
                        >Password <span class="text-red-500">*</span></label
                    >
                    <input
                        type="password"
                        name="password"
                        id="password"
                        v-model="form.password"
                        class="input-field"
                    />
                    <div v-if="errors?.value?.password">
                        <p class="text-red-500">
                            {{ errors?.value?.password[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password_confirmation" class="text-grey"
                        >Password Confirmation
                        <span class="text-red-500">*</span></label
                    >
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        v-model="form.password_confirmation"
                        class="input-field"
                    />
                </div>
                <div class="form-group">
                    <label for="company-name" class="text-grey"
                        >Company Name <span class="text-red-500">*</span></label
                    >
                    <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        v-model="form.company.name"
                        class="input-field"
                    />
                    <div v-if="errors?.value?.company.name">
                        <p class="text-red-500">
                            {{ errors?.value?.company.name[0] }}
                        </p>
                    </div>
                </div>

                <button
                    type="submit"
                    :disabled="auth.isLoading"
                    class="w-full btn btn-primary mt-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {{ auth.isLoading ? "Loading..." : "Continue" }}
                </button>
            </form>
        </section>
    </div>
</template>
