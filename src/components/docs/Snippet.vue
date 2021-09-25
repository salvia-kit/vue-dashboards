<template>
  <pre
    class="
      font-mono
      text-sm
      px-4
      py-1
      rounded
      overflow-x-auto
      max-w-full
      bg-gray-100
      text-blue-600
      border
    "
  >
    {{ snippets }}
  </pre>
</template>

<script setup>
const snippets = `<sidenav-item title="Dashboard" to="/">
      <dashboard-icon />
    </sidenav-item>

    <sidenav-item title="Projects" to="/admin/projects">
      <projects-icon />
    </sidenav-item>`;
</script>
