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
        ? 'inline-flex items-center px-1 pt-1 border-b-2 border-primary dark:border-yellow-200 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none dark:focus:border-white focus:border-black transition duration-150 ease-in-out'
        : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 hover:border-primary dark:hover:border-yellow-200 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-primary dark:focus:border-yellow-200 transition duration-150 ease-in-out'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
