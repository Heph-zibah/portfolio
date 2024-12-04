<script setup>
import { ref } from "vue";
import PageLayout from "../layouts/PageLayout.vue";
import Experience from "../components/about/experience.vue";
import Skills from "../components/about/skills.vue";
import Education from "../components/about/education.vue";
import AboutMe from "../components/about/aboutMe.vue";


const tabs = [
  { name: "Experience", component: Experience },
  { name: "Education", component: Education },
  { name: "Skills", component: Skills },
  { name: "About me", component: AboutMe },
];
const activeTab = ref(tabs[0].name);
</script>

<template>
    <page-layout>
        <section class="max-w-[1200px] mx-auto h-full px-5 py-10 md:py-0 md:pb-10">
            <h1 class="  text-3xl  primary__text font-semibold tracking-tight ">Why hire me?</h1>
            <p class="md:shadow-lg md:drop-shadow-sm md:global__border md:rounded-lg md:p-3 my-5">
                I’m a Frontend Developer specializing in Vue.js, with a passion for crafting clean, responsive, and user-friendly interfaces. My skills in problem-solving and efficient coding ensure I deliver high-quality results that align with your vision.
                With a strong work ethic and a commitment to meeting deadlines, I bring creativity and collaboration to every project. Let’s create something amazing together!
            </p>
        <div class="flex flex-col lg:flex-row gap-5 mt-10 ">
            <ul class=" grid grid-cols-2 gap-2 md:flex md:flex-col w-full lg:w-1/4 global__border p-2 md:p-0 rounded-lg md:rounded-none md:border-0">
                <li @click="activeTab = tab.name" v-for="tab in tabs" :key="tab.name" class="text-center global__border rounded-lg p-3 cursor-pointer"  :class="{ 'bg-[#3E3A33] dark:bg-[#EDEDED] text-[#EDEDED] dark:text-[#3E3A33] font-bold ': activeTab === tab.name }">
                        {{ tab.name }}
                </li>
            </ul>
            <div class="w-full lg:w-3/4 mt-10 lg:mt-0">
                <component :is="tabs.find(tab => tab.name === activeTab).component"/>
            </div>
        </div>
        
       </section>
       
    </page-layout>
</template>