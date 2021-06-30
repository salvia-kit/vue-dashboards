<template>
  <aside
    class="
      scrollbar
      bg-body
      h-screen
      overflow-y-auto
      top-0
      lg:flex lg:relative lg:w-64 lg:z-auto
    "
    :class="[
      style[mobilePosition],
      open ? 'absolute w-8/12 z-40 sm:w-5/12' : 'hidden',
    ]"
  >
    <div class="pb-32 lg:pb-12">
      <sidenav-header />
      <sidenav-items />
    </div>
  </aside>
</template>

<script>
import { inject } from 'vue';
import SidenavItems from './Items.vue';
import SidenavHeader from './Header.vue';

export default {
  name: 'SideNavigation',
  components: { SidenavItems, SidenavHeader },
  props: {
    mobilePosition: {
      type: String,
      default: '',
    },
  },
  setup() {
    const open = inject('open');

    const style = {
      left: 'left-0',
      right: 'right-0',
    };

    return { open, style };
  },
};
</script>

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
