<script setup>
import { ref } from "vue";
import PageLayout from "../layouts/PageLayout.vue";

import { projectData } from "../stores/links";
</script>

<template>
    <page-layout>
        <section class="max-w-[1200px] mx-auto h-full  py-10 md:pt-0 px-5 md:pb-16">
            <h1 class="text-center font-bold text-3xl mb-6">My projects</h1>
           <div class="flex flex-col gap-10">
             <div  v-for="project in projectData" :key="project.id">
                <div class="flex flex-col lg:flex-row justify-between gap-10 global__border rounded-lg">
                    <div class="border-b border-b-[#E0E0E0] dark:border-b-[#3A3A3A] lg:border-b-0 lg:border-r lg:border-r-[#E0E0E0] lg:dark:border-r-[#3A3A3A] p-4  lg:w-1/2 ">
                        <img :src="project.image" alt="" class="rounded-3xl h-full object-center">
                    </div>
                    <div class="p-4 lg:w-1/2">
                        <div class=" border-b border-b-[#E0E0E0] dark:border-b-[#3A3A3A] pb-3 font-bold text-xl md:text-3xl space-y-2">
                            <p> {{project.id < 10 ? `0${project.id}` : project.id}}</p>
                            <p>{{project.name}}</p>
                       </div>
                        <p class="py-3">{{ project.description }}</p>
                        <div class="flex items-center gap-x-5 gap-y-3 flex-wrap " >
                            <span class="border-x border-x-[#E0E0E0] dark:border-x-[#3A3A3A] rounded p-1" v-for="(stack, index) in project.stacks" :key="index">{{stack}}</span>
                        </div>
                        <div class="flex items-center gap-5 pt-3 " >
                            <a class="p-2 hover:scale-125 transition-all duration-500 text-2xl text-[#266191] dark:text-[#be69d3]"  :href="project.links.share"><i class="fa-regular fa-circle-right"></i></a>
                            <a class="p-2 hover:scale-125 transition-all duration-500 text-2xl text-[#7b2691] dark:text-[#be69d3]" :href="project.links.github">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </section>
    </page-layout>
</template>