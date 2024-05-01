<script setup>
    import { Link } from '@inertiajs/vue3'

    const { canLogin, canRegister } = defineProps(['canLogin', 'canRegister']);
</script>

<template>
    <div class="lg:ml-5 sm:ml-2">
        <span class="font-jersey font-bold text-white text-2xl">Taste<span class="text-yellow-200" >Verse</span></span>
        </div>
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
        </nav>
</template>