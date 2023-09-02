<script setup>
    const router = useRouter();
    const route = useRoute();

    const previousSegment = () => {
        const splitted = route.path.substring(1).split("/");
        const popped = splitted.pop();
        const joined = `/${splitted.join("/")}`;

        const resolvedRoute = router.resolve({ path: joined });

        return navigateTo({ name: resolvedRoute.name });
    };
</script>

<template>
    <div>
        <div
            class="pt-[50px] md:px-[50px] flex justify-between items-center px-4"
        >
            <NuxtLink :to="{ name: 'dashboard' }">
                <img src="/svgs/logo-type.svg" alt="" />
            </NuxtLink>
            <a @click="previousSegment" class="cursor-pointer">
                <img src="/svgs/ric-close-white.svg" alt="" />
            </a>
        </div>
        <slot></slot>
    </div>
</template>
