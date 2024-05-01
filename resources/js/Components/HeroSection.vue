<script setup>
  import { Link } from '@inertiajs/vue3';
</script>


<template>
    <!-- Hero -->
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Explore a universe of <span class="text-yellow-200">Delicious</span></h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Recipes from all around the world provided by us and our lovely community. Find inspiration for every mealtime!</p>

      <!-- Buttons -->
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
      <!-- End Buttons -->
      <!-- Stats -->
      <div class="stats shadow mt-4 bg-transparent gap-3">
        <div class="stat p-2">
            <div class="stat-title">Total Recipes</div>
            <div class="stat-value text-yellow-200">300+</div>
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
    </div>
    <!-- End Col -->

    <div class="w-full carousel rounded-box">
      <div class="carousel-item w-full">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
      </div> 
      <div class="carousel-item w-full">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
      </div> 
      <div class="carousel-item w-full">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
      </div> 
      <div class="carousel-item w-full">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/10/mediterranean-chickpea-salad.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
      </div> 
      <div class="carousel-item w-full">
        <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/12/pizza-salami-close-up.jpg" class="w-full" alt="Tailwind CSS Carousel component" />
      </div> 
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Hero -->
</template>