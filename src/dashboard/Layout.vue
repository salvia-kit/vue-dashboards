<template>
  <dashboard-provider>
    <div class="h-screen overflow-hidden relative">
      <div class="flex items-start">
        <Overlay />
        <side-navigation mobile-position="right" />
        <div class="bg-body flex flex-col h-screen pl-0 w-full lg:w-99">
          <TopNavigation />
          <main
            class="
              bg-gray-100
              h-screen
              overflow-auto
              pb-36
              pt-4
              px-2
              md:pb-8 md:px-4
              lg:px-6 lg:rounded-tl-3xl
            "
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </dashboard-provider>
</template>

<script setup>
import Overlay from './provider/Overlay.vue';
import DashboardProvider from './provider/Provider.vue';
import TopNavigation from './topnavigation/Index.vue';
import SideNavigation from './sidenavigation/Index.vue';
</script>
