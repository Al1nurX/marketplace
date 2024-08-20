<!-- <script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <p class="mb-10 mt-36 text-center font-inter text-3xl text-[#000]">
      С ЭТИМ ТОВАРОМ ПОКУПАЮТ
    </p>
    <div class="hide-scrollbar overflow-x-auto">
      <div class="flex space-x-4" style="width: calc(100vw - 4rem);">
        <Card
          v-for="item in products"
          :key="item.id"
          :to="`/catalog/${item.catRouteName}/${item.routeName}/product?id=${item.id}`"
          :title="item.title"
          imgSrc="/images/card-1.jpg"
          alt="Card"
          class="inline-block w-1/3 shrink-0"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> -->

<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <p
      class="mb-10 mt-36 text-center font-inter text-[#000] xs:text-xl sm:text-2xl lg:text-3xl"
    >
      С ЭТИМ ТОВАРОМ ПОКУПАЮТ
    </p>
    <swiper
      :slides-per-view="3"
      :space-between="20"
      :mousewheel="true"
      :speed="800"
      :modules="[SwiperMousewheel]"
      :breakpoints="{
        350: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }"
      class="flex w-full"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <Card
          :key="item.id"
          :to="`/catalog/${item.catRouteName}/${item.routeName}/product?id=${item.id}`"
          :title="item.title"
          imgSrc="/images/card-1.jpg"
          alt="Card"
          customHeights="xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] xl:h-[400px]"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
