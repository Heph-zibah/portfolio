<script setup>
import { ref } from "vue";
import PageLayout from "../layouts/PageLayout.vue";

import { projectData } from "../stores/links";
</script>

<template>
    <page-layout>
        <section class="max-w-[1200px] mx-auto h-full  py-10 md:py-20 px-5">
            <h1>My projects</h1>
            <div class="flex flex-col gap-10"  v-for="project in projectData" :key="project.id">
                <div class="flex flex-col lg:flex-row justify-between gap-10">
                    <div>
                        <img :src="project.image" alt="">
                    </div>
                    <div>
                        <p> {{project.id < 10 ? `0${project.id}` : project.id}}</p>
                        <p>{{project.name}}</p>
                        <p>{{ project.description }}</p>
                        <div class="flex items-center gap-5 flex-wrap" >
                            <span v-for="(stack, index) in project.stacks" :key="index">{{stack}}</span>
                        </div>
                        <div class="flex items-center gap-5" >
                            <a :href="project.links.share"><i class="fa-regular fa-circle-right"></i></a>
                            <a class="p-2 hover:scale-125 transition-all duration-500 text-2xl text-[#7b2691] dark:text-[#be69d3]" :href="project.links.github">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </page-layout>
</template>