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
    <div class="mb-6 flex">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">
        Главная - Каталог -
      </p>
      <p class="ml-1 font-inter text-base font-medium text-[#E4CCFF]">Акции</p>
    </div>
    <section class="grid w-full grid-cols-3 gap-x-10 gap-y-16">
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
