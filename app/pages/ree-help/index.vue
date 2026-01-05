<script setup lang="ts">
useHead({
  title: 'REE-Help - REEDAR',
  meta: [
    { name: 'description', content: 'Get help and support for your REEDAR rental' }
  ]
})
</script>

<template>
  <div class="ree-help-page">
    <UContainer class="py-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">REE-Help Center</h1>
        <p class="text-lg text-gray-600">We're here to help with any questions or concerns</p>
      </div>
      
      <div class="help-content">
        <!-- Help content will be added here -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard>
            <template #header>
              <h3 class="text-xl font-semibold">FAQs</h3>
            </template>
            <p class="text-gray-600">Find answers to commonly asked questions</p>
          </UCard>
          
          <UCard>
            <template #header>
              <h3 class="text-xl font-semibold">Contact Support</h3>
            </template>
            <p class="text-gray-600">Reach out to our support team</p>
          </UCard>
          
          <UCard>
            <template #header>
              <h3 class="text-xl font-semibold">Guides</h3>
            </template>
            <p class="text-gray-600">Step-by-step rental guides</p>
          </UCard>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.ree-help-page {
  min-height: 100vh;
  padding-top: 80px;
}
</style>
