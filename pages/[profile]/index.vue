<template>
  <main class="mt-8 w-full">
    <div class="mb-8 flex">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">Главная -</p>
      <p class="ml-1 font-inter text-base font-medium text-[#E4CCFF]">
        Профиль
      </p>
    </div>
    <div class="flex gap-x-20">
      <div
        class="flex w-1/4 flex-col gap-y-11 rounded-2xl border border-solid border-[#E4CCFF] bg-[#FFF] p-4"
      >
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img src="/images/user.svg" alt="user" />
            <span
              class="font-montserrat text-lg text-[#181818] hover:text-[#715DB9]"
              >Профиль</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img src="/images/order-profile.svg" alt="orders" />
            <span
              class="font-montserrat text-lg text-[#181818] hover:text-[#715DB9]"
              >Мои заказы</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img src="/images/bonus-profile.svg" alt="bonys" />
            <span
              class="font-montserrat text-lg text-[#181818] hover:text-[#715DB9]"
              >Бонусы</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between">
          <div class="flex items-center gap-x-4">
            <img src="/images/reviews-profile.svg" alt="user" />
            <span
              class="font-montserrat text-lg text-[#181818] hover:text-[#715DB9]"
              >Мои отзывы</span
            >
          </div>
          <img src="/images/arrow-profile.svg" alt="arrow" />
        </NuxtLink>
        <button class="text-left font-inter text-lg text-[#715DB9]">
          Выход из профиля
        </button>
      </div>
      <div class="flex w-1/3 flex-col gap-y-3">
        <div class="flex items-center gap-x-16">
          <p class="font-inter text-xl text-[#8B8B8B]">Имя</p>
          <span class="font-montserrat text-xl text-[#000]">Тахмина</span>
        </div>
        <div class="flex items-center gap-x-14">
          <p class="font-inter text-xl text-[#8B8B8B]">Email</p>
          <span class="font-montserrat text-xl text-[#000]"
            >takhmina100@mail.ru</span
          >
        </div>
        <div class="flex items-center gap-x-5">
          <p class="font-inter text-xl text-[#8B8B8B]">Телефон</p>
          <span class="font-montserrat text-xl text-[#000]"
            >+7 701 911 59 09</span
          >
        </div>
      </div>
      <div class="flex w-1/3 flex-col gap-y-5">
        <div class="flex items-center gap-x-4">
          <img src="/images/order-profile.svg" alt="orders" />
          <p class="font-inter text-xl text-[#000]">Мои заказы</p>
        </div>
        <span class="font-inter text-lg text-[#8B8B8B]"
          >У вас пока нет заказов. Сделайте свой первый заказ.
        </span>
      </div>
    </div>
  </main>
</template>
