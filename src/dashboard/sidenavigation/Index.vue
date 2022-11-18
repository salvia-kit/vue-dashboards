<script setup>
import { inject } from 'vue';
import SidenavItems from './Items.vue';
import SidenavHeader from './Header.vue';

defineProps({
  mobilePosition: {
    type: String,
    default: '',
  },
});

const open = inject('open');

const style = {
  left: 'left-0',
  right: 'right-0',
};
</script>

<template>
  <aside
    class="scrollbar top-0 h-screen overflow-y-auto bg-body lg:relative lg:z-auto lg:flex lg:w-64"
    :class="[
      style[mobilePosition],
      open ? 'absolute w-8/12 z-40 sm:w-5/12' : 'hidden',
    ]"
  >
    <div class="pb-32 lg:pb-12">
      <SidenavHeader />
      <SidenavItems />
    </div>
  </aside>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.scrollbar {
  -ms-overflow-style: none; /* make scrollbar transparent on Firefox, IE and Edge*/
  scrollbar-width: none;
}
</style>
