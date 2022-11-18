<script setup>
import Overlay from './provider/Overlay.vue';
import DashboardProvider from './provider/Provider.vue';
import TopNavigation from './topnavigation/Index.vue';
import SideNavigation from './sidenavigation/Index.vue';
</script>

<template>
  <DashboardProvider>
    <div class="relative h-screen overflow-hidden">
      <div class="flex items-start">
        <Overlay />
        <SideNavigation mobile-position="right" />
        <div class="flex h-screen w-full flex-col bg-body pl-0 lg:w-99">
          <TopNavigation />
          <main
            class="h-screen overflow-auto bg-gray-100 px-2 pb-36 pt-4 md:px-4 md:pb-8 lg:rounded-tl-3xl lg:px-6"
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </DashboardProvider>
</template>
