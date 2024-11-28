<script setup>
import Home from './views/HomeView.vue';
import { useColorMode } from '@vueuse/core'
import { onBeforeMount, ref } from 'vue'

const mode = useColorMode()

onBeforeMount(() => {
  mode.value = 'light'
})
</script>

<template>


<div>
    <RouterView />
</div>
</template>

<style scoped>

</style>
