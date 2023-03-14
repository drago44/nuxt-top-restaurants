<script setup lang="ts">
  useHead({
    title: 'Restaurantly | TOP 50',
    meta: [{ name: 'description', content: 'Top 50 restaurants.' }],
  });
</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <div class="container">
        <RestaurantTable />
      </div>
    </NuxtLayout>
  </div>
</template>
