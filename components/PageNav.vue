<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["changePage"]);

const changePage = (page) => {
  emit("changePage", page);
};
</script>

<template>
  <div class="mt-20 flex items-center justify-around">
    <div class="flex items-center">
      <p class="mr-10 font-roboto text-xl font-medium text-[#000]">Страницы:</p>
      <nav class="flex space-x-2">
        <button
          v-if="currentPage > 1"
          @click="changePage(currentPage - 1)"
          class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#E4CCFF] bg-[#FFF] font-roboto text-base font-medium text-[#000] transition duration-300 ease-in-out hover:bg-[#E4CCFF]"
        >
          <img src="/images/arrow-page.svg" alt="arrow" />
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="changePage(page)"
          :class="{
            'h-8 w-8 rounded-full bg-[#E4CCFF] font-roboto text-base font-medium text-[#000]':
              page === currentPage,
            'h-8 w-8 rounded-full border-2 border-[#E4CCFF] bg-[#FFF] font-roboto text-base font-medium text-[#000] transition duration-300 ease-in-out hover:bg-[#E4CCFF]':
              page !== currentPage,
          }"
        >
          {{ page }}
        </button>
        <div
          v-if="totalPages > 5 && currentPage < totalPages - 2"
          class="flex items-end justify-center space-x-1"
        >
          <span
            class="flex h-1 w-1 items-center justify-center rounded-full bg-[#E4CCFF]"
          ></span>
          <span
            class="flex h-1 w-1 items-center justify-center rounded-full bg-[#E4CCFF]"
          ></span>
          <span
            class="flex h-1 w-1 items-center justify-center rounded-full bg-[#E4CCFF]"
          ></span>
        </div>
        <button
          v-if="currentPage < totalPages"
          @click="changePage(currentPage + 1)"
          class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#E4CCFF] bg-[#FFF] font-roboto text-base font-medium text-[#000] transition duration-300 ease-in-out hover:bg-[#E4CCFF]"
        >
          <img src="/images/arrow-page.svg" alt="arrow" />
        </button>
      </nav>
    </div>
    <p class="font-roboto text-xl font-medium text-[#000]">
      Товар {{ (currentPage - 1) * itemsPerPage + 1 }}-{{
        Math.min(currentPage * itemsPerPage, totalItems)
      }}
      из {{ totalItems }}
    </p>
  </div>
</template>
