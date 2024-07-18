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

const categoryId = computed(() => route.params.id);
const categoryTitle = computed(
  () => categories[categoryId.value] || "Категория не найдена",
);
</script>

<template>
  <main class="mt-8 w-full">
    <section class="grid w-full grid-cols-3 gap-x-10 gap-y-16">
      <Card v-for="i in 9" :key="i" />
    </section>
  </main>
</template>
