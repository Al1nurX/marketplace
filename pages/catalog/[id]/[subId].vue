<script setup>
const route = useRoute();
const categories = {
  1: "Письменные принадлежности",
  2: "Бумажная продукция",
  3: "Школьный текстиль",
  4: "Подарки, сувениры",
  5: "Хобби и творчество",
  6: "Офисная мебель",
  7: "Демонстрационные оборудование",
  8: "Бытовая химия",
  9: "Кожгалантерея",
  10: "Государственная символика",
};

const subCategories = {
  1: {
    1: "Ручки",
    2: "Карандаши",
  },
  2: {
    1: "Тетради",
    2: "Блокноты",
  },
  3: {
    1: "Формы",
    2: "Рюкзаки",
  },
};

const categoryId = computed(() => route.params.id);
const subCategoryId = computed(() => route.params.subId);
const subCategoryTitle = computed(() => {
  const category = subCategories[categoryId.value];
  return category
    ? category[subCategoryId.value] || "Подкатегория не найдена"
    : "Категория не найдена";
});

const findBy = ["По популярности", "По цене", "По рейтингу"];
const selected = ref(findBy[0]);
</script>

<template>
  <main class="mt-8 w-full">
    <div class="mb-4 flex">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">
        Главная - Каталог -
      </p>
      <p class="space-x-1 font-inter text-base font-medium text-[#E4CCFF]">
        {{ categoryTitle }}
      </p>
      <p class="font-inter text-base font-medium text-[#E4CCFF]">
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
      <aside class="w-1/4 border-r p-4">
        <div class="mb-6">
          <p class="font-montserrat text-lg font-semibold">Стоимость</p>
          <div class="mt-2 flex items-center space-x-2">
            <input
              type="text"
              placeholder="От"
              class="w-1/2 rounded border px-2 py-1"
            />
            <input
              type="text"
              placeholder="До"
              class="w-1/2 rounded border px-2 py-1"
            />
          </div>
          <button class="mt-2 w-full rounded bg-[#A32BFF] py-2 text-white">
            Применить
          </button>
        </div>
        <div class="mb-6">
          <p class="font-montserrat text-lg font-semibold">Бренд</p>
          <div>
            <label class="mt-2 flex items-center">
              <input type="checkbox" class="mr-2" />
              Бренд 1
            </label>
            <label class="mt-2 flex items-center">
              <input type="checkbox" class="mr-2" />
              Бренд 2
            </label>
            <label class="mt-2 flex items-center">
              <input type="checkbox" class="mr-2" />
              Бренд 3
            </label>
          </div>
        </div>
      </aside>
      <Card v-for="i in 8" :key="i" />
    </section>
  </main>
</template>
