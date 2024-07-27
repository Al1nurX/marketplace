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
  "kоzhgalantereya": "Кожгалантерея",
  "gosudarstvennaya-simbolika": "Государственная символика",
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

const categoryRouteName = computed(() => route.params.routeName);
const categoryTitle = computed(
  () => categories[categoryRouteName.value] || "Категория не найдена",
);
</script>

<template>
  <main class="mt-8 w-full">
    <div class="mb-4 flex">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">
        Главная - Каталог -
      </p>
      <p class="ml-1 font-inter text-base font-medium text-[#E4CCFF]">
        {{ categoryTitle }}
      </p>
    </div>
    <section class="grid w-full grid-cols-3 gap-x-10 gap-y-16">
      <Card
        v-for="category in categoriesItems"
        :key="category.id"
        :to="`/catalog/${category.catRouteName}/${category.routeName}`"
        :title="category.title"
        imgSrc="@assets/images/card-1.jpg"
        alt="Card"
      />
    </section>
  </main>
</template>
