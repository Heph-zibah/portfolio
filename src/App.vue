<script setup>
import Home from './views/HomeView.vue';
import { useColorMode } from '@vueuse/core'
import { onBeforeMount, ref } from 'vue'
import Water from './components/water.vue';

const mode = useColorMode()

onBeforeMount(() => {
  mode.value = 'light'
})
</script>

<template>


<div>
    
    <router-view/>
    <!-- <Water/> -->
</div>
</template>

<style scoped>

</style>
