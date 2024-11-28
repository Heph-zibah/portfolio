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
    <header class=" px-5 md:px-14 py-10   w-full" >
        <nav class="flex items-center justify-between">
            <img src="/src/assets/cropped-logo.png" alt="" class="w-28" v-if="!isDark">
            <img src="/src/assets/black-logo.png" alt="" class="w-28" v-if="isDark">
            <ul class="md:flex  hidden gap-12 items-center border border-gray-400 rounded-full px-4 py-3 dark:text-[#868C98] dark:bg-white dark:bg-opacity-10">
                <li>Home</li>
                <li>About</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Blog</li>     
            </ul>
            <div class="flex items-center gap-5">
                <button @click="isToggle()"> <i :class="isDark ? 'fa-regular fa-lightbulb text-2xl p-2 dark:text-white' : 'fa-solid fa-lightbulb text-2xl p-2 dark:text-white'"></i></button>
                <i class="md:hidden" :class="isNavbar ? 'fa-solid fa-xmark text-2xl p-2 dark:text-white navbar' : 'fa-solid fa-bars text-2xl p-2 dark:text-white'" @click="isToggleNavbar"></i>
                <div class="rounded-full bg-white py-3.5 px-10 hidden md:block font-semibold" :class="isDark? 'border-0' : 'border border-black'">
                    <button>Hire me</button>
                </div>
            </div>
        </nav>
        <div class="w-full h-full fixed left-0 top-0  max-h-full bg-black dark:bg-white bg-opacity-40 dark:bg-opacity-70" v-if="isNavbar">
            <div class="w-[50%]">
                <div class="bg-black dark:bg-white h-screen dark:text-black text-xs pt-14 z-[1000]">
                    
                    <div class=" py-6 text-white space-y-3">
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer dark:text-black">
                            <i class="fa-solid fa-house-signal"></i>
                            <span>HOME</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer dark:text-black">
                            <i class="fa-regular fa-user"></i>
                            <span>ABOUT</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer dark:text-black">
                            <i class="fa-regular fa-id-card"></i>
                            <span>RESUME</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer dark:text-black">
                            <i class="fa-solid fa-business-time"></i>
                            <span>PORTFOLIO</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer dark:text-black">
                            <i class="fa-regular fa-envelope"></i>
                            <span>CONTACT</span>
                        </div>
                        <div class="flex items-center gap-5 px-5 py-2 hover:bg-gray-900 cursor-pointer dark:text-black">
                            <i class="fa-solid fa-file-signature"></i>
                            <span>BLOG</span>
                        </div>
                        
                    </div>
                    <div class="px-5 space-y-3">
                        <div class="flex items-center justify-between">
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="https://github.com/Heph-zibah">
                                <i class="fa-brands text-white dark:text-black fa-github"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white dark:text-black fa-medium"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white dark:text-black fa-x-twitter"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white dark:text-black fa-linkedin-in"></i>
                            </a>
                            <a class="p-1 hover:scale-125 transition-all duration-500" href="">
                                <i class="fa-brands text-white dark:text-black fa-facebook-f"></i>
                            </a>
                        </div>
                        <p class="text-xs text-white dark:text-black">2024 © oadaramola.All Right Reserved.</p>
                    </div>
            </div>
            </div>
        </div>
    </header>
</template>