<script setup>
const catalogItems = [
  {
    id: "1",
    routeName: "pismennye-prinadlezhnosti",
    title: "Письменные принадлежности",
  },
  { id: "2", routeName: "bumazhnaia-produkcia", title: "Бумажная продукция" },
  { id: "3", routeName: "shkolnyy-tekstil", title: "Школьный текстиль" },
  { id: "4", routeName: "podarki-suveniry", title: "Подарки, сувениры" },
  { id: "5", routeName: "khobbi-i-tvorchestvo", title: "Хобби и творчество" },
  { id: "6", routeName: "ofisnaya-mebel", title: "Офисная мебель" },
  {
    id: "7",
    routeName: "demonstracionnye-oborudovanie",
    title: "Демонстрационные оборудование",
  },
  { id: "8", routeName: "bytovaya-himija", title: "Бытовая химия" },
  { id: "9", routeName: "kоzhgalantereya", title: "Кожгалантерея" },
  {
    id: "10",
    routeName: "gosudarstvennaya-simbolika",
    title: "Государственная символика",
  },
];

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

const newProducts = products.slice(0, 3);
</script>

<template>
  <main class="mt-[25px]">
    <MainCarousel />
    <div class="my-10">
      <p class="font-montserrat text-4xl font-medium text-[#181818]">Каталог</p>
    </div>
    <div class="mb-10 grid grid-cols-3 gap-6">
      <Catalog
        v-for="item in catalogItems"
        :key="item.id"
        :to="`/catalog/${item.routeName}`"
        :title="item.title"
        imgSrc="content.png"
        alt="Content"
      />
    </div>
    <div class="mb-12 flex items-center justify-between pt-5">
      <p class="font-montserrat text-4xl font-light text-[#000]">Новинки</p>
      <NuxtLink
        to="/catalog/new"
        class="rounded-3xl bg-[#5810B5] px-11 py-2 font-montserrat text-xl font-semibold text-[#FFF]"
      >
        Больше
      </NuxtLink>
    </div>
    <div class="mb-10 grid grid-cols-3 gap-x-10">
      <Card
        v-for="product in newProducts"
        :key="product.id"
        :to="`/catalog/${product.catRouteName}/${product.routeName}/product?id=${product.id}`"
        type="Новинка"
        :title="product.title"
        imgSrc="/images/card-1.jpg"
        alt="Card"
      />
    </div>
    <div class="mb-12 flex items-center justify-between pt-5">
      <p class="font-montserrat text-4xl font-light text-[#000]">Акции</p>
      <NuxtLink
        to="/catalog/promotions"
        class="rounded-3xl bg-[#51E028] px-11 py-2 font-montserrat text-xl font-semibold text-[#FFF]"
      >
        Больше
      </NuxtLink>
    </div>
    <div class="mb-10 grid grid-cols-3 gap-x-10">
      <Card
        v-for="product in newProducts"
        :key="product.id"
        :to="`/catalog/${product.catRouteName}/${product.routeName}/product?id=${product.id}`"
        type="Акция"
        :title="product.title"
        imgSrc="/images/card-1.jpg"
        alt="Card"
      />
    </div>
    <div class="-mb-4 pt-24">
      <BrandCarousel />
    </div>
  </main>
</template>
