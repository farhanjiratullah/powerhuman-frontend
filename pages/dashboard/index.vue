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
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <div class="text-xl font-medium text-dark">
                            Statistics
                        </div>
                        <p class="text-grey">Your business growth</p>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Employees</p>
                            <div
                                class="text-[32px] font-bold text-dark mt-[6px]"
                            >
                                0
                            </div>
                        </div>
                        <a href="employee_create.html">
                            <img src="/svgs/ric-plus.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Teams</p>
                            <div
                                class="text-[32px] font-bold text-dark mt-[6px]"
                            >
                                0
                            </div>
                        </div>
                        <a href="#">
                            <img src="/svgs/ric-plus.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Projects</p>
                            <div
                                class="text-[32px] font-bold text-dark mt-[6px]"
                            >
                                0
                            </div>
                        </div>
                        <a href="#">
                            <img src="/svgs/ric-plus.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-[50px]">
            <div class="grid md:grid-cols-2 gap-11">
                <!-- Documents -->
                <div>
                    <!-- Section Header -->
                    <div class="mb-[30px]">
                        <div class="flex items-center justify-between gap-6">
                            <div>
                                <div class="text-xl font-medium text-dark">
                                    Documents
                                </div>
                                <p class="text-grey">Standard procedure</p>
                            </div>
                        </div>
                    </div>
                    <div class="card md:min-h-[468px]">
                        <div class="m-auto text-center">
                            <div class="text-xl font-bold text-dark">
                                No Documents
                            </div>
                            <p class="text-grey mt-5 mb-[30px]">
                                Add guidance or design style for <br />
                                your employees in company
                            </p>
                            <button type="button" class="btn btn-primary">
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>

                <!-- History -->
                <div>
                    <!-- Section Header -->
                    <div class="mb-[30px]">
                        <div class="flex items-center justify-between gap-6">
                            <div>
                                <div class="text-xl font-medium text-dark">
                                    History
                                </div>
                                <p class="text-grey">Track the flow</p>
                            </div>
                        </div>
                    </div>
                    <div class="card min-h-[468px]">
                        <div class="m-auto text-center">
                            <div class="text-xl font-bold text-dark">
                                No History
                            </div>
                            <p class="text-grey mt-5 mb-[30px]">
                                Information of employees added <br />
                                and promoting shown here
                            </p>
                            <button type="button" class="btn btn-primary">
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
