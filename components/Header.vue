<script setup>
const isCatalogOpen = ref(false);
const catalogTransitioning = ref(false);
let closeTimeout = null;

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
        class="absolute left-0 right-0 z-[99] mx-[60px] overflow-hidden bg-[#FFF] px-4"
        @mouseenter="openCatalog"
        @mouseleave="closeCatalog"
      >
        <div class="my-5 grid grid-cols-3 gap-6">
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
</style>


// make it responsive for laptops, tablets and smartphones using only tailwind css, don't change current style for laptops just make it adaptive: