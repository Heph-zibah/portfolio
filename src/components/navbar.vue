<script setup>
import {useDark, useToggle} from '@vueuse/core'
import {ref, onMounted} from 'vue'

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
    <header class="  px-5 py-6 border-b border-blue-200 absolute w-full" >
        <nav class="flex items-center justify-between">
            <h1 class="text-3xl font-logo dark:text-white">oadaramola
            </h1>
            <div class="flex items-center gap-5">
                <button @click="isToggle()"> <i :class="isDark ? 'fa-regular fa-lightbulb text-2xl p-2 dark:text-white' : 'fa-solid fa-lightbulb text-2xl p-2 dark:text-white'"></i></button>
                <i :class="isNavbar ? 'fa-solid fa-xmark text-2xl p-2 dark:text-white navbar' : 'fa-solid fa-bars text-2xl p-2 dark:text-white'" @click="isToggleNavbar"></i>
                
            </div>
        </nav>
        <div class=" w-[60%] h-full absolute left-0 top-0  " v-if="isNavbar">
            <div class="bg-black dark:bg-white dark:bg-opacity-50 bg-opacity-50 h-screen">
                    <div>
                        <img src="../assets/avatar-cropped.jpg" alt="" class="h-full w--full">
                    </div>
                    <div class=" py-6 text-white space-y-3">
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer">
                            <i class="fa-solid fa-house-signal"></i>
                            <span>HOME</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer">
                            <i class="fa-regular fa-user"></i>
                            <span>ABOUT</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer">
                            <i class="fa-regular fa-id-card"></i>
                            <span>RESUME</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer">
                            <i class="fa-solid fa-business-time"></i>
                            <span>PORTFOLIO</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer">
                            <i class="fa-regular fa-envelope"></i>
                            <span>CONTACT</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer">
                            <i class="fa-solid fa-file-signature"></i>
                            <span>BLOG</span>
                        </div>
                        
                    </div>
                    <div class="px-5 space-y-3">
                        <div class="flex items-center justify-between">
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="https://github.com/Heph-zibah">
                                <i class="fa-brands text-white fa-github"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white fa-medium"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white fa-x-twitter"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white fa-linkedin-in"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white fa-facebook-f"></i>
                            </a>
                        </div>
                        <p class="text-xs text-white">2024 © oadaramola.All Right Reserved.</p>
                    </div>
            </div>
        </div>
    </header>
</template>