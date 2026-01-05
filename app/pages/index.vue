<script setup>
import homepage from '~/components/homepage.vue';
import vehicles from './homepages/vehicles';
import discover from './homepages/discover.vue';
import PromoSection from '~/components/home/PromoSection.vue';

useHead({
  title: 'REEDAR - Car Rental Made Easy',
  meta: [
    { name: 'description', content: 'Find and rent the perfect car for your journey' }
  ]
})
</script>

<template>
  <div>
    <homepage />
    <vehicles />
    <discover />
    <PromoSection />
  </div>
</template>

