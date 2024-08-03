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
    <div class="xs:my-5 sm:my-6 md:my-8 lg:my-10">
      <p
        class="font-montserrat font-medium text-[#181818] xs:text-2xl sm:text-3xl lg:text-4xl"
      >
        Каталог
      </p>
    </div>
    <div
      class="grid grid-cols-1 gap-6 xs:mb-5 sm:mb-6 sm:grid-cols-2 md:mb-8 lg:mb-10 lg:grid-cols-3"
    >
      <Catalog
        v-for="item in catalogItems"
        :key="item.id"
        :to="`/catalog/${item.routeName}`"
        :title="item.title"
        imgSrc="content.png"
        alt="Content"
      />
    </div>
    <div
      class="flex items-center justify-between pt-5 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12"
    >
      <p
        class="font-montserrat font-light text-[#000] xs:text-2xl sm:text-3xl lg:text-4xl"
      >
        Новинки
      </p>
      <NuxtLink
        to="/catalog/new"
        class="rounded-3xl bg-[#5810B5] font-montserrat font-semibold text-[#FFF] xs:px-7 xs:py-1 sm:px-9 sm:text-lg md:px-11 md:py-2 md:text-xl"
      >
        Больше
      </NuxtLink>
    </div>
    <div
      class="grid grid-cols-1 xs:mb-5 xs:gap-10 sm:mb-6 sm:grid-cols-2 sm:gap-x-6 md:mb-8 lg:mb-10 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-10"
    >
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
    <div
      class="flex items-center justify-between pt-5 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12"
    >
      <p
        class="font-montserrat font-light text-[#000] xs:text-2xl sm:text-3xl lg:text-4xl"
      >
        Акции
      </p>
      <NuxtLink
        to="/catalog/promotions"
        class="rounded-3xl bg-[#51E028] font-montserrat font-semibold text-[#FFF] xs:px-7 xs:py-1 sm:px-9 sm:text-lg md:px-11 md:py-2 md:text-xl"
      >
        Больше
      </NuxtLink>
    </div>
    <div
      class="mb-10 grid grid-cols-1 xs:gap-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-10"
    >
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
    <div class="mt-36">
      <BrandCarousel />
    </div>
  </main>
</template>
