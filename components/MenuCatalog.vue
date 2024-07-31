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
    class="hover:img-scale hover:text-opacity flex items-center gap-x-3 overflow-hidden rounded-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="overflow-hidden md:h-[70px] md:w-[70px] xl:h-20 xl:w-20">
      <img
        :src="imgSrc"
        alt="menu-catalog"
        class="h-full w-full transform object-contain object-center duration-300 ease-in-out"
      />
    </div>
    <p
      class="font-montserrat font-medium transition duration-200 ease-in-out md:max-w-40 lg:text-lg xl:max-w-60"
    >
      {{ title }}
    </p>
  </NuxtLink>
</template>

<style>
.hover\:img-scale:hover img {
  transform: scale(1.05);
}

.hover\:text-opacity:hover p {
  opacity: 0.7;
}
</style>
