<script setup>
import { ref } from 'vue';
// import { aboutData } from '../../stores/links';

 const aboutData = ref([
  {
    label: "Name",
    name: "Oluwatosin Abigail Daramola",
  },
  {
    label: "Phone",
    name: "(+234) 813 730 2432",
  },
  {
    label: "Experience",
    name: "2 + years",
  },
  {
    label: "Nationality",
    name: "Nigerian",
  },
  {
    label: "Email",
    name: "oluwatosindaramola07@gmail.com",
  },
  {
    label: "Freelance",
    name: "Available",
  },
]);
</script>

<template>
   <section class="md:shadow-lg md:p-6 md:rounded-lg md:global__border md:dark:bg-[#292929]">
        <h3 class="md:text-center font-bold text-2xl">About me</h3>
        <p class="my-3">I am a Frontend Developer with hands-on experience building dynamic, responsive, and user-focused applications using Vue.js and modern JavaScript frameworks. My projects include creating multi-step forms, implementing real-time validation, and integrating APIs for seamless interactivity.
        I thrive on solving problems, collaborating with teams, and delivering high-quality results tailored to clients' needs.</p>
        <div class="scroll-container">
            
            <div v-for="about in aboutData" :key="about.name" class="flex items-center gap-3 border-b border-b-[#E0E0E0] dark:border-b-[#3A3A3A] pt-8 pb-1">
                <span>{{about.label}}:</span>
                <span class="font-semibold ">{{about.name}}</span>
            </div>
        </div>
   </section>
</template>
<style scoped>
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
</style>