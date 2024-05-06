<script setup>
    import { useDark, useToggle } from '@vueuse/core';

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>

<template>
    <header>
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">User Experience</h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            The theme of the page defaults to the settings of your computer, but here you can change it manually.</p>

        <div class="font-bold mt-6 space-y-6 cursor-pointer" @click="isDark = !isDark">
            <p v-if="isDark" class="text-yellow-200">Change to light mode</p>
            <p v-else class="text-primary">Change to dark mode</p>
        </div>
    </header>
</template>