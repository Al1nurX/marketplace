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
      <div class="relative mb-5 w-full overflow-hidden xl:h-[400px]">
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
      <p class="mb-9 font-montserrat text-xl font-semibold text-[#181818]">
        {{ title }}
      </p>
    </NuxtLink>
    <div class="flex flex-col items-center">
      <button class="rounded-[50px] bg-[#AE498C] px-14 py-[15px]">
        <div class="flex items-center gap-x-2 text-[#FFF]">
          <Icon name="ic:outline-shopping-cart" size="24" />
          <p class="font-montserrat text-base font-semibold">В корзину</p>
        </div>
      </button>
    </div>
  </div>
</template>
