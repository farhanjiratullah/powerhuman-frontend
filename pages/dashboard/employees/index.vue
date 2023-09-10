<script setup>
    definePageMeta({
        layout: "dashboard",
    });

    useHead({
        title: "Employees | PowerHuman",
        meta: [{ name: "description", content: "Employees page" }],
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

    const { data: employees, pending } = await useLazyFetch(
        `${config.public.apiBase}/employees`,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken.value}`,
            },
            params: {
                search: search,
            },
            transform: (employees) => employees.data,
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
                <div class="text-[32px] font-semibold text-dark">Employees</div>
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
                            Statistics
                        </div>
                        <p class="text-grey">Your team powers</p>
                    </div>
                    <NuxtLink
                        :to="{ name: 'dashboard-employees-create' }"
                        class="btn btn-primary"
                        >Add Employee</NuxtLink
                    >
                </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
                <div class="card !gap-y-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">In Total</p>
                            <div
                                class="text-[32px] font-bold text-dark mt-[6px]"
                            >
                                {{ employees.total_employees_count }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card !gap-y-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Active</p>
                            <div
                                class="text-[32px] font-bold text-dark mt-[6px]"
                            >
                                {{ employees.is_active_employees_count }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card !gap-y-10">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Inactive</p>
                            <div
                                class="text-[32px] font-bold text-dark mt-[6px]"
                            >
                                {{ employees.is_inactive_employees_count }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <div class="text-xl font-medium text-dark">People</div>
                        <p class="text-grey">The rangers</p>
                    </div>
                </div>
            </div>
            <div
                class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3"
            >
                <div v-if="pending">Loading...</div>
                <!-- Card -->
                <template v-else>
                    <div
                        class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                        v-for="employee in employees.data"
                        :key="employee.id"
                    >
                        <a
                            href="#"
                            class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                        ></a>
                        <img
                            :src="`${config.public.baseUrl}/storage/${employee.photo}`"
                            class="w-[70px]"
                            :alt="employee.name"
                        />
                        <div
                            class="mt-6 mb-1 font-semibold text-center text-dark"
                        >
                            {{ employee.name }}
                        </div>
                        <p class="text-center text-grey">
                            {{ employee.role.name }}
                        </p>
                        <div
                            class="mt-[30px] text-success flex items-center gap-[6px]"
                            v-if="employee.verified_at"
                        >
                            <img src="/svgs/ic-check-circle.svg" alt="" />
                            Verified
                        </div>
                        <a
                            href="#verify"
                            class="text-blue-700 mt-[30px] underline relative z-20"
                            v-else
                        >
                            Verify Now
                        </a>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>
