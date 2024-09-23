<script setup>
import Navbar from '../components/navbar.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
</script>

<template>
    <Navbar/>
    <main class=" h-screen dark:text-white my-5">
       <section class="flex flex-col-reverse md:flex-row items-center ">

         <div class=" px-5 md:px-0 md:ml-14 max-w-[635px] my-5 md:my-0">
            <span class="text-sm md:text-base">Hey there, my name is</span>
            <h1 class="font-bold text-2xl md:text-5xl leading-[30px] md:leading-[60px]">OLUWATOSIN DARAMOLA</h1>
            <p class=" text-xl md:text-4xl">I am a <vue-typewriter-effect :strings="['Frontend Developer']" cursorClassName="text-white" /></p>
            <p class="text-sm md:text-lg">I'm a passionate frontend developer with experience in creating beautiful and functional web applications. I specialize in building responsive, accessible, and user-friendly interfaces using modern technologies like Vue.js, 
    Tailwind CSS, and JavaScript. My goal is to turn ideas into digital experiences that make a positive impact.</p>
         </div>
         <div>
            <img src="/src/assets/avatar.png" alt="" class="w10">
         </div>
       </section>
        <section class="flex items-center justify-between px-5 md:px-14 py-5 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10">
            <img src="../assets/HTML.png" alt="">
            <img src="../assets/CSS.png" alt="">
            <img src="../assets/Javascript.png" alt="">
            <img src="../assets/Tailwind.png" alt="" class="w-10">
            <img src="../assets/Vue.png" alt="">
        </section>
    </main>
</template>