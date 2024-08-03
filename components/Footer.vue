<template>
  <footer class="mt-36 flex flex-col">
    <div
      class="w-screen border border-solid border-[#5810B5] xs:-mx-[20px] sm:-mx-[30px] md:-mx-[40px] xl:-ml-[60px]"
    ></div>
    <div
      class="my-8 grid xs:grid-cols-1 xs:gap-y-9 sm:grid-cols-2 sm:gap-y-8 md:gap-y-10 lg:grid-cols-4 lg:gap-y-0"
    >
      <div class="flex flex-col gap-y-[12px]">
        <NuxtLink
          to="/about"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >О нас</NuxtLink
        >
        <NuxtLink
          to="/bonuses"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Бонусы</NuxtLink
        >
        <NuxtLink
          to="/vacancies"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Вакансии</NuxtLink
        >
        <NuxtLink
          to="/suppliers"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Поставщикам</NuxtLink
        >
      </div>
      <div class="flex flex-col gap-y-[12px] lg:-ml-12">
        <NuxtLink
          to="/payment"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Условия оплаты</NuxtLink
        >
        <NuxtLink
          to="/delivery"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Условия доставки</NuxtLink
        >
        <NuxtLink
          to="/faq"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Вопросы/ответы</NuxtLink
        >
        <NuxtLink
          to="/offer"
          class="w-3/4 font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:w-full xl:text-[20px]"
          >Договор публичной оферты</NuxtLink
        >
      </div>
      <div class="flex flex-col gap-y-[12px] lg:-ml-10 xl:-ml-0">
        <NuxtLink
          to="/addresses"
          class="font-montserrat font-medium text-[#000] hover:text-[#5810B5] md:text-lg lg:text-[19px] xl:text-[20px]"
          >Адреса магазинов</NuxtLink
        >
        <p
          class="font-montserrat font-medium text-[#000] md:text-lg lg:text-[19px] xl:text-[20px]"
        >
          +7(132)-50-25-90
        </p>
        <p
          class="font-montserrat font-medium text-[#000] md:text-lg lg:text-[19px] xl:text-[20px]"
        >
          aikocompany@mail.ru
        </p>
      </div>
      <div class="flex flex-col">
        <p
          class="font-inter font-normal text-[#5810B5] xs:mb-2 sm:mb-3 md:text-lg lg:mb-4 lg:text-[19px] xl:text-[20px]"
        >
          Быть в курсе событий!
        </p>
        <div
          class="relative xs:mb-3 xs:w-56 sm:mb-5 sm:w-64 md:w-72 lg:mb-7 lg:w-full"
        >
          <input
            type="email"
            placeholder="example@gmail.com"
            class="w-full rounded-[6px] border border-[#D6D6D6] bg-white font-inter text-[14px] font-medium outline-none placeholder:text-[#9F9D9D] xs:h-8 xs:pl-2 xs:pr-10 sm:h-9 sm:pl-3 sm:pr-12 md:h-10 md:pl-4 md:pr-[4.5rem] lg:h-12"
          />
          <button
            class="absolute inset-y-0 right-0 flex items-center justify-center rounded-r-[6px] bg-[#5810B5] xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-12 lg:h-12 lg:w-14"
          >
            <img
              src="/images/input-arrow.svg"
              alt="input-arrow"
              class="h-6 w-6"
            />
          </button>
        </div>
        <div class="flex xs:gap-x-2 sm:gap-x-3 md:gap-x-4">
          <a href="">
            <img
              src="/images/instagram.svg"
              alt="instagram"
              class="xs:h-9 xs:w-9 sm:h-[40px] sm:w-[40px] lg:h-[48px] lg:w-[48px]"
            />
          </a>
          <a href="">
            <img
              src="/images/whatsapp.svg"
              alt="whatsapp"
              class="xs:h-9 xs:w-9 sm:h-[40px] sm:w-[40px] lg:h-[48px] lg:w-[48px]"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
