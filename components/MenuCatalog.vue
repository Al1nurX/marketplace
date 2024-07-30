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
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="hover:img-scale flex items-center gap-x-3 overflow-hidden rounded-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="h-20 w-20 overflow-hidden">
      <img
        :src="imgSrc"
        alt="menu-catalog"
        class="h-full w-full transform object-contain object-center duration-300 ease-in-out"
      />
    </div>
    <p
      class="font-montserrat text-lg font-medium transition duration-200 ease-in-out hover:opacity-70"
    >
      {{ title }}
    </p>
  </NuxtLink>
</template>

<style>
.hover\:img-scale:hover img {
  transform: scale(1.05);
}
</style>
