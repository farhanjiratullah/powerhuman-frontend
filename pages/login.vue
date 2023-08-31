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

    const auth = useAuthStore();
</script>

<template>
    <div>
        <pre>{{ auth.user }}</pre>
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
            <form class="w-full card" @submit.prevent="auth.handleLogin(form)">
                <div class="form-group">
                    <label for="email" class="text-grey">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="input-field"
                        v-model="form.email"
                    />
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
                </div>
                <button type="submit" class="w-full btn btn-primary mt-[14px]">
                    Sign In
                </button>
            </form>
        </section>
    </div>
</template>
