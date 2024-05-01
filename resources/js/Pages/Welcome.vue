<script setup>
import { Head, Link } from '@inertiajs/vue3';
import HeroSection from '../Components/HeroSection.vue'
import NavBar from '@/Components/NavBar.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="TasteVerse" />
    <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header class="flex flex-row justify-end items-center gap-3 mb-4 p-4">
                    <NavBar :canLogin="canLogin" :canRegister="canRegister"/>
                </header>

                <main class="mt-6">
                    <HeroSection/>
                </main>

                <footer class="footer footer-center p-4 text-base-content bg-transparent">
                    <aside>
                    <p>Copyright © 2024 - All right reserved by <span class="text-yellow-200">TasteVerse</span> Company Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    </div>
</template>
