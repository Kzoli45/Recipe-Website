<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'block w-full ps-3 pe-4 py-2 border-l-4 border-primary dark:border-yellow-200 text-start text-base font-medium text-black dark:text-white bg-primary dark:bg-neutral-900 focus:outline-none focus:text-black dark:focus:text-white focus:bg-primary dark:focus:bg-neutral-600 transition duration-150 ease-in-out'
        : 'block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-200 hover:bg-indigo-300 dark:hover:bg-neutral-800 hover:border-indigo-300 dark:hover:border-yellow-200 focus:outline-none focus:text-gray-800 dark:focus:text-white focus:bg-indigo-50 dark:focus:bg-neutral-900 focus:border-indiho-100 dark:focus:border-yellow-200 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
