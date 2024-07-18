<script setup>
const catalogItems = [
  { id: "1", title: "Письменные принадлежности" },
  { id: "2", title: "Бумажная продукция" },
  { id: "3", title: "Школьный текстиль" },
  { id: "4", title: "Подарки, сувениры" },
  { id: "5", title: "Хобби и творчество" },
  { id: "6", title: "Офисная мебель" },
  { id: "7", title: "Демонстрационные оборудование" },
  { id: "8", title: "Бытовая химия" },
  { id: "9", title: "Кожгалантерея" },
  { id: "10", title: "Государственная символика" },
];
</script>

<template>
  <main class="mt-[25px]">
    <div class="flex items-center justify-between gap-x-5">
      <img
        src="/images/banner-1.jpg"
        alt="Banner"
        class="h-[526px] w-[428px] rounded-3xl object-cover object-center"
      />
      <img
        src="/images/banner-2.jpg"
        alt="Banner"
        class="h-[526px] w-[428px] rounded-3xl object-cover object-center"
      />
      <img
        src="/images/banner-3.jpg"
        alt="Banner"
        class="h-[526px] w-[428px] rounded-3xl object-cover object-center"
      />
    </div>
    <div class="my-10">
      <p class="font-montserrat text-4xl font-medium text-[#181818]">Каталог</p>
    </div>
    <div class="mb-10 grid grid-cols-3 gap-6">
      <Catalog
        v-for="item in catalogItems"
        :key="item.id"
        :to="`/catalog/${item.id}`"
        :title="item.title"
        imgSrc="content.png"
        alt="Content"
      />
    </div>
    <div class="mb-12 flex items-center justify-between pt-5">
      <p class="font-montserrat text-4xl font-light text-[#000]">Новинки</p>
      <button
        class="rounded-3xl bg-[#5810B5] px-11 py-2 font-montserrat text-xl font-semibold text-[#FFF]"
      >
        Больше
      </button>
    </div>
    <div class="mb-10 flex justify-between">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="mb-12 flex items-center justify-between pt-5">
      <p class="font-montserrat text-4xl font-light text-[#000]">Акции</p>
      <button
        class="rounded-3xl bg-[#51E028] px-11 py-2 font-montserrat text-xl font-semibold text-[#FFF]"
      >
        Больше
      </button>
    </div>
    <div class="mb-10 flex justify-between">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="-mb-4 pt-24">
      <BrandCarousel />
    </div>
  </main>
</template>
