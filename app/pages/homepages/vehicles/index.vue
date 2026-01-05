<script setup lang="ts">
import { useDashboard } from "@nuxt/ui/runtime/utils/dashboard.js";
import bgimg from "../../assets/images/rolls-royce-phantom-5120x2880-23258.jpg"
import { cars } from "~/data/cars";

</script>
<template> 
  <UDashboardGroup>
    <UDashboardSidebar />
    <slot />
  </UDashboardGroup>

</template>