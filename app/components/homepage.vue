<script setup lang="ts">
import bgimg from "~/assets/images/porsche-taycan-4s-6000x3374-23253.jpeg"
import RentalForm from "./form/RentalForm.vue";

</script>
<template>
    <div    
        class="w-full h-screen bg-white bg-cover bg-center flex flex-col justify-end items-center font-armata"
        :style="{backgroundImage: `url(${bgimg})`}" 
    >
        <RentalForm/>
    </div>
    
</template>         