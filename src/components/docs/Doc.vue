<script setup>
import Snippet from './Snippet.vue';
import JsIcon from './icons/JsIcon.vue';
import VueIcon from './icons/VueIcon.vue';
import FolderIcon from './icons/FolderIcon.vue';
</script>

<template>
  <div class="max-w-full py-8 text-gray-700">
    <h2 class="mb-10 pl-3 text-3xl font-medium md:pl-6">Documentation</h2>
    <section class="mb-16 bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">Features</h2>
      <ul class="mt-4 list-disc pl-6">
        <li class="mb-4">Support of the active route (styled by default).</li>
        <li class="mb-4">
          Fully customizable and without external dependencies.
        </li>
        <li class="mb-4">
          No vendor lock-in, you can export it and integrate it in your project.
        </li>
        <li>
          Sidenav aligned left or right according to your preferences (on
          mobile).
        </li>
      </ul>
    </section>

    <section class="mb-16 bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">File Structure</h2>
      <div class="pl-2">
        <div class="mt-4 mb-3 flex">
          <folder-icon />
          <span class="pl-2">src</span>
        </div>
        <div class="mb-3 flex pl-5">
          <folder-icon />
          <span class="pl-2">components</span>
        </div>
        <div class="mb-3 flex pl-5">
          <folder-icon />
          <span class="pl-2">dashboard</span>
        </div>
        <div class="mb-3 flex pl-11">
          <folder-icon />
          <span class="pl-2">sidenavigation</span>
        </div>
        <div class="mb-3 flex pl-16">
          <folder-icon />
          <span class="pl-2">icons</span>
        </div>
        <div class="mb-3 flex pl-16">
          <vue-icon />
          <span class="pl-2">Header.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <vue-icon />
          <span class="pl-2">Index.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <vue-icon />
          <span class="pl-2">Item.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <vue-icon />
          <span class="pl-2">items.vue</span>
        </div>
        <div class="mb-3 flex pl-11">
          <folder-icon />
          <span class="pl-2">topnavigation</span>
        </div>
        <div class="mb-3 flex pl-16">
          <vue-icon />
          <span class="pl-2">Index.vue</span>
        </div>
        <div class="mb-3 flex pl-11">
          <vue-icon />
          <span class="pl-2">Layout.vue</span>
        </div>
        <div class="mb-3 flex pl-3">
          <folder-icon />
          <span class="pl-2">pages</span>
        </div>
        <div class="mb-3 flex pl-3">
          <js-icon />
          <span class="pl-2">main.js</span>
        </div>
        <div class="mb-3 flex pl-3">
          <js-icon />
          <span class="pl-2">routes.js</span>
        </div>
      </div>
    </section>

    <section class="mb-16 bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">File Structure explained</h2>
      <p class="mt-5">
        We will focus on <span class="font-medium">dashboard</span> folder and
        its <span class="font-medium">subfolders</span> which contain all the
        logic.
      </p>

      <div class="mt-5 mb-12">
        <div class="flex">
          <folder-icon /> <strong class="px-1">provider</strong>
        </div>
        <div class="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon extend-class="h-7 w-7" />
          <span class="px-2 font-medium">Context.vue</span> :
          <p class="pl-2">
            contains the
            <strong class="font-medium">dashboard-provider</strong> component
            where all the dashboard logic is placed. this will then be reused in
            other components. it handles the closing of the sidenav when the
            route changes or on click outside.
          </p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon />
          <span class="px-2 font-medium">Overlay.vue</span> :
          <p class="pl-2">
            displays an overlay that will only be visible on small screens to
            emphasize the focus on the sidenav when it is open
          </p>
        </div>
      </div>

      <div class="mb-8">
        <div class="flex">
          <folder-icon /> <strong class="px-1">sidenavigation</strong>
        </div>
        <div class="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
          <folder-icon extend-class="h-7 w-7" />
          <span class="px-2 font-medium">icons</span> :
          <p class="pl-1">
            As each <span class="font-medium">sidenav-item</span> has an icon,
            this sub-folder contains the icons of each sidenav-item. You don't
            need this folder if you are using a package for icons such as
            <span class="font-medium">font-awesome</span>
            or other
          </p>
        </div>
        <div class="mt-10 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon /> <span class="px-2 font-medium">Header.vue</span> :
          <p class="pl-1">
            The <span class="font-medium"> sidenav-header</span> component
            contains the logo that is displayed on top of the sidenav
          </p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon /><span class="px-2 font-medium">Item.vue</span> :
          <p class="pl-1">
            Contains the <span class="font-medium">sidenav-item</span> component
            which represents each item of the sidenav.
          </p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon /><span class="px-2 font-medium">Items.vue</span> :
          <p class="pl-1">
            This <span class="font-medium">sidenav-items</span> component
            contains the
            <span class="font-medium"> sidenav-item</span> component
          </p>
        </div>
        <div class="mt-8 mb-12 flex flex-wrap pl-8">
          <div class="md:w-6/12">
            <Snippet />
          </div>
          <ul class="pt-8 md:w-6/12 md:pt-4 md:pl-4">
            <li class="mb-2">
              <span class="px-1 font-bold">Props</span>
            </li>
            <li class="mb-2">
              <strong class="px-1 font-medium">title :</strong> text that
              indicate the route
            </li>
            <li class="mb-2">
              <strong class="px-1 font-medium">to :</strong> name of the route
            </li>
            <li class="mb-2">
              <strong class="px-1 font-medium">sidenav-item slot :</strong> the
              icon, imported from <strong class="px-1">icons</strong> folder or
              from your library
            </li>
          </ul>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon /> <span class="px-2 font-medium">Index.vue</span> :
          <p class="pl-1">
            This <span class="font-medium">side-navigation</span> component
            contains all the logic of the sidenav.
          </p>
        </div>
      </div>

      <div>
        <div class="mt-8 flex">
          <folder-icon /> <strong class="px-1">topnavigation</strong>
        </div>
        <div class="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
          <vue-icon /> <span class="px-2 font-medium">Index.vue</span> :
          <p class="pl-1">
            Contains the
            <span class="font-medium"> top-navigation</span> component. You can
            customize it or replace it with your own navbar but don't forget to
            add a button to toggle sidenav on mobile
          </p>
        </div>
      </div>

      <div>
        <div class="mt-8 flex flex-wrap md:flex-nowrap">
          <vue-icon /> <strong class="px-1">Layout.vue :</strong> Contains the
          <span class="px-1 font-medium">dashboard-layout</span> component used
          as the layout of the application
        </div>
      </div>
    </section>

    <section class="mb-16 bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">How it works ?</h2>
      <ul class="mt-4 list-disc pl-6">
        <li class="mb-3">
          Add your routes and items in the
          <span class="font-medium">dashboard/sidenavigation/items.vue</span>
          file
        </li>
        <li class="mb-3">
          If your routes don't exist yet, create your routes in the
          <span class="font-medium">pages</span> directory and import them in
          <span class="font-medium">routes.js</span>
          file
        </li>
        <li class="mb-3">
          Wrap the <span class="font-medium">App.vue</span> by the
          <span class="font-medium">dashboard-layout</span> component
        </li>
      </ul>
    </section>

    <section class="mb-16 bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">Auto Format and Linting</h2>
      <div class="mt-4">
        The dashboard is provided with <span class="font-medium">eslint</span>,
        <span class="font-medium">prettier</span>,
        <span class="font-medium">lint-staged</span> and
        <span class="font-medium">husky.</span> Before each commit, the
        <span class="font-medium">pre-commit</span> hook will be triggered to
        run prettier to format the code and eslint to analyze the code for
        possible errors.
      </div>
    </section>

    <section class="mb-16 bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">Export</h2>
      <p class="mt-4">
        As there is no vendor lock-in, if you already have a dashboard, you can
        just copy the small configuration from
        <span class="font-medium">tailwind.config.js</span> and paste it into
        your <span class="font-medium">tailwind.config.js</span> configuration
        file. then copy the <span class="font-medium">dashboard</span> folder
        into your project
      </p>
      <div class="mt-8">
        <ul class="mt-4 list-disc pl-6">
          <li class="mb-3">
            Add your routes and items in the
            <span class="px-1 font-medium"
              >dashboard/sidenavigation/Items.vue</span
            >
            file
          </li>
          <li class="mb-3">
            Replace your layout by the<span class="px-1 font-medium"
              >dashboard-layout</span
            >component
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-white px-3 py-8 shadow md:px-8">
      <h2 class="text-2xl font-medium">Customization</h2>
      <p class="mt-5">
        You can customize everything according to your preferences if it doesn't
        suit you. What we have done is just provide a solid structure for better
        scalability and readability of the code.
      </p>
      <p class="mt-5">
        The sidenav scrollbar is hidden by default but you can still scroll with
        the keyboards if you have several sidenav-items. If you are not a fan of
        this approach, you can always change its style in the
        <span class="font-medium">dashboard/sidenavigation/Index.vue</span> file
      </p>
      <p class="mt-5">
        In the <span class="font-medium"> dashboard/Layout.vue</span> file, the
        <span class="font-medium">side-navigation</span> component has as prop
        <span class="font-medium">mobile-position</span>, which indicates the
        positioning of the sidenav on mobile.
      </p>
      <p class="pt-5">This prop can have two possible values :</p>
      <ul class="mt-4 list-disc pl-6">
        <li class="mb-3">
          <strong>left :</strong> sidenav will be aligned to the left
        </li>
        <li><strong>right :</strong> sidenav will be aligned to the right</li>
      </ul>
    </section>
  </div>
</template>
