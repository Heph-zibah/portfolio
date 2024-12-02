<script setup>
import {useDark, useToggle} from '@vueuse/core'
import {ref, onMounted} from 'vue'
import MobileNavbar from '../components/mobileNavbar.vue';
import { useRoute } from 'vue-router'
import { navLinks } from '../stores/links';
const route = useRoute()

const isDark = useDark();
const isToggle = useToggle(isDark);
const isNavbar = ref(false)

const isToggleNavbar = () => {
    isNavbar.value = !isNavbar.value
}

const handleClickOutside = (event) => {
  const isClickInsideDropdown = event.target.closest('.navbar') !== null;

  if (!isClickInsideDropdown) {
    isNavbar.value = false;
  }
};


onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
</script>

<template>
    <header class=" px-5 lg:px-14 py-2 w-full absolute top-0 " >
        <nav class="flex items-center justify-between max-w-[1200px] mx-auto">
            <router-link to="/">
                <img src="/src/assets/cropped-logo.png" alt="" class="w-28 lg:w-48" v-if="!isDark">
                <img src="/src/assets/black-logo.png" alt="" class="w-28 lg:w-48" v-if="isDark">
            </router-link>
            <ul class="md:flex  hidden gap-6 lg:gap-12 items-center global__border rounded-full px-2 lg:px-4 py-3 text-[#8C8779] dark:text-[#A6A6A6] text-sm" >
                <li v-for="(link) in navLinks" :key="link.name">
                    <router-link
                        class="font-bold nav__hover cursor-pointer "
                        :to="link.route"
                        :class="{ 'text-[#3E3A33] dark:text-[#FFFFFF] ': route.name === link.route?.name }">
                        {{ link.name }}
                    </router-link>
                </li>
                <li><a href="https://medium.com/@oadaramola" class="font-bold nav__hover cursor-pointer text-[#8C8779] dark:text-[#A6A6A6]">BLOG</a></li>
            </ul>
            <div class="flex items-center gap-3 lg:gap-5">
                <button @click="isToggle()" > <i class="nav__hover text-xl " :class="isDark ? 'fa-regular fa-lightbulb p-2 dark:text-[#FFFFFF]' : 'fa-regular fa-moon p-2 '"></i></button>
                <router-link :to="{name: 'contact'}"  class="rounded-full bg-[#FFD7A8] dark:bg-[#FF7A59] text-[#3E3A33] dark:text-[#1E1E1E] hover:bg-[#F4A7A3] dark:hover:bg-[#FF5722] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] py-2 lg:py-3 px-5 text-nowrap md:px-10  font-semibold" :class="isDark? 'border border-[#3A3A3A]' : 'border border-[#E0E0E0]'">
                    Hire me
                </router-link>
                <i class="md:hidden text-2xl" :class="isNavbar ? 'fa-solid fa-xmark p-2 dark:text-[#FFFFFF] navbar' : 'fa-solid fa-bars p-2 dark:text-[#FFFFFF]'" @click="isToggleNavbar"></i>
            </div>
        </nav>
    </header>
    <MobileNavbar v-if="isNavbar" />
</template>