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
  <div
    class="relative flex justify-center xs:mx-10 xs:items-end sm:mx-12 sm:items-stretch md:mx-14"
  >
    <div class="relative mr-4">
      <div class="swiper-button-prev">
        <img src="/images/arrow-left-brand.svg" alt="arrow-left" />
      </div>
    </div>
    <swiper
      :slides-per-view="4"
      :space-between="30"
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
      :breakpoints="{
        350: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }"
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperMousewheel]"
      class="w-full"
    >
      <swiper-slide v-for="(brand, index) in brands" :key="index">
        <img
          :src="`/images/${brand.logo}`"
          :alt="brand.name"
          class="w-full object-contain grayscale transition duration-300 ease-in-out hover:grayscale-0 xs:h-[35px] sm:h-[50px] md:h-[65px] lg:h-[80px]"
        />
      </swiper-slide>
    </swiper>
    <div class="relative ml-4">
      <div class="swiper-button-next">
        <img src="/images/arrow-right-brand.svg" alt="arrow-right" />
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

@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 640px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
  }
}
</style>
