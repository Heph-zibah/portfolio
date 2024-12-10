<script setup>
import { educationData } from '../../stores/links';
</script>

<template>
    <section class="md:shadow-lg md:p-6 md:rounded-lg md:global__border md:dark:bg-[#292929]">
        <h3 class="md:text-center font-bold text-2xl">Education</h3>
        <p class="my-3">I am a graduate from Obafemi Awolowo University, Ile-Ife, with a degree in Education and Language Arts. Additionally, I have completed courses in AI Career Essentials and other industry-relevant programs that have equipped me with a strong foundation in modern web development and problem-solving techniques.</p>
        <div class="flex flex-col gap-3 scroll-container">
            <div class="border-b border-b-[#E0E0E0] dark:border-b-[#3A3A3A] pb-3" v-for="education in educationData" :key="education.id">
                <h5 class="text-xl font-semibold">{{education.name}}</h5>
                <p>{{education.school}}</p>
                <p class="text-xs italic">{{education.year}}</p>
                <p>{{education.description}}</p>
            </div>
           
        </div>
    </section>
</template>