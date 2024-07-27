<script setup>
import { ref } from "vue";

const selected = ref(false);
const count = ref(1);

const decrementCount = () => {
  if (count.value > 1) {
    count.value--;
  }
};
</script>

<template>
  <main class="relative">
    <p class="mt-10 font-inter text-4xl font-semibold text-[#000]">Корзина</p>
    <div class="absolute right-44 flex items-center gap-x-32">
      <p class="font-inter text-xl text-[#000]">Количество</p>
      <p class="font-inter text-xl text-[#000]">Цена</p>
    </div>
    <div class="-mx-[60px] mt-10 w-screen bg-[#F5F5F7] px-[60px]">
      <div class="flex items-center justify-between gap-x-6 py-4">
        <input
          type="checkbox"
          v-model="selected"
          class="h-5 w-5 transition duration-150 ease-in-out"
        />
        <div
          class="flex h-[100px] items-center rounded-[20px] border border-solid border-gray-300 px-[20px] py-[25px]"
        >
          <img
            src="@assets/images/sample.svg"
            alt="sample"
            class="h-[50px] w-[50px]"
          />
        </div>
        <p class="ml-4 flex-1 font-inter text-lg text-[#000]">
          Ручка гелиевая (Mazari-голубая) 0,25 мм
        </p>
        <div class="flex items-center gap-x-32">
          <div class="flex items-center gap-x-3">
            <button
              @click="decrementCount"
              class="flex h-8 w-8 items-center justify-center bg-[#E5E5E5]"
            >
              <img src="@assets/images/minus.svg" alt="minus" />
            </button>
            <p class="w-8 text-center font-inter text-xl text-[#000]">
              {{ count }}
            </p>
            <button
              @click="count++"
              class="flex h-8 w-8 items-center justify-center bg-[#E5E5E5]"
            >
              <img src="@assets/images/plus.svg" alt="plus" class="h-6 w-6" />
            </button>
          </div>
          <p class="font-inter text-xl text-[#000]">{{ 250 * count }} тг</p>
          <button class="flex h-8 w-8 items-center justify-center">
            <img src="@assets/images/delete.svg" alt="delete" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div class="mt-20 flex items-center justify-end">
      <div class="flex flex-col items-end gap-y-8">
        <div class="flex w-full gap-x-14">
          <div class="flex items-center gap-x-4">
            <input
              type="radio"
              id="use-bonuses"
              name="bonus"
              class="h-5 w-5 transition duration-150 ease-in-out"
            />
            <label for="use-bonuses" class="font-inter text-xl text-[#000]"
              >Использовать бонусы</label
            >
          </div>
          <p class="font-inter text-xl text-[#000]">Доставка</p>
          <p class="font-inter text-xl text-[#000]">0 тг</p>
        </div>
        <div class="flex w-full justify-end gap-x-14">
          <p class="font-inter text-xl text-[#000]">Итого</p>
          <p class="font-inter text-xl text-[#000]">{{ 250 * count }} тг</p>
        </div>
        <button class="rounded-lg bg-[#AE498C] font-bold font-inter px-6 py-[10px] text-white">
          Оформить заказ
        </button>
      </div>
    </div>
  </main>
</template>
