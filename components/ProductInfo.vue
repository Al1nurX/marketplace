<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
});

const mainImage = ref("/images/content.png");
const images = ref([
  "/images/content-2.jpg",
  "/images/content-3.jpg",
  "/images/content-4.jpg",
]);

const setMainImage = (image, index) => {
  const temp = mainImage.value;
  mainImage.value = images.value[index];
  images.value[index] = temp;
};

const isHeartClicked = ref(false);

const toggleHeart = () => {
  isHeartClicked.value = !isHeartClicked.value;
};

const count = ref(0);

const activeTab = ref("details");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

defineExpose({
  activeTab,
  setActiveTab,
});

const decrementCount = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<template>
  <main>
    <div class="flex lg:gap-x-10 md:gap-x-8 md:h-[380px] lg:h-[480px] xl:h-[520px]">
      <div
        class="group relative flex h-full overflow-hidden rounded-md border border-gray-200 md:w-[350px] lg:w-[520px] xl:w-[580px]"
      >
        <div
          :style="{ backgroundImage: `url(${mainImage})` }"
          class="relative h-full w-full bg-cover bg-center bg-no-repeat transition duration-300 ease-in-out"
        >
          <div class="flex h-full flex-col justify-center space-y-5 pl-8">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="setMainImage(image, index)"
              alt="ФОТО ТОВАРА"
              class="cursor-pointer rounded-md border border-gray-300 object-cover opacity-50 transition duration-300 ease-in-out hover:scale-105 group-hover:opacity-100 md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
            />
          </div>
          <button class="absolute lg:right-8 lg:top-8 md:right-6 md:top-6" @click="toggleHeart">
            <img
              :src="
                isHeartClicked ? '/images/liked-heart.svg' : '/images/heart.svg'
              "
              alt="favorite"
              class="h-[28px] w-[28px] cursor-pointer"
              :class="{
                grayscale: !isHeartClicked,
                'hover:grayscale-0': !isHeartClicked,
              }"
            />
          </button>
        </div>
      </div>
      <div class="flex h-full md:flex-1 lg:flex-none lg:w-2/5 flex-col">
        <div class="flex flex-grow flex-col justify-between">
          <p
            class="font-inter font-medium text-[#000] md:text-2xl xs:w-[95%] lg:w-4/5 lg:text-3xl xl:w-2/3"
          >
            {{ title }}
          </p>
          <p class="font-inter text-base text-[#000] xs:w-[95%] lg:w-4/5">
            {{ description }}
          </p>
          <div class="flex items-center gap-x-2">
            <img src="/images/star.svg" alt="rating" />
            <p class="font-inter text-[#000] sm:text-lg lg:text-xl">
              {{ rating }}
            </p>
          </div>
          <div class="flex items-center gap-x-3">
            <button
              @click="decrementCount"
              class="flex items-center justify-center rounded-l-sm bg-[#E5E5E5] p-1 md:h-7 md:w-7 lg:h-8 lg:w-8"
            >
              <img src="/images/minus.svg" alt="minus" />
            </button>
            <p
              class="w-10 text-center font-inter text-[#000] sm:text-lg lg:text-xl"
            >
              {{ count }}
            </p>
            <button
              @click="count++"
              class="flex items-center justify-center rounded-r-sm bg-[#E5E5E5] p-1 md:h-7 md:w-7 lg:h-8 lg:w-8"
            >
              <img src="/images/plus.svg" alt="plus" class="h-6 w-6" />
            </button>
          </div>
          <div class="flex items-center gap-x-2">
            <p
              class="font-inter font-medium text-[#000] sm:text-xl lg:text-2xl"
            >
              Цена:
            </p>
            <p class="font-inter text-[#000] sm:text-xl lg:text-2xl">
              {{ price }} тг
            </p>
          </div>
          <button
            class="w-full rounded-sm bg-[#AE498C] text-center font-roboto font-semibold text-[#FFF] sm:py-2 sm:text-lg lg:py-4 lg:text-xl"
          >
            В корзину
          </button>
        </div>
        <div class="flex flex-col md:mt-5 lg:mt-14">
          <p class="font-inter text-[#BABABA] sm:text-lg lg:text-xl">
            Есть в наличии
          </p>
          <div class="mt-3 flex md:gap-x-14 lg:gap-x-16">
            <div class="flex items-center gap-x-3">
              <img src="/images/exist.svg" alt="exist" class="h-6 w-6" />
              <p class="font-inter text-[#000] sm:text-lg lg:text-xl">Оптом</p>
            </div>
            <div class="flex items-center gap-x-3">
              <img src="/images/exist.svg" alt="exist" class="h-6 w-6" />
              <p class="font-inter text-[#000] sm:text-lg lg:text-xl">
                В розницу
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20">
      <div class="flex rounded-lg bg-gray-100 p-1 xl:w-[650px]">
        <button
          @click="setActiveTab('details')"
          :class="{
            'bg-white text-black': activeTab === 'details',
            'text-gray-500': activeTab !== 'details',
          }"
          class="w-1/2 rounded-lg py-2 font-inter text-lg font-medium text-[#000] transition-colors duration-300"
        >
          Детальная информация
        </button>
        <button
          @click="setActiveTab('reviews')"
          :class="{
            'bg-white text-black': activeTab === 'reviews',
            'text-gray-500': activeTab !== 'reviews',
          }"
          class="w-1/2 rounded-lg py-3 font-inter text-lg font-medium text-[#000] transition-colors duration-300"
        >
          Отзывы
        </button>
      </div>
      <div
        v-if="activeTab === 'details'"
        class="mt-2 rounded-lg bg-white p-4 shadow xl:w-[650px]"
      >
        <section class="flex flex-col gap-y-5 font-inter text-lg text-[#000]">
          <div class="flex items-center justify-between">
            <p>Артикул:</p>
            <p>00786954</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Бренд:</p>
            <p>Factor</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Серия:</p>
            <p>Econom</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Страна производитель:</p>
            <p>Китай</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Цвет корпуса:</p>
            <p>Серый</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Количество в упаковке:</p>
            <p>1 шт</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Размер (Д×Ш×В):</p>
            <p class="opacity-70">17×2×2</p>
          </div>
          <div class="flex items-center justify-between">
            <p>Размер упаковки (Д×Ш×В):</p>
            <p class="opacity-70">17×2×2</p>
          </div>
        </section>
      </div>
      <div
        v-if="activeTab === 'reviews'"
        class="mt-2 rounded-lg bg-white p-4 shadow"
      >
        <div class="flex flex-col gap-y-10">
          <div class="font-inter text-base text-[#000]">
            <div class="flex flex-row gap-x-10">
              <div class="flex max-w-[20%] flex-col gap-y-2">
                <p class="font-montserrat text-lg text-[#1B1A1A]">
                  Айжулдыз А.
                </p>
                <div class="flex items-center">
                  <img src="/images/star.svg" alt="rating" />
                  <p class="font-montserrat text-base text-[#1B1A1A]">
                    {{ rating }}
                  </p>
                </div>
                <p class="font-montserrat text-base text-[#1B1A1A]">
                  25.07.2023
                </p>
              </div>
              <p class="flex-1 font-montserrat text-xl text-[#3F3D3D]">
                Классная ручка, не изменяю ей. Только ею пишу. Паста не течет,
                отличная ручка Классная ручка, не изменяю ей. Только ею пишу.
              </p>
            </div>
          </div>
          <div class="font-inter text-base text-[#000]">
            <div class="flex flex-row gap-x-10">
              <div class="flex max-w-[20%] flex-col gap-y-2">
                <p class="font-montserrat text-lg text-[#1B1A1А]">
                  Айжулдыз А.
                </p>
                <div class="flex items-center">
                  <img src="/images/star.svg" alt="rating" />
                  <p class="font-montserrat text-base text-[#1B1А1А]">
                    {{ rating }}
                  </p>
                </div>
                <p class="font-montserrat text-base text-[#1B1А1А]">
                  25.07.2023
                </p>
              </div>
              <p class="flex-1 font-montserrat text-xl text-[#3F3D3D]">
                Классная ручка, не изменяю ей. Только ею пишу. Паста не течет,
                отличная ручка Классная ручка, не изменяю ей. Только ею пишу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
