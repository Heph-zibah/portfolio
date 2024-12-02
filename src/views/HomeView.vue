<script setup>
import PageLayout from "../layouts/PageLayout.vue";
import VueTypewriterEffect from "vue-typewriter-effect";
// import MobileNavbar from '../components/mobileNavbar.vue';
</script>

<template>
    <page-layout>
        <section class="max-w-[1200px] mx-auto h-full text-center py-10 md:py-20 md:shadow-xl md:rounded-2xl px-5 text-[#A7A59C] dark:text-[ #D4D4D4] global__border">

         <div class="flex flex-col gap-3 ">
            <span class=" text-lg ">Hey there, my name is</span>
            <h1 class="dark:text-[#FFFFFF] text-5xl md:text-7xl primary__text font-semibold">OLUWATOSIN DARAMOLA</h1>
            <p class=" text-3xl primary__text">I am a <vue-typewriter-effect :strings="['Vue.JS Frontend Developer']" cursorClassName="text-white" /></p>
            <p class="max-w-4xl mx-auto text-[#353431] dark:text-[#cecbc8] md:text-lg">I'm a passionate frontend developer with experience in creating beautiful and functional web applications. I specialize in building responsive, accessible, and user-friendly interfaces using modern technologies like Vue.js, 
    Tailwind CSS, and JavaScript. My goal is to turn ideas into digital experiences that make a positive impact.</p>
         </div>

         <div class="flex flex-col md:flex-row gap-10 md:gap-20 max-w-[760px] mx-auto mt-10">
            
            <a class="rounded-full bg-[#FFD7A8] dark:bg-[#FF7A59] text-[#3E3A33] dark:text-[#1E1E1E] hover:bg-[#F4A7A3] dark:hover:bg-[#FF5722] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF] py-2.5 md:py-3.5 px-5 text-nowrap md:px-10  font-semibold" href="../assets/oluwatosin_daramola_cv.pdf" download="" >Download CV</a>
            <div class="flex items-center justify-between gap-10">
                <a class="px-3 py-2 hover:scale-125 transition-all duration-500 rounded-md text-xl text-white dark:text-black bg-black dark:bg-white " href="https://github.com/Heph-zibah">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a class="px-3 py-2 hover:scale-125 transition-all duration-500 rounded-md text-xl text-white bg-blue-700 " href="https://www.linkedin.com/in/oadaramola/">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a class="px-3 py-2 hover:scale-125 transition-all duration-500 rounded-md text-xl text-white dark:text-black bg-black dark:bg-white "  href="https://medium.com/@oadaramola">
                    <i class="fa-brands  fa-medium"></i>
                </a>
                <a class="px-3 py-2 hover:scale-125 transition-all duration-500 rounded-md text-xl text-white  bg-blue-700" href="https://www.facebook.com/share/jc5bvtvhbkEgCFf6/?mibextid=qi2Omg">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a class="px-3 py-2 hover:scale-125 transition-all duration-500 rounded-md text-xl text-white dark:text-black bg-black dark:bg-white" href="https://twitter.com/oadaramola10">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                
                
            </div>
           
        </div> 
         <!-- <div>
            <img src="/src/assets/avatar.png" alt="" class="w10">
         </div> -->
       </section>
       <!-- <section class="flex items-center justify-between px-5 md:px-14 py-5 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10">
            <img src="../assets/HTML.png" alt="">
            <img src="../assets/CSS.png" alt="">
            <img src="../assets/Javascript.png" alt="">
            <img src="../assets/Tailwind.png" alt="" class="w-10">
            <img src="../assets/Vue.png" alt="">
        </section> -->
    </page-layout>
</template>