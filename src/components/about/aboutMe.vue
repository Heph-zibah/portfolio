<script setup>
import { aboutData } from '../../stores/links';


</script>

<template>
   <section class="md:shadow-lg md:p-6 md:rounded-lg md:global__border md:dark:bg-[#292929]">
        <h3 class="md:text-center font-bold text-2xl">About me</h3>
        <p class="my-3">"I am a passionate Frontend Developer with hands-on experience in building dynamic, responsive, and user-centric applications using Vue.js and modern JavaScript frameworks. I specialize in developing complex features such as multi-step forms, real-time validation, and seamless API integrations to enhance user experience and interactivity.</p>
        <div class="scroll-container">
            
            <div v-for="about in aboutData" :key="about.name" class="flex items-center gap-3 border-b border-b-[#E0E0E0] dark:border-b-[#3A3A3A] pt-8 pb-1">
                <span>{{about.label}}:</span>
                <span class="font-semibold ">{{about.name}}</span>
            </div>
        </div>
   </section>
</template>
<style scoped>

@media  screen and (min-width:600px) {
  .scroll-container {
  max-height: 10rem; /* Limit the height */
  overflow-y: auto; /* Add vertical scrolling */
  padding: 0.5rem; /* Add some spacing */
  scrollbar-width: thin; /* Firefox: Makes the scrollbar thin */
  scrollbar-color:  #1E1E1E #FAF9F6; /* Firefox: Colors scrollbar */
  border-radius: 10px;
}
/* bg-[#FAF9F6] dark:bg-[#1E1E1E] */
/* For WebKit Browsers (Chrome, Safari, Edge) */
.scroll-container::-webkit-scrollbar {
  width: 8px; /* Width of the scrollbar */
}

.scroll-container::-webkit-scrollbar-track {
  background: #f0f0f0; /* Scrollbar track color */
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #4caf50; /* Scrollbar thumb color */
  border-radius: 10px; /* Rounded scrollbar thumb */
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: #45a045; /* Darker color on hover */
}
}

</style>