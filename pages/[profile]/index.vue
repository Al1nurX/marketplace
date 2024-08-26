<template>
  <main class="w-full xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8">
    <div class="flex xs:mb-4 md:mb-5 lg:mb-6">
      <p class="font-inter text-sm font-medium text-[#B3B3B3] sm:text-base">
        Главная -
      </p>
      <p
        class="ml-1 font-inter text-sm font-medium text-[#E4CCFF] sm:text-base"
      >
        Профиль
      </p>
    </div>
    <div
      class="flex flex-col xs:gap-y-7 sm:gap-y-9 md:flex-row md:flex-wrap md:gap-x-10 md:gap-y-0 lg:flex-nowrap lg:gap-x-16 xl:gap-x-20"
    >
      <div
        class="flex flex-col rounded-2xl border border-solid border-[#E4CCFF] bg-[#FFF] xs:w-4/5 xs:gap-y-3 xs:p-3 sm:w-2/3 sm:gap-y-6 sm:p-4 md:w-5/12 md:gap-y-11 lg:w-1/3 xl:w-1/4"
      >
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img
              src="/images/user.svg"
              alt="user"
              class="xs:h-5 xs:w-5 sm:h-full sm:w-full"
            />
            <span
              class="font-montserrat text-base text-[#181818] hover:text-[#715DB9] sm:text-lg"
              >Профиль</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img
              src="/images/order-profile.svg"
              alt="orders"
              class="xs:h-5 xs:w-5 sm:h-6 sm:w-6"
            />
            <span
              class="font-montserrat text-base text-[#181818] hover:text-[#715DB9] sm:text-lg"
              >Мои заказы</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img
              src="/images/bonus-profile.svg"
              alt="bonus"
              class="xs:h-5 xs:w-5 sm:h-6 sm:w-6"
            />
            <span
              class="font-montserrat text-base text-[#181818] hover:text-[#715DB9] sm:text-lg"
              >Бонусы</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img
              src="/images/reviews-profile.svg"
              alt="user"
              class="xs:h-5 xs:w-5 sm:h-6 sm:w-6"
            />
            <span
              class="font-montserrat text-base text-[#181818] hover:text-[#715DB9] sm:text-lg"
              >Мои отзывы</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <button
          class="text-left font-inter text-base text-[#715DB9] sm:text-lg"
        >
          Выход из профиля
        </button>
      </div>
      <div class="flex w-full flex-col gap-y-3 md:w-[calc(50%-16px)] lg:w-1/3">
        <div class="flex items-center gap-x-16">
          <p class="font-inter text-[#8B8B8B] sm:text-lg md:text-xl">Имя</p>
          <span class="font-montserrat text-[#000] sm:text-lg md:text-xl"
            >Тахмина</span
          >
        </div>
        <div class="flex items-center gap-x-14">
          <p class="font-inter text-[#8B8B8B] sm:text-lg md:text-xl">Email</p>
          <span class="font-montserrat text-[#000] sm:text-lg md:text-xl"
            >takhmina100@mail.ru</span
          >
        </div>
        <div class="flex items-center gap-x-5">
          <p class="font-inter text-[#8B8B8B] sm:text-lg md:text-xl">Телефон</p>
          <span class="font-montserrat text-[#000] sm:text-lg md:text-xl"
            >+7 701 911 59 09</span
          >
        </div>
      </div>
      <div
        class="flex w-full flex-col xs:gap-y-3 sm:gap-y-4 md:mt-10 md:gap-y-5 lg:mt-0 lg:w-1/3"
      >
        <div class="flex items-center gap-x-3 sm:gap-x-4">
          <img
            src="/images/order-profile.svg"
            alt="orders"
            class="xs:h-5 xs:w-5 sm:h-6 sm:w-6"
          />
          <p class="font-inter text-lg text-[#000] sm:text-xl">Мои заказы</p>
        </div>
        <span class="font-inter text-[#8B8B8B] sm:text-lg"
          >У вас пока нет заказов. Сделайте свой первый заказ.
        </span>
      </div>
    </div>
  </main>
</template>
