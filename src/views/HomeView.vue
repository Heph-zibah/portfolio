<script setup>
import PageLayout from "../layouts/PageLayout.vue";
import VueTypewriterEffect from "vue-typewriter-effect";
 import LoadingComponents from "../components/loadingComponents.vue";
</script>

<template>
    <loading-components :is-loading="isLoading" />
    <page-layout>
        <section class=" md:max-w-[769px] lg:max-w-[1200px] mx-auto h-full text-center py-10 md:py-16 2xl:py-20 md:shadow-lg md:rounded-2xl px-5 text-[#A7A59C] dark:text-[ #D4D4D4] global__border">

         <div class="flex flex-col gap-3 ">
            <span class=" text-lg ">Hey there, my name is</span>
            <h1 class="dark:text-[#FFFFFF]  md:text-5xl 2xl:text-7xl primary__text text-4xl font-extrabold tracking-tight lg:text-5xl">OLUWATOSIN DARAMOLA</h1>
            <h2 class=" text-3xl primary__text  font-semibold tracking-tight">I am a <vue-typewriter-effect :strings="['Vue.js Frontend Developer']" cursorClassName="text-white" /></h2>
            <p class="max-w-3xl mx-auto text-[#353431] dark:text-[#cecbc8] md:text-lg">I'm a passionate frontend developer with experience in creating beautiful and functional web applications. I specialize in building responsive, accessible, and user-friendly interfaces using modern technologies like Vue.js, 
    Tailwind CSS, and JavaScript. My goal is to turn ideas into digital experiences that make a positive impact.</p>
         </div>

         <div class="flex flex-col  md:flex-row gap-10 md:gap-20 max-w-[760px] mx-auto mt-10">
            
            <a class="global__button" href="/oluwatosin_daramola_cv.pdf" download="" >Download CV</a>
            <div class="flex flex-wrap items-center justify-between gap-5 md:gap-10">
                <a class="p-2 hover:scale-125 transition-all duration-500 text-2xl text-[#7b2691] dark:text-[#be69d3]" href="https://github.com/Heph-zibah">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a class="p-2 hover:scale-125 transition-all duration-500 text-2xl text-[#2d2691] dark:text-[#766ee0e8]" href="https://www.linkedin.com/in/oadaramola/">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a class="p-2 hover:scale-125 transition-all duration-500 text-xl text-[#56ac71] "  href="https://medium.com/@oadaramola">
                    <i class="fa-brands  fa-medium"></i>
                </a>
                <a class="p-2 hover:scale-125 transition-all duration-500 text-xl text-[#bbb623]" href="https://www.facebook.com/share/jc5bvtvhbkEgCFf6/?mibextid=qi2Omg">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a class="p-2 hover:scale-125 transition-all duration-500 text-xl text-[#af4479]" href="https://twitter.com/oadaramola10">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a class="p-2 hover:scale-125 transition-all duration-500 text-xl text-[#af4479]" href="mailto:oluwatosindaramola07@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>
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