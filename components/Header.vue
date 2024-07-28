<script setup>
import { ref, nextTick } from "vue";

const isCatalogOpen = ref(false);
const catalogTransitioning = ref(false);

const toggleCatalog = () => {
  isCatalogOpen.value = !isCatalogOpen.value;
  handleCatalogTransition();
};

const openCatalog = () => {
  isCatalogOpen.value = true;
  handleCatalogTransition();
};

const closeCatalog = () => {
  isCatalogOpen.value = false;
  handleCatalogTransition();
};

const handleCatalogTransition = () => {
  catalogTransitioning.value = true;
  nextTick(() => {
    const catalog = document.getElementById("catalog");
    if (isCatalogOpen.value) {
      catalog.style.height = catalog.scrollHeight + "px";
    } else {
      catalog.style.height = "0px";
    }
  });
};

function beforeEnter(el) {
  el.style.height = "0px";
  el.style.opacity = "1";
}

function enter(el, done) {
  el.style.transition = "height 0.8s ease, opacity 0.8s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
  setTimeout(() => {
    done();
    catalogTransitioning.value = false;
  }, 800);
}

function leave(el, done) {
  el.style.transition = "height 0.8s ease, opacity 0.8s ease";
  el.style.height = "0px";
  el.style.opacity = "1";
  setTimeout(() => {
    done();
    catalogTransitioning.value = false;
  }, 800);
}
</script>

<template>
  <header>
    <div class="mt-4 flex justify-end">
      <div class="flex items-center gap-3">
        <img src="/images/telephone.svg" alt="telephone" class="h-6 w-6" />
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
        <img src="/images/logo.png" alt="Logo" class="h-[47px] w-[240px]" />
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
    <div class="relative grid w-full grid-cols-3 items-center">
      <button
        @click="toggleCatalog"
        @mouseenter="openCatalog"
        @mouseleave="closeCatalog"
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
    <transition
      name="expand"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="isCatalogOpen"
        id="catalog"
        class="absolute left-0 right-0 z-[99] mx-[60px] overflow-hidden bg-[#fefefe] px-4"
      >
        <p>sdfsfdz</p>
        <p>sdfsfdz</p>
        <p>sdfsfdz</p>
        <p>sdfsfdz</p>
        <p>sdfsfdz</p>
        <p>sdfsfdz</p>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
}
.expand-enter-to,
.expand-leave-from {
  height: auto;
  opacity: 1;
}
</style>
