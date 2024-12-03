<script setup>
import { ref } from "vue";
import PageLayout from "../layouts/PageLayout.vue";

</script>

<template>
    <page-layout>
        <section class="max-w-[1200px] mx-auto h-full  py-10 md:py-20">
           <div class="flex flex-col md:flex-row">
                <div>
                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-phone-volume"></i>
                        <div class="flex flex-col gap-1">
                            <span>Phone</span>
                            <span>(+234) 813 730 2432</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <i class="fa-regular fa-envelope"></i>
                        <div class="flex flex-col gap-1">
                            <span>Email</span>
                            <span>oluwatosindaramola07@gmail.com</span>
                        </div>
                    </div >
                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-location-dot"></i>
                        <div class="flex flex-col gap-1">
                            <span>Location</span>
                            <span>Remote</span>
                        </div>
                    </div>
                </div>
                <form action="">
                    <h4>Let's work together</h4>
                    <div class="flex items-center">
                        <input type="text" placeholder="First name">
                        <input type="text" placeholder="Last name">
                    </div>
                    <div class="flex flex-col">
                        <input type="text" placeholder="Email">
                    <input type="text" placeholder="Phone number">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Please type your message here"></textarea>
                    </div>
                </form>
           </div>
        
       </section>
       
    </page-layout>
</template>