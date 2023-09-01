<script setup>
    import { useAuthStore } from "~/stores/auth";

    definePageMeta({
        middleware: "guest",
    });

    useHead({
        title: "Login | PowerHuman",
        meta: [{ name: "description", content: "Login page" }],
    });

    const form = ref({
        email: null,
        password: null,
    });

    const errors = ref({});

    const auth = useAuthStore();
</script>

<template>
    <div>
        <section
            class="py-[50px] flex flex-col items-center justify-center px-4"
        >
            <img src="/svgs/logo-type.svg" alt="" />
            <div class="text-[32px] font-semibold text-dark mt-[70px]">
                Sign In
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Manage your employees to achieve <br />
                a bigger goals for your company
            </p>
            <form
                class="w-full card"
                @submit.prevent="auth.handleLogin(form, errors)"
            >
                <div class="form-group">
                    <label for="email" class="text-grey">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="input-field"
                        v-model="form.email"
                    />
                    <div v-if="errors?.value?.email">
                        <p class="text-red-500">
                            {{ errors?.value?.email[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="text-grey">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        class="input-field"
                        v-model="form.password"
                    />
                    <div v-if="errors?.value?.password">
                        <p class="text-red-500">
                            {{ errors?.value?.password[0] }}
                        </p>
                    </div>
                </div>
                <button
                    type="submit"
                    :disabled="auth.isLoading"
                    class="w-full btn btn-primary mt-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {{ auth.isLoading ? "Loading..." : "Sign In" }}
                </button>
            </form>
        </section>
    </div>
</template>
