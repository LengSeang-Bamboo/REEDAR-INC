<script setup lang="ts">
defineProps<{
  isActive?: boolean
}>()
</script>

<template>
  <NuxtLink 
    to="/ree-help" 
    class="text-lg font-medium transition-colors hover:text-primary"
    :class="{ 'text-primary font-semibold': isActive }"
  >
    REE-Help
  </NuxtLink>
</template>
