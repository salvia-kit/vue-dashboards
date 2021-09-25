<template>
  <li>
    <router-link :to="to">
      <span
        class="
          flex
          items-center
          justify-start
          my-2
          p-4
          text-sm
          w-full
          hover:text-white
        "
        :class="route.path === to ? 'font-medium text-white' : 'text-gray-400'"
      >
        <span>
          <slot />
        </span>
        <span class="mx-4">
          {{ title }}
        </span>
      </span>
    </router-link>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
  to: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});

const route = useRoute();
</script>
