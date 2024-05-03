<script setup>
import { Link } from '@inertiajs/vue3';
import { getRandomFood } from '@/shared/food';

import { useDark, useToggle } from '@vueuse/core';

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

const food = getRandomFood()
</script>

<template>
<div class="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-neutral-800 shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <slot/>
        </div>
        <div class="flex-1 bg-primary text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: 'url(' + food.foodURL + ')' }">
            </div>
        </div>
    </div>
</div>
</template>
