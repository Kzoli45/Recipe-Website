<script setup>
    import { useDark, useToggle } from '@vueuse/core';
    import { onMounted } from 'vue';

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

</script>

<template>
  <div @click="isDark = !isDark" class="cursor-pointer px-4">
    <svg class="fill-primary dark:fill-yellow-200" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" ><path d="M21.546 11.646 19 9.101V5.5a.5.5 0 0 0-.5-.5h-3.601l-2.546-2.546a.5.5 0 0 0-.707 0L9.101 5H5.5a.5.5 0 0 0-.5.5v3.601l-2.546 2.546a.5.5 0 0 0 0 .707L5 14.899V18.5a.5.5 0 0 0 .5.5h3.601l2.546 2.546a.5.5 0 0 0 .707 0L14.899 19H18.5a.5.5 0 0 0 .5-.5v-3.601l2.546-2.546a.5.5 0 0 0 0-.707zM12 8a4 4 0 0 1 0 8"></path></svg>
  </div>
  
</template>