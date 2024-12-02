<script setup>

import {ref} from 'vue'
import { navLinks } from '../stores/links';
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
  <div class="md:hidden mt-20 py-5 transition__out opacity-100 max-h-[700px] shadow-lg  overflow-hidden w-full block mx-auto primary__text">
    <ul >
      <li v-for="(link) in navLinks" :key="link.name">
          <router-link
          :to="link.route"
          :class="{ 'bg-[#3E3A33] dark:bg-[#EDEDED] text-[#EDEDED] dark:text-[#3E3A33] font-bold rounded-2xl mx-5': route.name === link.route?.name }"
          class="center__vertical gap-5 px-5 mx-5 py-2 transition__out nav__hover cursor-pointer font-semibold text-[#8C8779] dark:text-[#A6A6A6]">
          <i :class="link.icon"></i>
          <span>{{ link.name }}</span>
        </router-link>
      </li>
      <li>
        <a href="https://medium.com/@oadaramola" class="font-semibold nav__hover cursor-pointer center__vertical gap-5 px-5 py-2 transition__out mx-5 text-[#8C8779] dark:text-[#A6A6A6]">
          <i class="fa-solid fa-file-signature"></i>BLOG
        </a>
      </li>
    </ul>
    
      <div class="px-5 text-center mt-5 ">
          <p class="text-xs ">2024 © oadaramola.All Right Reserved.</p>
      </div> 
  </div>
</template>