<script setup>
import Navbar from '../components/navbar.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
</script>

<template>
    <Navbar/>
    <main class="flex flex-col gap-5 items-center justify-center   h-screen">
        <h1 class="font-bold text-7xl  text-center mx-auto leading-[80px]">OLUWATOSIN DARAMOLA</h1>
        <p class="text-2xl">I am a <vue-typewriter-effect :strings="['Frontend Developer']" cursorClassName="text-white" /></p>
        
    </main>
</template>