<script setup>
const brands = [
  { name: "brand-1", logo: "brand-1.png" },
  { name: "brand-2", logo: "brand-2.png" },
  { name: "brand-3", logo: "brand-3.png" },
  { name: "brand-4", logo: "brand-4.png" },
  { name: "brand-5", logo: "brand-5.png" },
  { name: "brand-6", logo: "brand-6.png" },
  { name: "brand-7", logo: "brand-7.png" },
  { name: "brand-8", logo: "brand-8.png" },
];
</script>

<template>
  <div class="relative flex">
    <div class="relative">
      <div class="swiper-button-prev">
        <img
          src="/images/arrow-left-brand.svg"
          alt="arrow-left"
          class="h-[60px] w-[60px]"
        />
      </div>
    </div>
    <swiper
      :slides-per-view="4"
      :loop="true"
      :speed="600"
      :mousewheel="true"
      :autoplay="{
        delay: 15000,
        disableOnInteraction: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperMousewheel]"
      class="w-full"
    >
      <swiper-slide v-for="(brand, index) in brands" :key="index">
        <img
          :src="`/images/${brand.logo}`"
          :alt="brand.name"
          class="w-[100px] object-contain grayscale transition duration-300 mx-10 ease-in-out hover:grayscale-0 xl:h-[80px]"
        />
      </swiper-slide>
    </swiper>
    <div class="relative">
      <div class="swiper-button-next">
        <img
          src="/images/arrow-right-brand.svg"
          alt="arrow-right"
          class="h-[60px] w-[60px]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}
</style>
