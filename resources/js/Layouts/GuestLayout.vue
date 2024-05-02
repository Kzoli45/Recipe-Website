<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-neutral-800">
        <div>
            <Link href="/">
                <ApplicationLogo />
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-10 px-6 py-8 bg-white dark:bg-neutral-900 border dark:border-neutral-700 shadow-md overflow-hidden sm:rounded-2xl"
        >
            <slot />
        </div>
    </div>
</template>
