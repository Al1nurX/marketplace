<script setup>
const isCatalogOpen = ref(false);

const toggleCatalog = () => {
  isCatalogOpen.value = !isCatalogOpen.value;
};
</script>

<template>
  <header>
    <div class="mt-[16px] flex justify-end">
      <div class="flex items-center gap-3">
        <Icon name="TelephoneIcon" size="24" />
        <div class="flex items-center gap-x-4">
          <p class="font-montserrat text-base font-semibold text-[#181818]">
            +7(132)50-25-90
          </p>
          <p class="font-montserrat text-base font-semibold text-[#181818]">
            +7(708)471-12-82
          </p>
        </div>
      </div>
    </div>
    <div class="my-[16px] flex items-center justify-between">
      <img src="/images/logo.png" alt="Logo" class="h-[47px] w-[240px]" />
      <div class="flex items-end gap-x-[15px]">
        <input
          type="text"
          placeholder="Поиск по каталогу"
          class="font-montserrat w-80 border-b border-solid border-[#181818] text-base font-semibold placeholder:text-[#777] focus:outline-none"
        />
        <button>
          <div class="flex items-center justify-center">
            <Icon name="material-symbols-light:search" size="32" />
          </div>
        </button>
      </div>
      <div class="flex items-center justify-between gap-14">
        <NuxtLink>
          <div class="flex items-center justify-center">
            <Icon name="ph:heart-light" size="32" />
          </div>
        </NuxtLink>
        <div class="relative inline-block">
          <NuxtLink>
            <div class="flex items-center justify-center">
              <Icon name="bitcoin-icons:cart-outline" size="32" />
            </div>
          </NuxtLink>
          <div
            class="absolute -top-[12px] left-[28px] flex h-4 w-4 items-center justify-center rounded-full bg-[#3C2A99]"
          >
            <p class="text-[12px] text-[#FFFFFF]">2</p>
          </div>
        </div>
        <NuxtLink>
          <div class="flex items-center justify-center">
            <Icon name="mdi:user" size="32" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid w-full grid-cols-3 items-center">
      <button
        @click="toggleCatalog"
        class="flex justify-center border-r border-solid border-[#FFF] bg-[#715DB9] transition duration-[400ms] ease-in-out hover:bg-[#77EA7E]"
      >
        <p
          class="font-alegreya-sans-sc py-5 text-xl font-extrabold text-[#FFF]"
        >
          Каталог
        </p>
      </button>
      <div
        class="border-r border-solid border-[#FFF] bg-[#715DB9] text-center transition duration-[400ms] ease-in-out hover:bg-[#77EA7E]"
      >
        <p
          class="font-alegreya-sans-sc py-5 text-xl font-extrabold text-[#FFF]"
        >
          Адрес
        </p>
      </div>
      <div
        class="bg-[#715DB9] text-center transition duration-[400ms] ease-in-out hover:bg-[#77EA7E]"
      >
        <p
          class="font-alegreya-sans-sc py-5 text-xl font-extrabold text-[#FFF]"
        >
          Коллекции
        </p>
      </div>
    </div>
    <div v-if="isCatalogOpen" class="">lorem*15</div>
  </header>
</template>
