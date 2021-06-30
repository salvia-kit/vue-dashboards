<template>
  <dashboard-layout>
    <router-view />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from './dashboard/Index.vue';

export default {
  components: {
    DashboardLayout,
  },
};
</script>
