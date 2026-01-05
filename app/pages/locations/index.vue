<script setup lang="ts">
useHead({
  title: 'Locations - REEDAR',
  meta: [
    { name: 'description', content: 'Find REEDAR rental locations near you' }
  ]
})
</script>

<template>
  <div class="locations-page">
    <UContainer class="py-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Our Locations</h1>
         <p class="text-lg text-gray-600">Find a REEDAR location near you</p>
      </div>
      
      <div class="locations-content">
        <!-- Location content will be added here -->
        <p class="text-center text-gray-500">Locations coming soon...</p>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.locations-page {
  min-height: 100vh;
  padding-top: 80px;
}
</style>
