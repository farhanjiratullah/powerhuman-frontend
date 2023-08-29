<script setup>
    definePageMeta({
        layout: "dashboard",
    });
</script>

<template>
    <div>
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
                    <a href="employee_create.html" class="btn btn-primary"
                        >Add Employee</a
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
                                425,000
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
                                205,399
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
                                142,593
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
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-f-1.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Andini Danna
                    </div>
                    <p class="text-center text-grey">Product Designer</p>
                    <div
                        class="mt-[30px] text-success flex items-center gap-[6px]"
                    >
                        <img src="/svgs/ic-check-circle.svg" alt="" />
                        Verified
                    </div>
                </div>
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-m-1.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Ferrari Three
                    </div>
                    <p class="text-center text-grey">Quality Manager</p>
                    <div
                        class="mt-[30px] text-success flex items-center gap-[6px]"
                    >
                        <img src="/svgs/ic-check-circle.svg" alt="" />
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-m-2.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Sapiire Muke
                    </div>
                    <p class="text-center text-grey">iOS Engineer</p>
                    <a
                        href="#verify"
                        class="text-blue-700 mt-[30px] underline relative z-20"
                    >
                        Verify Now
                    </a>
                </div>
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-f-2.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Mw Kemanna
                    </div>
                    <p class="text-center text-grey">Website Developer</p>
                    <div
                        class="mt-[30px] text-success flex items-center gap-[6px]"
                    >
                        <img src="/svgs/ic-check-circle.svg" alt="" />
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-m-3.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Onna Appa
                    </div>
                    <p class="text-center text-grey">Product Designer</p>
                    <div
                        class="mt-[30px] text-success flex items-center gap-[6px]"
                    >
                        <img src="/svgs/ic-check-circle.svg" alt="" />
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-f-3.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Hehe Nadiia
                    </div>
                    <p class="text-center text-grey">Quality Manager</p>
                    <div
                        class="mt-[30px] text-success flex items-center gap-[6px]"
                    >
                        <img src="/svgs/ic-check-circle.svg" alt="" />
                        Verified
                    </div>
                </div>
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-m-4.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Jamboel
                    </div>
                    <p class="text-center text-grey">iOS Engineer</p>
                    <a
                        href="#verify"
                        class="text-blue-700 mt-[30px] underline relative z-20"
                    >
                        Verify Now
                    </a>
                </div>
                <!-- Card -->
                <div
                    class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                >
                    <a
                        href="#"
                        class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
                    ></a>
                    <img src="/images/user-f-4.png" width="70" alt="" />
                    <div class="mt-6 mb-1 font-semibold text-center text-dark">
                        Eksis Melita
                    </div>
                    <p class="text-center text-grey">Website Developer</p>
                    <div
                        class="mt-[30px] text-success flex items-center gap-[6px]"
                    >
                        <img src="/svgs/ic-check-circle.svg" alt="" />
                        Verified
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
