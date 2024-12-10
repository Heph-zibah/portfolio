<script setup>
import { experienceData } from '../../stores/links';
</script>

<template>
    <section class="md:shadow-lg md:p-6  md:rounded-lg md:global__border md:dark:bg-[#292929]">
        <h3 class="md:text-center font-bold text-2xl">My experience</h3>
        <p class="my-3">From real-time form validation to API integration and complex state management, I focus on creating efficient, responsive solutions. I ensure seamless user experiences across devices by leveraging modern web technologies. With a keen eye for scalability and maintainability, I tailor each project to meet user needs while optimizing performance.</p>
        <div class="flex flex-col gap-3 scroll-container">
            <div v-for="experience in experienceData" :key="experience.id" class="border-b border-b-[#E0E0E0] dark:border-b-[#3A3A3A] pb-3">
                <h5 class="text-xl font-semibold">{{ experience.name }}</h5>
                <p>{{experience.company}}</p>
                <span class="text-xs italic">{{experience.year}}</span>
            </div>
        </div>
    </section>
</template>