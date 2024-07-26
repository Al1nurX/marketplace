<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <p class="mb-10 mt-36 text-center font-inter text-3xl text-[#000]">
      С ЭТИМ ТОВАРОМ ПОКУПАЮТ
    </p>
    <div class="hide-scrollbar overflow-x-auto">
      <div class="flex min-w-max space-x-4">
        <Card
          v-for="item in products"
          :key="item.id"
          :to="`/catalog/${item.catRouteName}/${item.routeName}/product?id=${item.id}`"
          :title="item.title"
          imgSrc="/images/card-1.jpg"
          alt="Card"
          class="inline-block"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
