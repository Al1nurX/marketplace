<script setup>
const isLogin = ref(true);

const toggleForm = (login) => {
  isLogin.value = login;
};
</script>

<template>
  <main class="mx-auto w-[600px] rounded-lg bg-white p-6 shadow-md">
    <div class="mb-4 flex justify-between border-b px-6">
      <button
        :class="{
          'text-[#1A1919]': isLogin,
          'opacity-50': !isLogin,
        }"
        class="py-2 font-montserrat text-xl font-medium focus:outline-none"
        @click="toggleForm(true)"
      >
        Вход
      </button>
      <button
        :class="{
          'text-[#1A1919]': !isLogin,
          'opacity-50': isLogin,
        }"
        class="py-2 font-montserrat text-xl font-medium focus:outline-none"
        @click="toggleForm(false)"
      >
        Регистрация
      </button>
    </div>
    <div class="hide-scrollbar max-h-[600px] overflow-y-auto px-6">
      <div v-if="isLogin">
        <LoginForm />
      </div>
      <div v-else>
        <RegisterForm />
      </div>
    </div>
  </main>
</template>

<!-- <style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> -->
