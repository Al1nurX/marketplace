<template>
  <main class="mt-[25px]">
    <div class="my-10 flex">
      <p class="font-inter text-base font-medium text-[#B3B3B3]">Главная - Каталог - Товары для офисного стола - Письменные принадлежности - Ручки</p>
    </div>
    <div class="mb-10 grid grid-cols-3 gap-6">
      <Catalog
        to="/catalog/1"
        title="Письменные принадлежности"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Бумажная продукция"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Школьный текстиль"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Подарки, сувениры"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Хобби и творчество"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Офисная мебель"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Демонстрационные оборудование"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Бытовая химия"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Кожгалантерея"
        imgSrc="content.png"
        alt="Content"
      />
      <Catalog
        to="/catalog/1"
        title="Государственная символика"
        imgSrc="content.png"
        alt="Content"
      />
    </div>
    <div class="mb-10 flex items-center justify-between pt-5">
      <p class="font-montserrat text-4xl font-light text-[#000]">Новинки</p>
      <button
        class="rounded-3xl bg-[#5810B5] px-11 py-2 font-montserrat text-xl font-semibold text-[#FFF]"
      >
        Больше
      </button>
    </div>
    <div class="mb-10 flex justify-between">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="mb-10 flex items-center justify-between pt-5">
      <p class="font-montserrat text-4xl font-light text-[#000]">Акции</p>
      <button
        class="rounded-3xl bg-[#51E028] px-11 py-2 font-montserrat text-xl font-semibold text-[#FFF]"
      >
        Больше
      </button>
    </div>
    <div class="mb-10 flex justify-between">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="mb-12 pt-20">
      <BrandCarousel />
    </div>
  </main>
</template>
