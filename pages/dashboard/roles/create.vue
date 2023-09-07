<script setup>
    definePageMeta({
        layout: "form",
    });

    useHead({
        title: "Create Role | PowerHuman",
        meta: [{ name: "description", content: "Create role page" }],
    });

    const accessToken = useCookie("accessToken");

    const { data: companies, pending } = await useLazyFetch(
        `${useRuntimeConfig().public.apiBase}/companies/all`,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken.value}`,
            },
            transform: (companies) => companies.data,
        }
    );

    const form = ref({
        company_id: "",
        name: "",
        responsibilities: [
            {
                name: "",
            },
        ],
    });

    const errors = ref({});

    const { store, isLoading } = useRoles();

    const addResponsibility = () => {
        form.value.responsibilities.push({
            name: "",
        });
    };

    const removeResponsibility = (index) => {
        form.value.responsibilities.splice(index, 1);
    };
</script>

<template>
    <div>
        <section
            class="py-[70px] flex flex-col items-center justify-center px-4"
        >
            <div class="text-[32px] font-semibold text-dark">New Role</div>
            <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
                Manage your employees to achieve <br />
                a bigger goals for your company
            </p>
            <form class="w-full card" @submit.prevent="store(form, errors)">
                <div class="form-group">
                    <label for="company_id" class="text-grey"
                        >Company <span class="text-red-500">*</span></label
                    >
                    <select
                        name="company_id"
                        id="company_id"
                        class="appearance-none input-field form-icon-chevron_down"
                        v-model="form.company_id"
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
                    <div v-if="errors?.value?.company_id">
                        <p class="text-red-500">
                            {{ errors?.value?.company_id[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="text-grey"
                        >Role Name <span class="text-red-500">*</span></label
                    >
                    <input
                        type="text"
                        class="input-field"
                        id="name"
                        name="name"
                        v-model="form.name"
                    />
                    <div v-if="errors?.value?.name">
                        <p class="text-red-500">
                            {{ errors?.value?.name[0] }}
                        </p>
                    </div>
                </div>
                <div class="form-group">
                    <label for="responsibilities-0" class="text-grey">
                        Responsibility <span class="text-red-500">*</span>
                    </label>
                    <ul id="listResp" class="flex flex-col gap-4">
                        <li
                            class="flex flex-col gap-2"
                            v-for="(
                                responsibility, index
                            ) in form.responsibilities"
                            :key="index"
                        >
                            <div class="flex items-center gap-5">
                                <input
                                    type="text"
                                    :id="`responsibilities-${index}`"
                                    :name="`responsibilities-${index}`"
                                    v-model="form.responsibilities[index].name"
                                    class="w-full input-field"
                                />
                                <div>
                                    <template
                                        v-if="
                                            index ===
                                            form.responsibilities.length - 1
                                        "
                                    >
                                        <a
                                            @click.prevent="addResponsibility"
                                            role="button"
                                            :id="`addResponsibility-${index}`"
                                        >
                                            <img
                                                src="/svgs/ric-plus.svg"
                                                alt="Add Responsibility"
                                            />
                                        </a>
                                    </template>
                                    <template v-else>
                                        <a
                                            @click.prevent="
                                                removeResponsibility(index)
                                            "
                                            role="button"
                                            :id="`removeResponsibility-${index}`"
                                        >
                                            <img
                                                src="/svgs/ric-close-red.svg"
                                                alt="Remove Responsibility"
                                            />
                                        </a>
                                    </template>
                                </div>
                            </div>
                            <div
                                v-if="
                                    errors?.value?.[
                                        `responsibilities.${index}.name`
                                    ]
                                "
                            >
                                <p class="text-red-500">
                                    {{
                                        errors?.value?.[
                                            `responsibilities.${index}.name`
                                        ][0]
                                    }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <button
                    type="submit"
                    class="w-full btn btn-primary mt-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="isLoading"
                >
                    {{ isLoading ? "Loading..." : "Continue" }}
                </button>
            </form>
        </section>
    </div>
</template>
