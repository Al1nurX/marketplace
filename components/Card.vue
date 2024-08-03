<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
  },
});

const isHeartClicked = ref(false);

const toggleHeart = () => {
  isHeartClicked.value = !isHeartClicked.value;
};
</script>

<template>
  <div class="box-border flex h-full flex-col">
    <NuxtLink :to="to" class="text-center">
      <div
        class="relative mb-5 w-full overflow-hidden xs:h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[400px]"
      >
        <img
          :src="imgSrc"
          :alt="alt"
          class="h-full w-full object-cover object-center transition duration-300 ease-in-out hover:scale-105"
        />
        <div v-if="type" class="absolute left-[20px] top-[20px]">
          <p
            class="rounded-full border border-[#51E028] bg-gray-100 px-3 font-montserrat"
          >
            {{ type }}
          </p>
        </div>
        <button
          class="absolute right-[20px] top-[20px]"
          @click.prevent="toggleHeart"
        >
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
      <div class="mb-9 flex items-center justify-center sm:h-8 md:h-10 lg:h-14">
        <p
          class="font-montserrat font-semibold text-[#181818] xs:text-lg lg:text-xl"
        >
          {{ title }}
        </p>
      </div>
    </NuxtLink>
    <div class="flex flex-col items-center">
      <button
        class="rounded-[50px] bg-[#AE498C] xs:px-6 xs:py-2 sm:px-8 md:px-10 md:py-3 lg:px-14 lg:py-[15px]"
      >
        <div class="flex items-center gap-x-2 text-[#FFF]">
          <Icon
            name="ic:outline-shopping-cart"
            class="xs:h-5 xs:w-5 md:h-6 md:w-6"
          />
          <p class="font-montserrat font-semibold xs:text-sm sm:text-base">
            В корзину
          </p>
        </div>
      </button>
    </div>
  </div>
</template>
