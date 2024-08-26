<template>
  <div class="hide-scrollbar flex overflow-x-auto">
    <button
      class="mr-6 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-xl font-semibold text-[#000]"
    >
      Все
    </button>
    <div class="flex gap-x-2">
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Ручки
      </button>
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Карандаши
      </button>
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Карандаши цветные
      </button>
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Фломастеры
      </button>
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Расходные материалы для письма
      </button>
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Маркеры
      </button>
      <button
        class="w-72 rounded-[30px] border-[0.5px] border-[#000] px-6 py-2 font-montserrat text-lg font-semibold text-[#000]"
      >
        Текстовыделители
      </button>
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
