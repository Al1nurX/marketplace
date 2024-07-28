<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

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

const modules = [Autoplay, Pagination, Navigation, Mousewheel];
</script>

<template>
  <div
    class="relative flex items-center justify-between gap-[52px] overflow-hidden"
  >
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :css-mode="true"
      :loop="true"
      :autoplay="{
        delay: 15000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :mousewheel="true"
      :modules="modules"
      class="relative mb-[60px] w-full"
    >
      <swiper-slide v-for="(brand, index) in brands" :key="index" class="px-20">
        <img
          :src="`/images/${brand.logo}`"
          :alt="brand.name"
          class="h-[80px] w-[240px] object-contain grayscale transition duration-300 ease-in-out hover:grayscale-0"
        />
      </swiper-slide>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <img
            src="/images/arrow-left-brand.svg"
            alt="arrow-left"
            class="h-[60px] w-[60px]"
          />
        </div>
        <div className="swiper-button-next slider-arrow">
          <img
            src="/images/arrow-right-brand.svg"
            alt="arrow-right"
            class="h-[60px] w-[60px]"
          />
        </div>
      </div>
    </swiper>
    <!-- <div v-for="(brand, index) in brands" :key="index">
      <img
        :src="brand.logo"
        :alt="brand.name"
        class="h-[80px] w-[240px] object-contain grayscale filter transition duration-300 ease-in-out hover:grayscale-0 hover:filter"
      />
    </div> -->
  </div>
</template>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .swiper-button-next {
  right: 35px;
}

.swiper-button-prev {
  left: 35px;
}  */

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}
</style>