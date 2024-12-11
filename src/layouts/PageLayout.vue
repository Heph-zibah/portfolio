<script setup>
import Navbar from '../components/navbar.vue';
</script>

<template>
    <Navbar/>
    <main class="primary__text pt-5 md:pt-24  2xl:pt-40">
        <slot/>
    </main>
</template>