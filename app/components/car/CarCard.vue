
<template>
  <NuxtLink :to="`/vehicles/${car.id}`" class="block ">
    <div class="bg-primary rounded-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div class="overflow-hidden relative rounded-md">
        <h2 class="absolute text-reeText-black bg-reeLGray rounded-xl w-auto h-auto px-4 mt-2 ml-2">{{ car.type }}</h2>
        <img
          :src="car.image || defaultImage"
          :alt="car.name || 'vehicle'"
          class="rounded-md object-cover w-full h-48"
        />
      </div>
      <div class="p-4 flex flex-col justify-start">
        <h2 class="font-bold mb-1">{{ car.name }}</h2>
        <UBadge
          :label="car.transmission"
          icon="mdi:car-shift-pattern"
          size="md"
          class="font-bold bg-transparent text-reeText-gray mb-2"
        />
        <div class="flex flex-row gap-3 mb-3">
          <UBadge
            :label="car.seats"
            icon="lucide:armchair"
            size="md"
            class="font-bold bg-transparent text-reeText-gray"
          />
          <UBadge
            :label="car.luggage"
            icon="lucide:luggage"
            size="md"
            class="font-bold bg-transparent text-reeText-gray"
          />
          <UBadge
            :label="car.rating"
            icon="lucide:star"
            size="md"
            class="font-bold bg-transparent text-reeText-gray"
          />
        </div>
        <div>
          <h2 class="text-md text-reeText-gray">Start from</h2>
          <p class="text-xl font-semibold">
            ${{ car.price }}
            <span class="text-sm text-reeText-gray">/day</span>
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Car } from '~/types/car'
import defaultImage from '~/assets/images/porsche-taycan-4s-6000x3374-23253.jpeg'
defineProps<{ car: Car }>()
</script>
  