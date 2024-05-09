<script setup>
    import CountrySelector from './CountrySelector.vue';
    import { useForm, usePage } from '@inertiajs/vue3';
    import PrimaryButton from './PrimaryButton.vue';
    import InputError from './InputError.vue';
    import InputLabel from './InputLabel.vue';
    import TextInput from './TextInput.vue';

    const user = usePage().props.auth.user;

    const form = useForm({
        country: user.country,
        phone: user.phone,
    });

    const submitForm = () => {
        console.log(form.data);
        form.patch(route('profile.update-more-information'));
    }
</script>

<template>
    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Further Information</h2>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
        You can tell us a bit more about yourself. This information will be displayed on your profile so other users can get to know you better.</p>

    <div class="mt-6">
        <form @submit.prevent="submitForm">
            <div>
                <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">Country</label>
                <CountrySelector :form="form" class="mb-6"/>

                <InputError class="mt-2" :message="form.errors.country" />
            </div>

            <div class="flex items-center gap-4 mt-2">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                </Transition>
            </div>
        </form>
    </div>
</template>
