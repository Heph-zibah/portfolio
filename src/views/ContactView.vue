<script setup>
import { ref } from "vue";
import PageLayout from "../layouts/PageLayout.vue";
import {contactData} from "../stores/links"


</script>

<template>
    <page-layout>
        <section class="max-w-[1200px] mx-auto h-full py-10 md:py-0 px-5">
           <div class="flex flex-col md:flex-row items-center justify-between gap-y-8">
                <div  class="flex flex-col gap-3">
                    <div v-for="contact in contactData" :key="contact.label" class="flex items-center gap-3 ">
                        <i :class="contact.icon" class="font-extrabold"></i>
                        <div class="flex flex-col gap-1">
                            <span class="font-medium text-[#8b867e]">{{contact.label}}</span>
                            <span class="primary__text font-semibold">{{contact.value}}</span>
                        </div>
                    </div>
                </div>
                <form action="" class="p-5 bg-[#ffff] dark:bg-[#292929]  rounded-lg shadow-lg drop-shadow-lg space-y-5 global__border">
                    <h4 class="font-semibold text-3xl">Let's work together</h4>
                  
                    <div class="grid grid-cols-2 items-center gap-3 w-fit">
                        <input type="text" placeholder="First name" class="input__class" >
                        <input type="text" placeholder="Last name" class="input__class">
                    </div>
                    <div class="flex flex-col gap-5">
                        <input type="text" placeholder="Email" class="input__class">
                        <input type="text" placeholder="Phone number" class="input__class">
                        <textarea name="" id="" cols="10" rows="5" placeholder="Please type your message here" class="input__class"></textarea>
                    </div>
                    <button  class="global__button" :class="isDark? 'border border-[#3A3A3A]' : 'border border-[#E0E0E0]'">
                        Send message
                    </button>
                   
                    
                </form>
           </div>
        
       </section>
       
    </page-layout>
</template>