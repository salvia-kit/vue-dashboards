<template>
  <dashboard-layout>
    <router-view />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from './dashboard/Layout.vue';

export default {
  components: {
    DashboardLayout,
  },
};
</script>
