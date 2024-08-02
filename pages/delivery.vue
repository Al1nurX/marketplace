<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg',
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-left-12',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-right-12',
    }"
    arrows
    infinite
    class="mx-auto w-64"
  >
    <img :src="item" class="w-full" />
  </UCarousel>
</template>

<script setup lang="ts">
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
</script>

<style>
.carousel__prev,
.carousel__next {
  opacity: 1; /* Ensure visibility */
  pointer-events: auto; /* Ensure they are clickable */
  /* Adjust margins or padding if needed */
}
</style>
