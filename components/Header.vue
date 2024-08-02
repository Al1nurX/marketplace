<script setup>
const isCatalogOpen = ref(false);
const catalogTransitioning = ref(false);
let closeTimeout = null;

const isMenuOpen = ref(false);

const toggleCatalog = () => {
  isCatalogOpen.value = !isCatalogOpen.value;
  handleCatalogTransition();
};

const openCatalog = () => {
  clearTimeout(closeTimeout);
  isCatalogOpen.value = true;
  handleCatalogTransition();
};

const closeCatalog = () => {
  closeTimeout = setTimeout(() => {
    isCatalogOpen.value = false;
    handleCatalogTransition();
  }, 100);
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleItemClick = () => {
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
  el.style.transition = "height 0.6s ease, opacity 0.6s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
  setTimeout(() => {
    done();
    catalogTransitioning.value = false;
  }, 800);
}

function leave(el, done) {
  el.style.transition = "height 0.6s ease, opacity 0.6s ease";
  el.style.height = "0px";
  el.style.opacity = "1";
  setTimeout(() => {
    done();
    catalogTransitioning.value = false;
  }, 800);
}

const catalogItems = [
  {
    id: "1",
    routeName: "pismennye-prinadlezhnosti",
    title: "Письменные принадлежности",
  },
  { id: "2", routeName: "bumazhnaia-produkcia", title: "Бумажная продукция" },
  { id: "3", routeName: "shkolnyy-tekstil", title: "Школьный текстиль" },
  { id: "4", routeName: "podarki-suveniry", title: "Подарки, сувениры" },
  { id: "5", routeName: "khobbi-i-tvorchestvo", title: "Хобби и творчество" },
  { id: "6", routeName: "ofisnaya-mebel", title: "Офисная мебель" },
  {
    id: "7",
    routeName: "demonstracionnye-oborudovanie",
    title: "Демонстрационные оборудование",
  },
  { id: "8", routeName: "bytovaya-himija", title: "Бытовая химия" },
  { id: "9", routeName: "kоzhgalantereya", title: "Кожгалантерея" },
  {
    id: "10",
    routeName: "gosudarstvennaya-simbolika",
    title: "Государственная символика",
  },
];
</script>

<template>
  <header>
    <div class="mt-4 justify-end xs:hidden lg:flex">
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
      <a href="/">
        <img
          src="/images/logo.png"
          alt="Logo"
          class="xs:w-[170px] sm:w-[200px] lg:w-[210px] xl:w-[240px]"
        />
      </a>
      <div
        class="items-end xs:hidden md:flex md:gap-x-2 lg:gap-x-[10px] xl:gap-x-[15px]"
      >
        <input
          type="text"
          placeholder="Поиск по каталогу"
          class="border-b border-solid border-[#181818] font-montserrat text-base font-semibold placeholder:text-[#777] focus:outline-none md:w-64 lg:w-80"
        />
        <button>
          <div class="flex items-center justify-center">
            <Icon name="material-symbols-light:search" size="32" />
          </div>
        </button>
      </div>
      <div
        class="hidden items-center justify-between lg:flex lg:gap-x-10 xl:gap-x-12"
      >
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
      <div class="flex items-center gap-x-6 lg:hidden">
        <div class="flex items-center md:hidden">
          <button class="flex items-center justify-center">
            <Icon name="material-symbols-light:search" size="32" />
          </button>
        </div>
        <div class="flex items-center lg:hidden">
          <button @click="toggleMenu" class="flex items-center justify-center">
            <Icon name="material-symbols-light:menu" size="32" />
          </button>
        </div>
      </div>
      <transition name="slide-left">
        <div
          v-if="isMenuOpen"
          class="fixed left-0 top-0 z-50 flex min-h-dvh w-screen flex-col justify-center gap-y-10 bg-white text-center shadow-md"
        >
          <div class="relative">
            <button
              @click="toggleMenu"
              class="absolute -top-72 right-3 flex items-center justify-center"
            >
              <Icon name="material-symbols-light:close" size="36" />
            </button>
          </div>
          <NuxtLink to="/favorites" @click="toggleMenu">
            <div class="font-montserrat text-xl font-medium sm:text-2xl">
              Избранное
            </div>
          </NuxtLink>
          <NuxtLink to="/cart" @click="toggleMenu">
            <div class="font-montserrat text-xl font-medium sm:text-2xl">
              Корзина
            </div>
            <!-- <div
              class="absolute -top-[12px] left-[50%] flex h-4 w-4 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#5810B5]"
            >
              <p class="text-xs text-[#FFFFFF]">2</p>
            </div> -->
          </NuxtLink>
          <NuxtLink to="/profile" @click="toggleMenu">
            <div class="font-montserrat text-xl font-medium sm:text-2xl">
              Профиль
            </div>
          </NuxtLink>
        </div>
      </transition>
    </div>
    <div class="relative grid w-full grid-cols-3 items-center">
      <button
        @click="toggleCatalog"
        @mouseenter="openCatalog"
        @mouseleave="closeCatalog"
        class="flex justify-center border-r border-solid border-[#FFF] bg-[#5810B5] transition duration-[400ms] ease-in-out hover:bg-[#51E028]"
      >
        <p
          class="font-alegreya-sans-sc font-extrabold text-[#FFF] xs:py-1 sm:py-2 md:py-3 lg:py-4 lg:text-lg xl:py-5 xl:text-xl"
        >
          Каталог
        </p>
      </button>
      <div
        class="border-r border-solid border-[#FFF] bg-[#5810B5] text-center transition duration-[400ms] ease-in-out hover:bg-[#51E028]"
      >
        <p
          class="font-alegreya-sans-sc font-extrabold text-[#FFF] xs:py-1 sm:py-2 md:py-3 lg:py-4 lg:text-lg xl:py-5 xl:text-xl"
        >
          Адрес
        </p>
      </div>
      <div
        class="bg-[#5810B5] text-center transition duration-[400ms] ease-in-out hover:bg-[#51E028]"
      >
        <p
          class="font-alegreya-sans-sc font-extrabold text-[#FFF] xs:py-1 sm:py-2 md:py-3 lg:py-4 lg:text-lg xl:py-5 xl:text-xl"
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
        class="absolute left-0 right-0 z-[99] overflow-hidden bg-[#FFF] px-4 xs:mx-[20px] sm:mx-[30px] md:mx-[40px] xl:mx-[60px]"
        @mouseenter="openCatalog"
        @mouseleave="closeCatalog"
      >
        <div
          class="grid grid-cols-1 xs:my-4 xs:gap-3 sm:my-6 sm:grid-cols-2 sm:gap-4 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:gap-6"
        >
          <MenuCatalog
            v-for="item in catalogItems"
            :key="item.id"
            :to="`/catalog/${item.routeName}`"
            :title="item.title"
            imgSrc="/images/content.png"
            @click="handleItemClick"
          />
        </div>
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

.slide-left-enter-active,
.slide-left-leave-active {
  transition:
    transform 0.6s ease,
    opacity 0.6s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}

.slide-left-enter-to,
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
