<script setup lang="ts">
const partners = [
  { name: 'HelloSign', icon: 'i-simple-icons-hellosign' },
  { name: 'DoorDash', icon: 'i-simple-icons-doordash' },
  { name: 'Coinbase', icon: 'i-simple-icons-coinbase' },
  { name: 'Airtable', icon: 'i-simple-icons-airtable' },
  { name: 'Pendo', icon: 'i-simple-icons-pendo' },
  { name: 'Treehouse', icon: 'i-simple-icons-treehouse' }
]
</script>

<template>
  <section class="py-20 bg-white font-armata">
    <UContainer>
      <!-- Partners -->
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <div v-for="partner in partners" :key="partner.name" class="flex items-center gap-2 text-xl font-bold text-gray-600 hover:text-black transition-colors cursor-pointer">
           <UIcon :name="partner.icon" class="w-6 h-6" />
           <span class="hidden md:inline">{{ partner.name }}</span>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        <!-- Left Column -->
        <div class="md:col-span-4 flex flex-col gap-6 h-full">
          <!-- Top Card -->
          <div class="relative flex-1 bg-black rounded-3xl overflow-hidden p-8 flex flex-col justify-center items-start text-white group cursor-pointer">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
            <div class="relative z-10 space-y-4">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                <UIcon name="i-heroicons-globe-alt" class="w-6 h-6" />
              </div>
              <h3 class="text-3xl font-bold leading-tight">Explore more to get your comfort zone</h3>
              <p class="text-gray-300">Book your perfect stay with us.</p>
              <UButton 
                color="neutral" 
                variant="solid" 
                label="Booking Now" 
                trailing-icon="i-heroicons-arrow-right" 
                class="mt-4 text-black" 
              />
            </div>
          </div>
          
          <!-- Bottom Card -->
          <div class="relative h-1/3 bg-black rounded-3xl overflow-hidden p-6 flex items-end text-white group cursor-pointer">
             <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ed5f6?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700"></div>
             <div class="relative z-10 w-full">
               <p class="text-gray-300 text-sm mb-1">Vehicle Available</p>
               <div class="flex items-baseline gap-1">
                 <p class="text-4xl font-bold">3,490</p>
               </div>
             </div>
          </div>
        </div>

        <!-- Right Column (Large Image) -->
        <div class="md:col-span-8 h-full">
          <div class="relative h-full bg-gray-100 rounded-3xl overflow-hidden group cursor-pointer">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-10 text-white max-w-xl">
              <h3 class="text-3xl md:text-5xl font-bold leading-tight mb-4">Beyond accommodation, creating memories of a lifetime</h3>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
