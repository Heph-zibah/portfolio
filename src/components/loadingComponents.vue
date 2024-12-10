<script setup>
  import VueElementLoading from "vue-element-loading";

  defineProps(['isLoading']);
</script>

<template>
  <VueElementLoading spinner="spinner" color="##0A0D14" :active="isLoading" :is-full-screen="true"/>
</template>

<style scoped>

</style>