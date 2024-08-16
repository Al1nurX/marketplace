<script setup>
const products = [
  {
    id: "1",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка гелиевая - синий стержень 0,5",
    description:
      "Гелиевая ручка Factor с колпачком в пластиковом серебристом корпусе, синие чернила, тонкая линия",
    rating: "3.5",
    price: "250",
  },
  {
    id: "2",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка гелевая",
  },
  {
    id: "3",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "karandashi",
    title: "Карандаш",
  },
  {
    id: "4",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка шариковая",
  },
  {
    id: "5",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка гелевая",
  },
  {
    id: "6",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "karandashi",
    title: "Карандаш",
  },
  {
    id: "7",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка шариковая",
  },
  {
    id: "8",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка гелевая",
  },
];
</script>

<template>
  <main class="mt-8 w-full">
    <div class="flex xs:mb-4 md:mb-5 lg:mb-6">
      <p class="font-inter font-medium text-[#B3B3B3] xs:text-sm sm:text-base">
        Главная - Каталог -
      </p>
      <p
        class="ml-1 font-inter font-medium text-[#E4CCFF] xs:text-sm sm:text-base"
      >
        Акции
      </p>
    </div>
    <section
      class="grid grid-cols-1 xs:gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14 xl:gap-x-10 xl:gap-y-16"
    >
      <Card
        v-for="product in products"
        :key="product.id"
        :to="`/catalog/${product.catRouteName}/${product.routeName}/product?id=${product.id}`"
        type="Акция"
        :title="product.title"
        imgSrc="/images/card-1.jpg"
        alt="Card"
      />
    </section>
  </main>
</template>
