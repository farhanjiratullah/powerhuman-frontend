<template>
    <div>
        <!-- Sidebar -->
        <div
            class="hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white z-[999]"
            id="sidebarHRIS"
        >
            <div class="px-6 py-[50px] gap-y-[50px] flex flex-col">
                <div class="flex items-center justify-between">
                    <NuxtLink
                        :to="{ name: 'dashboard' }"
                        class="flex justify-center"
                    >
                        <img src="/svgs/logo-type.svg" alt="" />
                    </NuxtLink>
                    <a href="#" id="toggleCloseSidebar" class="lg:hidden">
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
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-sm text-grey">Daily Use</div>
                    <MyNuxtLink :to="{ name: 'dashboard' }" class="nav-link">
                        <img src="/svgs/ic-grid.svg" alt="" />
                        Overview
                    </MyNuxtLink>
                    <MyNuxtLink
                        :to="{ name: 'dashboard-employees' }"
                        class="nav-link"
                    >
                        <img src="/svgs/ic-users.svg" alt="" />
                        Employees
                    </MyNuxtLink>
                    <MyNuxtLink
                        :to="{ name: 'dashboard-teams' }"
                        class="nav-link"
                    >
                        <img src="/svgs/ic-briefcase.svg" alt="" />
                        My Teams
                    </MyNuxtLink>
                    <a href="roles.html" class="nav-link">
                        <img src="/svgs/ic-flag.svg" alt="" />
                        Roles
                    </a>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-sm text-grey">Others</div>
                    <a href="#" class="nav-link">
                        <img src="/svgs/ic-box.svg" alt="" />
                        Insurances
                    </a>
                    <a href="#" class="nav-link">
                        <img src="/svgs/ic-home.svg" alt="" />
                        Company
                    </a>
                    <a href="#" class="nav-link">
                        <img src="/svgs/ic-gift.svg" alt="" />
                        Rewards
                    </a>
                    <a href="#" class="nav-link">
                        <img src="/svgs/ic-settings.svg" alt="" />
                        Settings
                    </a>
                    <a href="#" class="nav-link">
                        <img src="/svgs/ic-signout.svg" alt="" />
                        Logout
                    </a>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div
            class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0"
        >
            <slot></slot>
        </div>
    </div>
</template>
