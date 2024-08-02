<script setup>
const banners = [
  { name: "banner-1", logo: "banner-1.jpg" },
  { name: "banner-2", logo: "banner-2.jpg" },
  { name: "banner-3", logo: "banner-3.jpg" },
  { name: "banner-4", logo: "banner-4.jpg" },
  { name: "banner-5", logo: "banner-5.jpg" },
  { name: "banner-6", logo: "banner-6.jpg" },
];
</script>

<template>
  <div class="relative flex items-center">
    <div class="swiper-button-prev xs:ml-2 sm:ml-4">
      <Icon name="ooui:arrow-next-rtl" size="24" />
    </div>
    <swiper
      :slides-per-view="3"
      :loop="true"
      :space-between="20"
      :autoplay="{
        delay: 15000,
        disableOnInteraction: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :mousewheel="true"
      :speed="800"
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperMousewheel]"
      :breakpoints="{
        350: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
      class="w-full"
    >
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img
          :src="`/images/${banner.logo}`"
          :alt="banner.name"
          class="w-full rounded-3xl object-cover object-center xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[526px]"
        />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-next xs:mr-2 sm:mr-4">
      <Icon name="ooui:arrow-next-ltr" size="24" />
    </div>
  </div>
</template>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}

@media (max-width: 640px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
  }
}
</style>
