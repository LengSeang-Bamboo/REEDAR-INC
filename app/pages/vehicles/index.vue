<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { cars } from '~/data/cars'
import { useHead } from '#app'

useHead({
  title: 'Vehicles - REEDAR',
  meta: [
    { name: 'description', content: 'Browse our collection of rental vehicles' }
  ]
})

const route = useRoute()

const query = computed(() => {
  const q = route.query
  return {
    search: typeof q.search === 'string' ? q.search.trim() : '',
    departure: q.departure ? Number(q.departure) : undefined,
    return: q.return ? Number(q.return) : undefined,
    pickup: typeof q.pickup === 'string' ? q.pickup : undefined,
    returnDate: typeof q.returnDate === 'string' ? q.returnDate : undefined,
    roundtrip: q.roundtrip === '1' || q.roundtrip === 'true'
  }
})

const filteredCars = computed(() => {
  const s = query.value.search?.toLowerCase() || ''
  return cars.filter(c => {
    if (s) {
      const hay = `${c.name} ${c.type} ${c.location} ${c.destination}`.toLowerCase()
      if (!hay.includes(s)) return false
    }
    if (query.value.departure && c.location) {
      // compare by id or name: locations are ids in query; cars use location name
      // we allow filtering by location id by mapping to locations list elsewhere; for now match by id numeric -> find in locations data would be better
    }
    // driver filter, availability, date overlap -- skipped for static dataset
    return true
  })
})
</script>

<template>
  <div class="vehicles-page">
    <UContainer class="py-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Our Vehicle Fleet</h1>
        <p class="text-lg text-gray-600">Choose from our wide selection of quality rental cars</p>
      </div>

      <div class="vehicles-list">
        <div v-if="filteredCars.length === 0" class="text-center text-gray-500">No vehicles match your search.</div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.vehicles-page {
  min-height: 100vh;
}
</style>