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
		count.value --;
	}
}
</script>

<template>
  <main>
    <div class="flex gap-x-5 xl:h-[540px]">
      <div
        class="relative flex h-full overflow-hidden rounded-md border border-gray-200 xl:w-[650px]"
      >
        <div
          :style="{ backgroundImage: `url(${mainImage})` }"
          class="relative h-full w-full bg-cover bg-center bg-no-repeat"
        >
          <div class="flex h-full flex-col justify-center space-y-5 pl-8">
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              @click="setMainImage(image, index)"
              alt="ФОТО ТОВАРА"
              class="h-[100px] w-[100px] cursor-pointer rounded-md border border-gray-300 object-cover transition duration-300 hover:scale-105"
            />
          </div>
          <button class="absolute right-8 top-8" @click="toggleHeart">
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
      <div class="flex h-full w-2/5 flex-col">
        <div class="flex flex-grow flex-col justify-between">
          <p class="w-2/3 font-inter text-3xl font-medium text-[#000]">
            {{ title }}
          </p>
          <p class="w-4/5 font-inter text-base text-[#000]">
            {{ description }}
          </p>
          <div class="flex items-center gap-x-2">
            <img src="/images/star.svg" alt="rating" />
            <p class="font-inter text-xl text-[#000]">{{ rating }}</p>
          </div>
          <div class="flex items-center gap-x-3">
            <button
              @click="decrementCount"
              class="flex h-8 w-8 items-center justify-center rounded-l-sm bg-[#E5E5E5] p-1"
            >
              <img src="/images/minus.svg" alt="minus" />
            </button>
            <p class="w-10 text-center font-inter text-xl text-[#000]">
              {{ count }}
            </p>
            <button
              @click="count++"
              class="flex h-8 w-8 items-center justify-center rounded-r-sm bg-[#E5E5E5] p-1"
            >
              <img src="/images/plus.svg" alt="plus" class="h-6 w-6" />
            </button>
          </div>

          <div class="flex items-center gap-x-2">
            <p class="font-inter text-2xl font-medium text-[#000]">Цена:</p>
            <p class="font-inter text-2xl text-[#000]">{{ price }} тг</p>
          </div>
          <button
            class="w-full rounded-sm bg-[#AE498C] py-4 text-center font-roboto text-xl font-semibold text-[#FFF]"
          >
            В корзину
          </button>
        </div>
        <div class="mt-14 flex flex-col">
          <p class="font-inter text-xl text-[#BABABA]">Есть в наличии</p>
          <div class="mt-3 flex gap-x-16">
            <div class="flex items-center gap-x-3">
              <img src="/images/exist.svg" alt="exist" class="h-6 w-6" />
              <p class="font-inter text-xl text-[#000]">Оптом</p>
            </div>
            <div class="flex items-center gap-x-3">
              <img src="/images/exist.svg" alt="exist" class="h-6 w-6" />
              <p class="font-inter text-xl text-[#000]">В розницу</p>
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
          class="w-1/2 rounded-lg py-2 font-inter text-lg font-medium text-[#000] transition-colors duration-300"
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
            <!-- <p>Отзывы будут здесь.</p> -->
          </div>
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
            <!-- <p>Отзывы будут здесь.</p> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
