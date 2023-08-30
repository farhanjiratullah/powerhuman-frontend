<script setup>
    const router = useRouter();

    const previousPage = () => router.back();
</script>

<template>
    <div>
        <div
            class="pt-[50px] md:px-[50px] flex justify-between items-center px-4"
        >
            <NuxtLink :to="{ name: 'dashboard' }">
                <img src="/svgs/logo-type.svg" alt="" />
            </NuxtLink>
            <a @click="previousPage" class="cursor-pointer">
                <img src="/svgs/ric-close-white.svg" alt="" />
            </a>
        </div>
        <slot></slot>
    </div>
</template>
