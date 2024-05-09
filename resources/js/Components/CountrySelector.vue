<script setup>

    import { getCountries} from '@/shared/countries';
    import { ref, onMounted } from 'vue';

    const props = defineProps(['form']);

    const countries = ref([]);

    onMounted(async () => {
      countries.value = await getCountries();
    });

</script>

<template>
   <select class="select select-bordered w-full max-w-xs bg-gray-200 dark:bg-neutral-800" v-model="props.form.country">
        <option v-for="country in countries" :key="country.name" :value="country.name">
          <span>{{ country.flag }}</span>
            {{ country.name }}
        </option>
    </select>
</template>