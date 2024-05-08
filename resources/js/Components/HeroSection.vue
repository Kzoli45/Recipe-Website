<script setup>
  import { Link } from '@inertiajs/vue3';
  import { getImages } from '@/shared/images';

  const images = getImages()
</script>


<template>
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20">
    <div>
      <blockquote class="p-4 max-sm:pb-6 max-sm:p-0 mb-4 sm:border-s-4 max-sm:border-s-0 max-sm:border-b-4 border-primary bg-gray-50  dark:border-yellow-200 dark:bg-black">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"People who love to eat are always the best people."</p>
      </blockquote>
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Explore a universe of fine <span class="text-primary dark:text-yellow-200">Taste</span></h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Recipes from all around the world provided by us and our lovely community. Find inspiration for every mealtime!</p>

      <div class="mt-7 grid gap-3 w-full sm:inline-flex">
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Find Recipes
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <div class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
          <div v-if="$page.props.auth.user">
            Welcome {{ $page.props.auth.user.name }}
          </div>
          <div v-else>
            <Link :href="route('register')">Join the community</Link>
          </div>
        </div>
      </div>

      <div class="stats mt-4 bg-transparent gap-3">
        <div class="stat p-2">
            <div class="stat-title">Total Recipes</div>
            <div class="stat-value text-yellow-400 dark:text-yellow-200">300+</div>
            <div class="stat-desc">and counting...</div>
        </div>
        
        <div class="stat p-2">
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">10k+ daily</div>
        </div>

        <div class="stat p-2">
            <div class="stat-title">Active Members</div>
            <div class="stat-value text-primary">270+</div>
            <div class="stat-desc">From 31 countries</div>
        </div>
        </div>

        <div class="mt-6 max-sm:hidden">
        <div class="chat chat-start mb-3">
          <div class="chat-bubble chat-bubble-primary">What should we eat today?</div>
        </div>
        <div class="chat chat-end mb-3">
          <div class="chat-bubble chat-bubble-secondary">Hmm. not sure, but I wanna try something new</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-primary">Hey, I'll check out TasteVerse!</div>
        </div>
      </div>
    </div>

    <div class="w-full carousel rounded-box">
      <div class="carousel-item w-full" v-for="image in images" :key="image.imageURL">
        <img :src="image.imageURL" class="w-full" alt="Tailwind CSS Carousel component" />
      </div> 
    </div>
  </div>
</div>
</template>