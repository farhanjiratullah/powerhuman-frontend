<script setup>
    definePageMeta({
        layout: "dashboard",
    });

    useHead({
        title: "Roles | PowerHuman",
        meta: [{ name: "description", content: "Roles page" }],
    });

    const config = useRuntimeConfig();
    const accessToken = useCookie("accessToken");

    const search = ref("");

    const createDebounce = (delayMs) => {
        let timeout = null;

        return (fnc) => {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                fnc();
            }, delayMs);
        };
    };

    const debounceSearch = createDebounce(1000);

    const { data: roles, pending } = await useLazyFetch(
        `${useRuntimeConfig().public.apiBase}/roles`,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken.value}`,
            },
            params: {
                search: search,
            },
            transform: (roles) => roles.data.data,
            watch: [search],
        }
    );
</script>

<template>
    <div>
        <section
            class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row"
        >
            <div class="flex items-center justify-between gap-4">
                <a href="#" id="toggleOpenSidebar" class="lg:hidden">
                    <svg
                        class="w-6 h-6 text-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        ></path>
                    </svg>
                </a>
                <div class="text-[32px] font-semibold text-dark">
                    Company Roles
                </div>
            </div>
            <div class="flex items-center gap-4">
                <form class="shrink md:w-[516px] w-full">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        :value="search"
                        @input="
                            ($event) =>
                                debounceSearch(
                                    () => (search = $event.target.value)
                                )
                        "
                        class="input-field !outline-none !border-none italic form-icon-search ring-indigo-200 focus:ring-2 transition-all duration-300 w-full"
                        placeholder="Search people, team, project"
                    />
                </form>
                <a
                    href="#"
                    class="flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] relative notification-dot"
                >
                    <img src="/svgs/ic-bell.svg" alt="" />
                </a>
            </div>
        </section>

        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div
                    class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
                >
                    <div>
                        <div class="text-xl font-medium text-dark">
                            Available
                        </div>
                        <p class="text-grey">Empower company</p>
                    </div>
                    <NuxtLink
                        :to="{ name: 'dashboard-roles-create' }"
                        class="btn btn-primary"
                        >New Role</NuxtLink
                    >
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div v-if="pending">Loading...</div>
                <template v-else>
                    <div
                        class="items-center card !flex-row gap-4"
                        v-for="role in roles"
                        :key="role.id"
                    >
                        <a
                            href="#"
                            class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                        ></a>
                        <img src="/svgs/ric-flag.svg" alt="Icon Role" />
                        <div>
                            <div class="mb-1 font-semibold text-dark">
                                {{ role.name }}
                            </div>
                            <p class="text-grey">
                                {{ role.employees_count }} people assigned
                            </p>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>
