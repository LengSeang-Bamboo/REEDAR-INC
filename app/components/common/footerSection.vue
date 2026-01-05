<script setup lang="ts">
import Logo from './logo.vue'

const links = [
  {
    title: 'About',
    items: [
      { label: 'About Us', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Career', to: '/career' }
    ]
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Return', to: '/return' },
      { label: 'FAQ', to: '/faq' }
    ]
  }
]

const email = ref('')

const socialLinks = [
  { icon: 'i-simple-icons-instagram', to: '#' },
  { icon: 'i-simple-icons-x', to: '#' },
  { icon: 'i-simple-icons-facebook', to: '#' },
  { icon: 'i-simple-icons-discord', to: '#' },
  { icon: 'i-simple-icons-tiktok', to: '#' }
]
</script>

<template>
  <footer class="bg-reeBlack text-white pt-16 pb-8 font-armata">
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <!-- Brand Section -->
        <div class="lg:col-span-4 space-y-6">
          <div class="flex items-center gap-2">
            <Logo class="brightness-0 invert" />
            <span class="text-2xl font-bold">REEDAR</span>
          </div>
          <p class="text-gray-400 leading-relaxed max-w-sm">
            Our mission is to equip modern explorers with cutting-edge, functional, and stylish cars that elevate every adventure.
          </p>
        </div>

        <!-- Links Sections -->
        <div class="lg:col-span-4 grid grid-cols-2 gap-8">
          <div v-for="group in links" :key="group.title">
            <h3 class="font-bold text-lg mb-6">{{ group.title }}</h3>
            <ul class="space-y-4">
              <li v-for="link in group.items" :key="link.label">
                <NuxtLink 
                  :to="link.to" 
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="lg:col-span-4 space-y-6">
          <h3 class="font-bold text-lg">Get Updates</h3>
          <div class="flex gap-2">
            <UInput
              v-model="email"
              placeholder="Enter your email"
              color="gray"
              variant="outline"
              class="flex-1"
              :ui="{ 
                base: 'bg-gray-800 border-gray-700 text-white',
                placeholder: 'placeholder-gray-500'
              }"
            />
            <UButton 
              label="Subscribe" 
              color="white" 
              variant="solid"
              class="text-black"
            />
          </div>
          
          <!-- Social Icons -->
          <div class="flex gap-4 pt-4">
            <UButton
              v-for="social in socialLinks"
              :key="social.icon"
              :icon="social.icon"
              color="gray"
              variant="ghost"
              class="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              :to="social.to"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; 2025 REEDAR. All rights reserved.</p>
        <div class="flex gap-8">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
        </div>
      </div>
    </UContainer>
  </footer>
</template> 


