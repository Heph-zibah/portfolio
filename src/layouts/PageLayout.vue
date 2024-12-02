<script setup>
import Navbar from '../components/navbar.vue';
</script>

<template>
    <Navbar/>
    <main class="primary__text py-20 md:py-40">
        <slot/>
    </main>
</template>