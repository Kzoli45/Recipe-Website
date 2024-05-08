<script setup>
    import { Link } from '@inertiajs/vue3'
    import ThemeController from './ThemeController.vue'
    import { ref } from 'vue';
    import ResponsiveNavLink from './ResponsiveNavLink.vue';

    const { canLogin, canRegister } = defineProps(['canLogin', 'canRegister']);
    const showingNavigationDropdown = ref(false)
</script>

<template>
    <div class="lg:ml-5 sm:ml-2">
        <Link href="/" class="font-jersey font-bold text-black dark:text-white text-2xl absolute top-6 left-14 max-sm:hidden">Taste<span class=" text-primary dark:text-yellow-200" >Verse</span></Link>
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

        <nav class="sm:hidden">
            <div class="max-w-7xl mx-auto sm:px-6">
                <div class="flex justify-between h-16">
                    <div class="-me-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-800 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6 stroke-primary dark:stroke-yellow-200" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <ThemeController/>
                            <Link href="/" class="font-jersey font-bold text-black dark:text-white text-2xl absolute top-6 right-10">Taste<span class=" text-primary dark:text-yellow-200" >Verse</span></Link>
                        </div>
                </div>
            </div>
            <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <div v-if="canLogin">
                            <div v-if="$page.props.auth.user">
                                <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                Dashboard</ResponsiveNavLink>
                                <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log out</ResponsiveNavLink>
                            </div>
                            <div v-else>
                                <ResponsiveNavLink :href="route('login')">
                                Log in</ResponsiveNavLink>
                                <ResponsiveNavLink v-if="canRegister":href="route('register')">
                                Register</ResponsiveNavLink>
                            </div>
                        </div>
                    </div>

                    <div class="pt-2 pb-1 border-t border-gray-400 dark:border-gray-600">
                        <div class="space-y-1">
                            <ResponsiveNavLink href="#" :active="route().current('dashboard')">
                            Recipes</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
        </nav>
</template>