<script setup>
    import { Link } from '@inertiajs/vue3'
    import ThemeController from './ThemeController.vue'
    import { ref } from 'vue';

    const { canLogin, canRegister } = defineProps(['canLogin', 'canRegister']);
    const isHamburgerOpen = ref(false)
</script>

<template>
    <div class="lg:ml-5 sm:ml-2">
        <Link href="/" class="font-jersey font-bold text-black dark:text-white text-2xl absolute top-6 left-14  max-sm:top-7 max-sm:left-10">Taste<span class=" text-primary dark:text-yellow-200" >Verse</span></Link>
    </div>
    <div class="hidden sm:block">
        <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
            <Link
                 v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#f9f9f9] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">Dashboard</Link>
                <template v-else>
                    <Link
                            :href="route('login')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">Log in</Link>
                    <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">Register</Link>
                    </template>  

                    <div class="flex items-center">
                        <ThemeController/>
                    </div>
            </nav>
        </div>

        <div class="flex flex-row justify-end items-center sm:hidden">
            <details class="dropdown">
                <summary class="m-1 btn p-0 h-fit bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                    <svg class="fill-primary dark:fill-yellow-200"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </summary>
                    <ul class="p-2 menu dropdown-content z-[1] bg-gray-700 rounded-box w-32 text-black dark:text-white">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
            </details>
            <ThemeController/>
        </div>
</template>