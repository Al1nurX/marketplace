<script setup>
const isCatalogOpen = ref(false);

const toggleCatalog = () => {
  isCatalogOpen.value = !isCatalogOpen.value;
};
</script>

<template>
  <header>
    <div class="mt-4 flex justify-end">
      <div class="flex items-center gap-3">
        <img src="@assets/images/telephone.svg" alt="telephone" class="h-6 w-6" />
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
    <div class="my-4 flex items-center justify-between">
      <NuxtLink to="/">
        <img src="@assets/images/logo.png" alt="Logo" class="h-[47px] w-[240px]" />
      </NuxtLink>
      <div class="flex items-end gap-x-[15px]">
        <input
          type="text"
          placeholder="Поиск по каталогу"
          class="w-80 border-b border-solid border-[#181818] font-montserrat text-base font-semibold placeholder:text-[#777] focus:outline-none"
        />
        <button>
          <div class="flex items-center justify-center">
            <Icon name="material-symbols-light:search" size="32" />
          </div>
        </button>
      </div>
      <div class="flex items-center justify-between gap-12">
        <NuxtLink to="/favorites">
          <div class="flex items-center justify-center">
            <Icon name="material-symbols-light:favorite-outline" size="32" />
          </div>
        </NuxtLink>
        <div class="relative inline-block">
          <NuxtLink to="/cart">
            <div class="flex items-center justify-center">
              <Icon name="bitcoin-icons:cart-outline" size="32" />
            </div>
          </NuxtLink>
          <div
            class="absolute -top-[12px] left-[28px] flex h-4 w-4 items-center justify-center rounded-full bg-[#5810B5]"
          >
            <p class="text-xs text-[#FFFFFF]">2</p>
          </div>
        </div>
        <NuxtLink to="/profile">
          <div class="flex items-center justify-center">
            <Icon name="lets-icons:user-alt-light" size="32" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="grid w-full grid-cols-3 items-center">
      <button
        @click="toggleCatalog"
        class="flex justify-center border-r border-solid border-[#FFF] bg-[#5810B5] transition duration-[400ms] ease-in-out hover:bg-[#51E028]"
      >
        <p
          class="py-5 font-alegreya-sans-sc text-xl font-extrabold text-[#FFF]"
        >
          Каталог
        </p>
      </button>
      <div
        class="border-r border-solid border-[#FFF] bg-[#5810B5] text-center transition duration-[400ms] ease-in-out hover:bg-[#51E028]"
      >
        <p
          class="py-5 font-alegreya-sans-sc text-xl font-extrabold text-[#FFF]"
        >
          Адрес
        </p>
      </div>
      <div
        class="bg-[#5810B5] text-center transition duration-[400ms] ease-in-out hover:bg-[#51E028]"
      >
        <p
          class="py-5 font-alegreya-sans-sc text-xl font-extrabold text-[#FFF]"
        >
          Коллекции
        </p>
      </div>
    </div>
    <div v-if="isCatalogOpen" class="">lorem*15</div>
  </header>
</template>
