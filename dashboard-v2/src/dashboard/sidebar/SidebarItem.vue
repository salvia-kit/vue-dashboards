<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps({
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const route = useRoute();
</script>

<template>
  <RouterLink :to="to">
    <span
      class="my-1 flex w-full items-center justify-start p-3 text-gray-800 lg:hover:bg-gray-100"
      :class="
        route.path === to &&
        'border-green-500 border-l-4 lg:border-l-0 lg:border-r-4 lg:border-gray-500'
      "
    >
      <span>
        <slot />
      </span>
      <span class="mx-4 text-sm">
        {{ title }}
      </span>
    </span>
  </RouterLink>
</template>
