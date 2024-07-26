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

const products = [
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
];

const subCategories = {
  "pismennye-prinadlezhnosti": {
    ruchki: "Ручки",
    karandashi: "Карандаши",
  },
};

const categoryRouteName = computed(() => route.params.routeName);
const subCategoryRouteName = computed(() => route.params.subRouteName);

const categoryTitle = computed(
  () => categories[categoryRouteName.value] || "Категория не найдена",
);

const subCategoryTitle = computed(() => {
  const category = subCategories[categoryRouteName.value];
  return category
    ? category[subCategoryRouteName.value] || "Подкатегория не найдена"
    : "Категория не найдена";
});

const findBy = ["По популярности", "По цене", "По рейтингу"];
const selected = ref(findBy[0]);

const value = ref();
</script>

<template>
  <main class="mt-8 w-full">
    <div class="mb-4 flex">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">
        Главная - Каталог - {{ categoryTitle }} -
      </p>
      <p class="ml-1 font-inter text-base font-medium text-[#E4CCFF]">
        {{ subCategoryTitle }}
      </p>
    </div>
    <div class="mb-8 flex justify-end">
      <div class="w-1/5">
        <USelectMenu
          v-slot="{ open }"
          v-model="selected"
          :options="findBy"
          class="font-montserrat"
        >
          <UButton
            color="gray"
            class="flex-1 justify-between font-montserrat text-base"
          >
            {{ selected }}
            <UIcon
              name="i-heroicons-chevron-right-20-solid"
              class="h-5 w-5 text-gray-400 transition-transform dark:text-gray-500"
              :class="[open && 'rotate-90 transform']"
            />
          </UButton>
        </USelectMenu>
      </div>
    </div>
    <section class="grid w-full grid-cols-3 gap-x-10 gap-y-16">
      <aside class="flex w-2/3 flex-col">
        <p class="mb-4 font-roboto font-medium text-[#000] xl:text-xl">
          Стоимость
        </p>
        <div class="mb-3 flex gap-x-5">
          <div class="flex gap-x-2">
            <p class="font-roboto font-medium text-[#000] xl:text-base">От</p>
            <input
              type="text"
              class="h-6 w-16 rounded-md border border-solid border-[#000] px-1 py-1 focus:outline-none"
            />
          </div>
          <div class="flex gap-x-2">
            <p class="font-roboto font-medium text-[#000] xl:text-base">До</p>
            <input
              type="text"
              class="h-6 w-16 rounded-md border border-solid border-[#000] px-1 py-1 focus:outline-none"
            />
            <p class="font-roboto font-medium text-[#000] xl:text-base">тг</p>
          </div>
        </div>
        <div class="mb-6">
          <URange
            v-model="value"
            color="violet"
            placeholder="Search..."
            size="xs"
          />
        </div>
        <button
          class="h-8 w-full rounded-md bg-[#E4CCFF] font-roboto font-medium text-[#000] xl:text-base"
        >
          Применить
        </button>
        <div class="mt-10 flex flex-col gap-y-4">
          <div class="flex cursor-pointer items-center justify-between">
            <p class="font-roboto font-medium text-[#000] xl:text-xl">Бренд</p>
            <img
              src="/images/arrow-down.svg"
              alt="arrow-down"
              class="h-6 w-6"
            />
          </div>
					<div class="flex cursor-pointer items-center justify-between">
            <p class="font-roboto font-medium text-[#000] xl:text-xl">Бренд</p>
            <img
              src="/images/arrow-down.svg"
              alt="arrow-down"
              class="h-6 w-6"
            />
          </div>
					<div class="flex cursor-pointer items-center justify-between">
            <p class="font-roboto font-medium text-[#000] xl:text-xl">Бренд</p>
            <img
              src="/images/arrow-down.svg"
              alt="arrow-down"
              class="h-6 w-6"
            />
          </div>
        </div>
      </aside>
      <Card
        v-for="product in products"
        :key="product.id"
        :to="`/catalog/${product.catRouteName}/${product.routeName}/product?id=${product.id}`"
        :title="product.title"
        imgSrc="/images/card-1.jpg"
        alt="Card"
      />
    </section>
  </main>
</template>
