<script setup lang="ts">
import { openSidebar } from "./store";
</script>

<template>
  <header class="relative z-10 h-20 w-full items-center bg-[#25074D]">
    <div class="relative mx-auto flex h-full flex-col justify-center px-3">
      <div class="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
        <div class="relative left-0 flex w-3/4">
          <div class="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              class="text-4xl text-white focus:outline-none lg:hidden"
              @click="openSidebar"
            >
              &#8801;
            </button>
          </div>
        </div>
        <div
          class="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0"
        >
          <a href="#" class="block pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </a>
          <a href="#" class="block pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" class="relative block">
            <img
              alt="Enoch Ndika"
              src="/images/1.jpg"
              class="mx-auto h-10 w-10 rounded-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
