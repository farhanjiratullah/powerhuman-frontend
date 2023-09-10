<script setup>
    definePageMeta({
        layout: "form",
    });

    useHead({
        title: "Create Employee | PowerHuman",
        meta: [{ name: "description", content: "Create employee page" }],
    });

    const accessToken = useCookie("accessToken");
    const config = useRuntimeConfig();

    const companyId = ref("");
    const role = ref("");

    const { data: companies, pending } = await useLazyFetch(
        `${config.public.apiBase}/companies/all`,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken.value}`,
            },
            transform: (companies) => companies.data,
        }
    );

    const { data: roles, pending: rolesPending } = await useLazyAsyncData(
        "roles",
        () => {
            if (companyId.value) {
                return $fetch(
                    `${config.public.apiBase}/company/${companyId.value}/roles`,
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken.value}`,
                        },
                    }
                );
            }

            return false;
        },
        {
            transform: (roles) => roles.data,
            watch: [companyId],
        }
    );

    const { data: teams, pending: teamsPending } = await useLazyAsyncData(
        "teams",
        () => {
            if (companyId.value) {
                return $fetch(
                    `${config.public.apiBase}/company/${companyId.value}/teams`,
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken.value}`,
                        },
                    }
                );
            }

            return false;
        },
        {
            transform: (teams) => teams.data,
            watch: [companyId],
        }
    );

    const activeStep = ref(1);

    const form = ref({
        name: "",
        email: "",
        gender: "",
        age: "",
        photo: "",
        phone: "",
        role_id: "",
        team_id: "",
    });

    const roleId = ref("");

    const { data: responsibilities, pending: responsibilitiesPending } =
        await useLazyAsyncData(
            "responsibilities",
            () => {
                if (form.value.role_id) {
                    return $fetch(
                        `${config.public.apiBase}/roles/${form.value.role_id}`,
                        {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${accessToken.value}`,
                            },
                        }
                    );
                }

                return false;
            },
            {
                transform: (roles) => roles.data.responsibilities,
                watch: [roleId],
            }
        );

    const photoPreview = ref(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            form.value.photo = file;

            const reader = new FileReader();
            reader.onload = () => {
                photoPreview.value = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            form.value.photo = "";
            photoPreview.value = null;
        }
    };

    const handleRoleChange = (event) => {
        role.value =
            event.target.options[event.target.selectedIndex].textContent;
        roleId.value = event.target.options[event.target.selectedIndex].value;
    };

    const errors = ref({});

    const { store, isLoading } = useEmployees();

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
            <form class="w-full card" @submit.prevent="next">
                <div class="mb-[2px] mx-auto" v-if="form.photo">
                    <img
                        :src="photoPreview"
                        alt="Photo Preview"
                        class="w-[70px]"
                    />
                </div>
                <div class="form-group">
                    <label for="photo" class="text-grey">Photo</label>
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        @change="handleFileChange"
                        class="input-field"
                    />
                    <div v-if="errors?.value?.photo">
                        <p class="text-red-500">
                            {{ errors?.value?.photo[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="text-grey"
                        >Complete Name
                        <span class="text-red-500">*</span></label
                    >
                    <input
                        type="text"
                        id="name"
                        name="name"
                        class="input-field"
                        v-model="form.name"
                        autofocus
                    />
                    <div v-if="errors?.value?.name">
                        <p class="text-red-500">
                            {{ errors?.value?.name[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email" class="text-grey"
                        >Email Address
                        <span class="text-red-500">*</span></label
                    >
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
                    <label for="gender" class="text-grey"
                        >Gender <span class="text-red-500">*</span></label
                    >
                    <select
                        name="gender"
                        id="gender"
                        v-model="form.gender"
                        class="appearance-none input-field form-icon-chevron_down"
                    >
                        <option value="male" selected>Male</option>
                        <option value="female">Female</option>
                    </select>
                    <div v-if="errors?.value?.gender">
                        <p class="text-red-500">
                            {{ errors?.value?.gender[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="age" class="text-grey"
                        >Age <span class="text-red-500">*</span></label
                    >
                    <input
                        type="number"
                        id="age"
                        name="age"
                        class="input-field"
                        v-model.number="form.age"
                    />
                    <div v-if="errors?.value?.age">
                        <p class="text-red-500">
                            {{ errors?.value?.age[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="company-id" class="text-grey"
                        >Company <span class="text-red-500">*</span></label
                    >
                    <select
                        name="company-id"
                        id="company-id"
                        class="appearance-none input-field form-icon-chevron_down"
                        v-model="companyId"
                    >
                        <option v-if="pending">Loading...</option>
                        <template v-else>
                            <option
                                v-for="(company, index) in companies"
                                :key="company.id"
                                :value="company.id"
                            >
                                {{ company.name }}
                            </option>
                        </template>
                    </select>
                </div>
                <button type="submit" class="w-full btn btn-primary mt-[14px]">
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
            <form class="w-full card" @submit.prevent="next">
                <div class="flex flex-col items-center mb-[14px]">
                    <div class="mb-[2px] mx-auto" v-if="form.photo">
                        <img
                            :src="photoPreview"
                            alt="Photo Preview"
                            class="w-[70px]"
                        />
                    </div>
                    <div class="mt-6 mb-1 text-lg font-semibold">
                        {{ form.name }}
                    </div>
                    <p class="text-base text-grey">{{ form.email }}</p>
                </div>
                <div class="form-group">
                    <label for="phone" class="text-grey">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        v-model="form.phone"
                        class="input-field"
                        autofocus
                    />
                    <div v-if="errors?.value?.phone">
                        <p class="text-red-500">
                            {{ errors?.value?.phone[0] }}
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        @click="back"
                        class="w-full btn btn-grey mt-[14px]"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
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
            <form class="w-full card" @submit.prevent="next">
                <div class="flex flex-col items-center mb-[14px]">
                    <div class="mb-[2px] mx-auto" v-if="form.photo">
                        <img
                            :src="photoPreview"
                            alt="Photo Preview"
                            class="w-[70px]"
                        />
                    </div>
                    <div class="mt-6 mb-1 text-lg font-semibold">
                        {{ form.name }}
                    </div>
                    <p class="text-base text-grey">{{ form.email }}</p>
                </div>
                <div class="form-group">
                    <label for="role-id" class="text-grey"
                        >Select Role <span class="text-red-500">*</span></label
                    >
                    <select
                        name="role-id"
                        id="role-id"
                        v-model="form.role_id"
                        class="appearance-none input-field form-icon-chevron_down"
                        @change="handleRoleChange"
                        autofocus
                    >
                        <option v-if="rolesPending">Loading...</option>
                        <template v-else>
                            <option
                                v-for="(role, index) in roles"
                                :key="role.id"
                                :value="role.id"
                            >
                                {{ role.name }}
                            </option>
                        </template>
                    </select>
                    <div v-if="errors?.value?.role_id">
                        <p class="text-red-500">
                            {{ errors?.value?.role_id[0] }}
                        </p>
                    </div>
                </div>

                <!-- Responsibilities -->
                <section>
                    <label for="" class="text-grey"> Responsibilities </label>
                    <div class="flex flex-col gap-4 mt-[10px]">
                        <div v-if="responsibilitiesPending">Loading...</div>
                        <div
                            class="flex items-start md:items-center gap-[6px]"
                            v-else
                            v-for="responsibility in responsibilities"
                            :key="responsibility.id"
                        >
                            <img src="/svgs/ic-check-circle.svg" alt="" />
                            <span class="text-sm text-dark">
                                {{ responsibility.name }}
                            </span>
                        </div>
                    </div>
                </section>
                <div class="grid grid-cols-2 gap-4">
                    <button
                        type="button"
                        @click="back"
                        class="w-full btn btn-grey mt-[14px]"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
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
                    <div class="mb-[2px] mx-auto" v-if="form.photo">
                        <img
                            :src="photoPreview"
                            alt="Photo Preview"
                            class="w-[70px]"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-semibold">
                            {{ form.name }}
                        </div>
                        <p class="text-base text-grey">
                            {{ form.email }}
                        </p>
                    </div>
                </div>
                <p class="text-right text-grey">{{ role }}</p>
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

                <form @submit.prevent="store(form, errors)" method="post">
                    <div
                        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3 mb-[50px]"
                    >
                        <div v-if="teamsPending">Loading...</div>
                        <template v-else>
                            <div
                                class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0"
                                v-for="team in teams"
                                :key="team.id"
                            >
                                <input
                                    type="radio"
                                    name="team-id"
                                    v-model="form.team_id"
                                    class="absolute inset-0 checked:ring-2 ring-primary rounded-[26px] appearance-none"
                                    :value="team.id"
                                />
                                <img
                                    :src="`${config.public.baseUrl}/storage/${team.icon}`"
                                    class="w-[70px]"
                                    :alt="team.name"
                                />
                                <div
                                    class="mt-6 mb-1 font-semibold text-center text-dark"
                                >
                                    {{ team.name }}
                                </div>
                                <p class="text-center text-grey">
                                    {{ team.employees_count }} People
                                </p>
                            </div>
                        </template>
                    </div>
                    <div class="flex justify-center">
                        <button
                            type="button"
                            @click="back"
                            class="btn btn-grey mr-2"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="isLoading"
                        >
                            {{ isLoading ? "Loading..." : "Continue" }}
                        </button>
                    </div>
                </form>
            </section>
        </section>
    </div>
</template>
