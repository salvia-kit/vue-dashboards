<script setup>
const snippets = `
    <sidenav-item title="Dashboard" to="/">
      <dashboard-icon />
    </sidenav-item>

    <sidenav-item title="Projects" to="/admin/projects">
      <projects-icon />
    </sidenav-item>`;
</script>

<template>
  <pre
    class="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-blue-600"
  >
    {{ snippets }}
  </pre>
</template>
