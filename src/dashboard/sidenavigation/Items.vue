<script setup>
import SidenavItem from './Item.vue';

/* ICONS */
import UsersIcon from './icons/Users.vue';
import MediasIcon from './icons/Medias.vue';
import ContactIcon from './icons/Contact.vue';
import ServersIcon from './icons/Servers.vue';
import TerminalIcon from './icons/Terminal.vue';
import SettingsIcon from './icons/Settings.vue';
import RecycleBinIcon from './icons/RecycleBin.vue';
import DocumentationIcon from './icons/Documentation.vue';
</script>

<template>
  <ul class="md:pl-6">
    <SidenavItem title="Users" to="/">
      <UsersIcon />
    </SidenavItem>

    <SidenavItem title="Medias" to="/admin/medias">
      <MediasIcon />
    </SidenavItem>

    <SidenavItem title="Contacts" to="/admin/contact">
      <ContactIcon />
    </SidenavItem>

    <SidenavItem title="Servers" to="/admin/servers">
      <ServersIcon />
    </SidenavItem>

    <SidenavItem title="Settings" to="/admin/settings">
      <SettingsIcon />
    </SidenavItem>

    <SidenavItem title="Terminal" to="/admin/terminal">
      <TerminalIcon />
    </SidenavItem>

    <SidenavItem title="Recycle Bin" to="/admin/recycle-bin">
      <RecycleBinIcon />
    </SidenavItem>

    <SidenavItem title="Documentation" to="/admin/documentation">
      <DocumentationIcon />
    </SidenavItem>
  </ul>
</template>
