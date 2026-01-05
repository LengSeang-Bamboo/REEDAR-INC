<script setup lang="ts">
import Navbar from '~/components/common/navbar.vue'
import FooterSection from '~/components/common/footerSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col ">
    <Navbar />

    <main class="flex-1">
      <slot />
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
/* main {
  padding-top: 80px; 
} */
</style>
