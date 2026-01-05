<template>
  <UCarousel class="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
    <article class="promotion-card flex flex-col md:flex-row items-stretch w-full">
      <!-- Image / visual -->
      <figure class="md:w-1/2 w-full relative">
        <img
          :src="promo.image"
          :alt="promo.title"
          class="w-full h-64 md:h-full object-cover"
        />
      </figure>

      <!-- Content -->
      <div class="md:w-1/2 w-full bg-gradient-to-b from-black/40 via-black/25 to-black/40 text-white p-4 flex flex-col justify-between">
        <header class="flex justify-between items-start">
          <div class="flex items-center gap-3">
            <UIcon name="lucide:badge-percent" size="40" class="text-yellow-300" />
            <div>
              <h3 class="font-bold text-xl">{{ promo.title }}</h3>
              <p class="text-xs text-reeText-white/90 bg-reeBlack/50 inline-block py-1 px-3 rounded-2xl mt-1">
                Valid: {{ promo.validFrom }} — {{ promo.validTo }}
              </p>
            </div>
          </div>

          <div class="text-right">
            <p class="text-4xl md:text-6xl font-extrabold leading-none">{{ promo.discountPercent }}%</p>
            <p class="text-sm uppercase">OFF</p>
          </div>
        </header>

        <div class="mt-4 flex-1">
          <p class="font-semibold text-lg mb-3">{{ promo.description }}</p>
          <p class="text-sm opacity-90">Terms: {{ promo.terms }}</p>
        </div>

        <footer class="mt-4 flex justify-end">
          <button class="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md">Redeem</button>
        </footer>
      </div>
    </article>
  </UCarousel>
</template>

  <script setup lang="ts">
  import type { PromotionItem } from '~/types/promotion'
  defineProps<{ promo: PromotionItem }>()
  </script>
