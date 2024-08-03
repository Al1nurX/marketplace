<script setup>
const route = useRoute();
const categories = {
  "pismennye-prinadlezhnosti": "Письменные принадлежности",
  "bumazhnaia-produkcia": "Бумажная продукция",
  "shkolnyy-tekstil": "Школьный текстиль",
  "podarki-suveniry": "Подарки, сувениры",
  "khobbi-i-tvorchestvo": "Хобби и творчество",
  "ofisnaya-mebel": "Офисная мебель",
  "demonstracionnye-oborudovanie": "Демонстрационные оборудование",
  "bytovaya-himija": "Бытовая химия",
  kоzhgalantereya: "Кожгалантерея",
  "gosudarstvennaya-simbolika": "Государственная символика",
  new: "Новинки",
  promotions: "Акции",
};

const categoriesItems = [
  {
    id: "1",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "ruchki",
    title: "Ручка шариковая",
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
  {
    id: "9",
    catId: "1",
    catRouteName: "pismennye-prinadlezhnosti",
    routeName: "karandashi",
    title: "Карандаш",
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

const categoryRouteName = computed(() => route.params.routeName);

const categoryTitle = computed(
  () => categories[categoryRouteName.value] || "Категория не найдена",
);
</script>

<template>
  <main class="w-full xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8">
    <div class="flex flex-wrap xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">
        Главная - Каталог -
      </p>
      <p
        class="w-full font-inter text-base font-medium text-[#E4CCFF] xs:w-auto sm:ml-1"
      >
        {{ categoryTitle }}
      </p>
    </div>

    <section
      class="grid grid-cols-1 xs:gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14 xl:gap-x-10 xl:gap-y-16"
    >
      <Card
        v-for="category in categoriesItems"
        :key="category.id"
        :to="`/catalog/${category.catRouteName}/${category.routeName}`"
        :title="category.title"
        imgSrc="/images/card-1.jpg"
        alt="Card"
      />
    </section>
  </main>
</template>
