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
};

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

const subCategories = {
  "pismennye-prinadlezhnosti": {
    ruchki: "Ручки",
    karandashi: "Карандаши",
  },
};

const categoryRouteName = computed(() => route.params.routeName);
const subCategoryRouteName = computed(() => route.params.subRouteName);
const productId = computed(() => route.query.id);

const categoryTitle = computed(
  () => categories[categoryRouteName.value] || "Категория не найдена",
);

const subCategoryTitle = computed(() => {
  const category = subCategories[categoryRouteName.value];
  return category
    ? category[subCategoryRouteName.value] || "Подкатегория не найдена"
    : "Категория не найдена";
});

const product = computed(() => {
  return products.find((product) => product.id === productId.value);
});

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return products.filter(
    (prod) =>
      prod.catRouteName === product.value.catRouteName &&
      prod.routeName === product.value.routeName &&
      prod.id !== product.value.id,
  );
});
</script>

<template>
  <main class="mt-8 flex min-h-screen w-full flex-col">
    <div class="mb-8 flex">
      <div class="flex flex-wrap">
        <p
          class="mr-1 font-inter font-medium text-[#B3B3B3] xs:text-sm sm:text-base"
        >
          Главная - Каталог -
        </p>
        <div class="flex flex-wrap space-x-1">
          <p
            class="whitespace-nowrap font-inter font-medium text-[#B3B3B3] xs:text-sm sm:text-base"
          >
            {{ categoryTitle }} -
          </p>
          <p
            class="whitespace-nowrap font-inter font-medium text-[#E4CCFF] xs:text-sm sm:text-base"
          >
            {{ subCategoryTitle }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="product">
      <ProductInfo
        :title="product.title"
        :description="product.description"
        :rating="product.rating"
        :price="product.price"
      />
    </div>
    <div class="flex-grow">
      <Moreover :products="relatedProducts" />
    </div>
  </main>
</template>
