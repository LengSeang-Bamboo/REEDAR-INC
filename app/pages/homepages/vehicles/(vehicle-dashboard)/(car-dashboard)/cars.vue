<script setup lang="ts">


import { cars } from "~/data/cars";

</script>
<template> 
    <UDashboardPanel class="font-armata bg-primary">
        <template #header>
            <div class="mx-4 mt-4">
                <h2 class="text-2xl font-bold ">Top pick up vehicles this month</h2>
                <p class="text-md ">Experience the epitome of amazing journey with our top picks.</p>
            </div>
        </template>
        <template #body>
            <div class="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <CarCard v-for="car in cars" :key="car.id" :car="car" class="h-full w-auto"/>    
            </div>
        </template>
        <template #footer>  
            <div class="flex justify-center items-center">
                <UButton
                    variant="outline"
                    color="secondary"
                    label="See More"
                    size="md"
                />
            </div>
        </template>
    </UDashboardPanel>
</template>