<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo, useRoute } from '#app'
import Logo from './logo.vue'
import HomeNav from '~/components/navigation/HomeNav.vue'
import VehiclesNav from '~/components/navigation/VehiclesNav.vue'
import LocationsNav from '~/components/navigation/LocationsNav.vue'
import ServicesNav from '~/components/navigation/ServicesNav.vue'
import EnterprisesNav from '~/components/navigation/EnterprisesNav.vue'
import ReeHelpNav from '~/components/navigation/ReeHelpNav.vue'

const route = useRoute()
const query = ref('')

const searchCars = () => {
  if (query.value.trim()) navigateTo(`/vehicles?search=${query.value}`)
}

const isActiveRoute = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <div class="fixed top-0 left-0 min-w-full z-50 font-armata bg-reeGray-500/40 backdrop-blur-md border-b border-reeGray-400">
    <UContainer
      class="flex items-center justify-between py-3 !bg-transparent"
    > 
      <section class="flex flex-row items-center gap-8">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
         
        <nav class="flex items-center gap-6 text-reePrimary">
          <HomeNav :isActive="isActiveRoute('/')" />
          <VehiclesNav :isActive="isActiveRoute('/vehicles')" />
          <LocationsNav :isActive="isActiveRoute('/locations')" />
          <ServicesNav :isActive="isActiveRoute('/services')" />
          <EnterprisesNav :isActive="isActiveRoute('/enterprises')" />
          <ReeHelpNav :isActive="isActiveRoute('/ree-help')" />
        </nav>
      </section>
      
      <!-- Search + btn -->
      <section>
        <div class="flex items-center gap-4 justify-between">
          <UInput
            v-model="query"
            placeholder="Search cars..."
            icon="i-heroicons-magnifying-glass"
            size="md"
            variant="ghost"
            color="primary"   
            @keyup.enter="searchCars"
            class="border border-reeLight rounded-md"
          />
          <div class="flex flex-row gap-5">
            <UButton 
              label="Login"
              color="primary" 
              variant="outline"
              @click="navigateTo('/login')"
            />
            <UButton 
              label="Sign Up"
              color="secondary" 
              variant="solid"
              @click="navigateTo('/signup')"
            />
          </div>    
        </div>
      </section>
    </UContainer>
  </div>
</template>



