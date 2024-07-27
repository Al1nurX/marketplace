<template>
  <footer
    class="-mx-[60px] mt-36 flex h-64 items-center gap-x-[150px] border-t border-solid border-[#3C2A99]"
  >
    <div class="ml-[80px] flex gap-x-[80px]">
      <div class="flex flex-col gap-y-[12px]">
        <NuxtLink
          to="/about"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >О нас</NuxtLink
        >
        <NuxtLink
          to="/bonuses"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Бонусы</NuxtLink
        >
        <NuxtLink
          to="/vacancies"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Вакансии</NuxtLink
        >
        <NuxtLink
          to="/suppliers"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Поставщикам</NuxtLink
        >
      </div>
      <div class="flex flex-col gap-y-[12px]">
        <NuxtLink
          to="/payment"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Условия оплаты</NuxtLink
        >
        <NuxtLink
          to="/delivery"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Условия доставки</NuxtLink
        >
        <NuxtLink
          to="/faq"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Вопросы/ответы</NuxtLink
        >
        <NuxtLink
          to="/offer"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Договор публичной оферты</NuxtLink
        >
      </div>
      <div class="flex flex-col gap-y-[12px]">
        <NuxtLink
          to="/addresses"
          class="font-montserrat text-[20px] font-medium text-[#000] hover:text-[#5810B5]"
          >Адреса магазинов</NuxtLink
        >
        <p class="font-montserrat text-[20px] font-medium text-[#000]">
          +7(132)-50-25-90
        </p>
        <p class="font-montserrat text-[20px] font-medium text-[#000]">
          aikocompany@mail.ru
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <p class="mb-[18px] font-inter text-[20px] font-normal text-[#5810B5]">
        Быть в курсе событий!
      </p>
      <div class="relative mb-[29px]">
        <input
          type="email"
          placeholder="example@gmail.com"
          class="h-12 w-72 rounded-[6px] border border-[#D6D6D6] bg-white pl-4 pr-[4.5rem] font-inter text-[14px] font-medium outline-none placeholder:text-[#9F9D9D]"
        />
        <button
          class="absolute inset-y-0 right-0 flex h-12 w-14 items-center justify-center rounded-r-[6px] bg-[#5810B5]"
        >
          <img
            src="@assets/images/input-arrow.svg"
            alt="input-arrow"
            class="h-6 w-6"
          />
        </button>
      </div>
      <div class="flex gap-x-[16px]">
        <a href="">
          <img
            src="@assets/images/instagram.svg"
            alt="instagram"
            width="48"
            height="48"
            class="h-[48px] w-[48px]"
          />
        </a>
        <a href="">
          <img
            src="@assets/images/whatsapp.svg"
            alt="whatsapp"
            width="48"
            height="48"
            class="h-[48px] w-[48px]"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
