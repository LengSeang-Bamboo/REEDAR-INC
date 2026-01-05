<template>
  <section class="font-armata mx-4">
    <h2 class="text-2xl font-bold">Discover popular rental car in Cambodia</h2>
    <p>Explore a diverse and extensive range of rental cars.</p>
    <div
      class="" 
    >
      <UButton 
        v-for="car in cars"
        :key="car.id"
        color="secondary"
        variant = 'outline'
        size="md"
      >   
        Cars in {{ car.location }}
      </UButton>
    </div>
  </section>
    
  <section>
    <div class="flex flex-row justify-between mx-4 my-2">
      <h2 class="text-2xl font-bold">Enjoy extra miles with out best deals.</h2>
      <UButton
          variant="outline"
          color="secondary"
          label="See More"
          size="md"
      />
    </div>
    <div class="flex overflow-x-auto gap-4 px-4 py-2 scrollbar-none">
      <PromotionCard
        v-for="promo in promotions"
        :key="promo.id"
        :promo="promo"
      />
    </div>  
    <div>
      <div>
        
      </div>
    </div>
      

  </section>
  
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { cars } from '~/data/cars'
import PromotionCard from '~/components/promotion/PromotionCard.vue';
import { promotions } from '~/data/promotions';
</script> 