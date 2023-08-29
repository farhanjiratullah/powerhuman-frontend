<script setup>
    definePageMeta({
        layout: "form",
    });

    useHead({
        title: "Create Employee | PowerHuman",
        meta: [{ name: "description", content: "Create employee page" }],
    });

    const activeStep = ref(1);

    const form = ref({
        name: "",
        email: "",
        gender: "",
        age: null,
        photo: null,
        phone: null,
        role_id: null,
        team_id: null,
    });

    const next = () => {
        activeStep.value++;
    };

    const back = () => {
        activeStep.value--;
    };
</script>

<template>
    <div>
        <section
            class="py-[70px] flex flex-col items-center justify-center px-4"
            v-if="activeStep === 1"
        >
            <div class="text-[32px] font-semibold text-dark">
                Empower Your Team
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Add your new people to grow the <br />
                company reaching their goals
            </p>
            <form class="w-full card">
                <div class="form-group">
                    <label for="name" class="text-grey">Complete Name</label>
                    <input
                        type="text"
                        id="name"
                        class="input-field"
                        v-model="form.name"
                    />
                </div>
                <div class="form-group">
                    <label for="email" class="text-grey">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        class="input-field"
                        v-model="form.email"
                    />
                </div>
                <div class="form-group">
                    <label for="gender" class="text-grey">Gender</label>
                    <select
                        name="gender"
                        v-model="form.gender"
                        id=""
                        class="appearance-none input-field form-icon-chevron_down"
                    >
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="age" class="text-grey">Age</label>
                    <input
                        type="number"
                        id="age"
                        class="input-field"
                        v-model.number="form.age"
                    />
                </div>
                <button @click="next" class="w-full btn btn-primary mt-[14px]">
                    Continue
                </button>
            </form>
        </section>

        <section
            class="py-[70px] flex flex-col items-center justify-center px-4"
            v-if="activeStep === 2"
        >
            <div class="text-[32px] font-semibold text-dark">
                Finalizing Profile
            </div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Complete the information to make it more <br />
                easier when introduce to team
            </p>
            <form class="w-full card">
                <div class="flex flex-col items-center mb-[14px]">
                    <img src="/images/user-f-1.png" width="70" alt="" />
                    <div class="mt-6 mb-1 text-lg font-semibold">
                        Andini Danna
                    </div>
                    <p class="text-base text-grey">ke@manasihhbang.com</p>
                </div>
                <div class="form-group">
                    <label for="phone" class="text-grey">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        v-model="form.phone"
                        class="input-field"
                    />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <button @click="back" class="w-full btn btn-grey mt-[14px]">
                        Back
                    </button>
                    <button
                        @click="next"
                        class="w-full btn btn-primary mt-[14px]"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </section>

        <section
            class="py-[70px] flex flex-col items-center justify-center px-4"
            v-if="activeStep === 3"
        >
            <div class="text-[32px] font-semibold text-dark">Give a Role</div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Complete the information to make it more <br />
                easier when introduce to team
            </p>
            <form class="w-full card">
                <div class="flex flex-col items-center mb-[14px]">
                    <img src="/images/user-f-1.png" width="70" alt="" />
                    <div class="mt-6 mb-1 text-lg font-semibold">
                        Andini Danna
                    </div>
                    <p class="text-base text-grey">ke@manasihhbang.com</p>
                </div>
                <div class="form-group">
                    <label for="role_id" class="text-grey">Select Role</label>
                    <select
                        name="role_id"
                        id="role_id"
                        v-model="role_id"
                        class="appearance-none input-field form-icon-chevron_down"
                    >
                        <option value="" selected>Product Designer</option>
                        <option value="">Website Developer</option>
                        <option value="">Executive Manager</option>
                        <option value="">iOS Engineer</option>
                    </select>
                </div>

                <!-- Responsibilities -->
                <section>
                    <label for="" class="text-grey"> Responsibilities </label>
                    <div class="flex flex-col gap-4 mt-[10px]">
                        <div class="flex items-start md:items-center gap-[6px]">
                            <img src="/svgs/ic-check-circle.svg" alt="" />
                            <span class="text-sm text-dark">
                                Lorem ipsum tanggung jawab pixel studio website
                            </span>
                        </div>
                        <div class="flex items-start md:items-center gap-[6px]">
                            <img src="/svgs/ic-check-circle.svg" alt="" />
                            <span class="text-sm text-dark">
                                Growth strategy studio make things better again
                                with
                            </span>
                        </div>
                        <div class="flex items-start md:items-center gap-[6px]">
                            <img src="/svgs/ic-check-circle.svg" alt="" />
                            <span class="text-sm text-dark">
                                Menyediakan beberapa kit untuk kebutuhan
                            </span>
                        </div>
                        <div class="flex items-start md:items-center gap-[6px]">
                            <img src="/svgs/ic-check-circle.svg" alt="" />
                            <span class="text-sm text-dark">
                                Bekerja sama dengan designer dan developer tim
                            </span>
                        </div>
                    </div>
                </section>
                <div class="grid grid-cols-2 gap-4">
                    <button @click="back" class="w-full btn btn-grey mt-[14px]">
                        Back
                    </button>
                    <button
                        @click="next"
                        class="w-full btn btn-primary mt-[14px]"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </section>

        <section
            class="py-[70px] flex flex-col items-center justify-center px-4"
            v-if="activeStep === 4"
        >
            <div class="text-[32px] font-semibold text-dark">Add to Team</div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Add your new people to grow the <br />
                company reaching their goals
            </p>
            <div
                class="w-full card !max-w-[560px] sm:!flex-row items-center justify-between"
            >
                <div class="flex flex-row items-center gap-4">
                    <img src="/images/user-f-1.png" width="70" alt="" />
                    <div>
                        <div class="text-lg font-semibold">Andini Danna</div>
                        <p class="text-base text-grey">ke@manasihhbang.com</p>
                    </div>
                </div>
                <p class="text-right text-grey">Product Designer</p>
            </div>

            <!-- Your Teams -->
            <section class="pt-[50px]">
                <!-- Section Header -->
                <div class="mb-[30px]">
                    <div class="flex items-center justify-between gap-6">
                        <div>
                            <div class="text-xl font-medium text-dark">
                                Your Teams
                            </div>
                            <p class="text-grey">Improve your growth</p>
                        </div>
                    </div>
                </div>

                <form>
                    <div
                        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3 mb-[50px]"
                    >
                        <div
                            class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                        >
                            <input
                                type="radio"
                                name="team_id"
                                v-model="team_id"
                                class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
                            />
                            <img src="/svgs/ric-box.svg" alt="" />
                            <div
                                class="mt-6 mb-1 font-semibold text-center text-dark"
                            >
                                Product Growth
                            </div>
                            <p class="text-center text-grey">810 People</p>
                        </div>
                        <div
                            class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                        >
                            <input
                                type="radio"
                                name="team_id"
                                v-model="team_id"
                                class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
                            />
                            <img src="/svgs/ric-target.svg" alt="" />
                            <div
                                class="mt-6 mb-1 font-semibold text-center text-dark"
                            >
                                Marketing
                            </div>
                            <p class="text-center text-grey">15,810 People</p>
                        </div>
                        <div
                            class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                        >
                            <input
                                type="radio"
                                name="team_id"
                                v-model="team_id"
                                class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
                            />
                            <img src="/svgs/ric-globe.svg" alt="" />
                            <div
                                class="mt-6 mb-1 font-semibold text-center text-dark"
                            >
                                Globalization
                            </div>
                            <p class="text-center text-grey">300 People</p>
                        </div>
                        <div
                            class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                        >
                            <input
                                type="radio"
                                name="team_id"
                                v-model="team_id"
                                class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
                            />
                            <img src="/svgs/ric-award.svg" alt="" />
                            <div
                                class="mt-6 mb-1 font-semibold text-center text-dark"
                            >
                                Gamification
                            </div>
                            <p class="text-center text-grey">25 People</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button @click="back" class="btn btn-grey mr-2">
                            Back
                        </button>
                        <button @click="next" class="btn btn-primary ml-2">
                            Continue
                        </button>
                    </div>
                </form>
            </section>
        </section>
    </div>
</template>
