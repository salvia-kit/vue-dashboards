import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Medias = () => import('./pages/admin/Medias.vue');
const Servers = () => import('./pages/admin/Servers.vue');
const Contact = () => import('./pages/admin/Contact.vue');
const Terminal = () => import('./pages/admin/Terminal.vue');
const Settings = () => import('./pages/admin/Settings.vue');
const RecycleBin = () => import('./pages/admin/RecycleBin.vue');
const Documentation = () => import('./pages/admin/Documentation.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Medias',
    path: '/admin/medias',
    component: Medias,
  },
  {
    name: 'Servers',
    path: '/admin/servers',
    component: Servers,
  },
  {
    name: 'Contact',
    path: '/admin/contact',
    component: Contact,
  },
  {
    name: 'Terminal',
    path: '/admin/terminal',
    component: Terminal,
  },
  {
    name: 'Documentation',
    path: '/admin/documentation',
    component: Documentation,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    component: Settings,
  },
  {
    name: 'Recycle Bin',
    path: '/admin/recycle-bin',
    component: RecycleBin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
