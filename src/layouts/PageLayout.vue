<script setup>
import Navbar from '../components/navbar.vue';
</script>

<template>
    <Navbar/>
    <main class="primary__text pt-20 md:pt-24 xl:pt-28 2xl:pt-40">
        <slot/>
    </main>
</template>