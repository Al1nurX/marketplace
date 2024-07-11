<template>
  <main class="mt-[40px]">
    <div class="flex items-center justify-between gap-x-5">
      <img
        src="/images/banner-1.jpg"
        alt="Banner"
        class="h-[526px] w-[428px] rounded-3xl object-cover object-center"
      />
      <img
        src="/images/banner-2.jpg"
        alt="Banner"
        class="h-[526px] w-[428px] rounded-3xl object-cover object-center"
      />
      <img
        src="/images/banner-3.jpg"
        alt="Banner"
        class="h-[526px] w-[428px] rounded-3xl object-cover object-center"
      />
    </div>
    <div class="my-[40px]">
      <p class="font-montserrat text-4xl font-medium text-[#181818]">Каталог</p>
    </div>
    <div class="mb-[40px] grid grid-cols-3 gap-6">
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
  </main>
</template>
