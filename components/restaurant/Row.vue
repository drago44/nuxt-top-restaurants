<script setup lang="ts">
  interface RowProps {
    rank?: number;
    name?: string;
    index: number;
    isHeader?: boolean;
  }

  defineProps<RowProps>();

  const bgColor = (index: number) => {
    if (index % 2 === 0) return { background: 'rgba(128,128,128,0.15)' };
    else return '';
  };
</script>

<template>
  <div v-if="isHeader" class="row">
    <h4 class="header">Rank</h4>
    <h4 class="header">Chain</h4>
  </div>
  <div v-else class="row" :style="bgColor(index)">
    <h4 class="header rank">{{ rank }}</h4>
    <NuxtLink :to="`/restaurants/${name}`" class="header link">{{
      name
    }}</NuxtLink>
  </div>
</template>

<style scoped>
  .row {
    border-top: 1px solid rgba(128, 128, 128, 0.336);
    display: flex;
    align-items: center;
  }
  .header {
    font-size: 1.25rem;
    color: rgb(10, 31, 148);
    margin: 0;
    margin-right: 2rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    width: 4rem;
  }
  .rank {
    color: black;
  }
  .link {
    text-decoration: none;
    color: rgb(228, 157, 27);
    width: auto;
    font-weight: 500;
  }
</style>
