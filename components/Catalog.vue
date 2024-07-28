<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="hover:img-scale flex h-[340px] w-full flex-col overflow-hidden rounded-2xl border-[0.5px] border-solid border-gray-200 bg-[#FFF] shadow-lg"
  >
    <p
      class="z-10 px-6 pb-3 pt-4 font-montserrat text-xl font-bold text-[#1A1919]"
    >
      {{ title }}
    </p>
    <img
      :src="`/images/${imgSrc}`"
      :alt="alt"
      class="h-60 w-full transform object-contain object-center duration-300 ease-in-out"
    />
  </NuxtLink>
</template>

<style>
.hover\:img-scale:hover img {
  transform: scale(1.05);
}
</style>
