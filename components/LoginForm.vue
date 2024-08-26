<script setup>
const phone = ref("");
const password = ref("");

const state = reactive({
  phone,
  password,
});

const validate = () => {
  const errors = [];
  if (!state.phone)
    errors.push({ path: "phone", message: "Обязательное поле" });
  if (!state.password) {
    errors.push({ path: "password", message: "Обязательное поле" });
  } else {
    if (state.password.length < 6) {
      errors.push({
        path: "password",
        message: "Пароль должен быть не менее 6 символов",
      });
    }
    if (!/\d/.test(state.password)) {
      errors.push({
        path: "password",
        message: "Пароль должен содержать хотя бы одну цифру",
      });
    }
  }
  return errors;
};

async function onSubmit(event) {
  event.preventDefault();

  const errors = validate();
  if (errors.length > 0) {
    console.log(errors);
    return;
  }

  const apiUrl = `http://192.168.1.1:4000/api/login`;

  const payload = {
    telephone: phone.value,
    password: password.value,
  };
  console.log("Payload being sent:", payload);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(response);

    if (response.ok) {
      console.log("Login successful:");
    } else {
      const errorText = await response.text();  // Capture the error text
      console.error("Login failed:", errorText);  // Log the error text
    }
  } catch (error) {
    console.error("An error occurred during log in:", error);
  }
}
</script>

<template>
  <UForm
    :validate="validate"
    :state="state"
    class="space-y-5"
    @submit="onSubmit"
  >
    <UFormGroup label="Телефон" name="phone" class="!mt-3">
      <UInput v-model="state.phone" style="padding: 0.4rem" />
    </UFormGroup>

    <UFormGroup label="Пароль" name="password">
      <UInput
        v-model="state.password"
        type="password"
        style="padding: 0.4rem"
      />
    </UFormGroup>

    <div class="flex items-center justify-between">
      <a href="#" class="text-base text-blue-500 hover:underline"
        >Я не помню пароль</a
      >
    </div>

    <UButton
      type="submit"
      class="!mb-12 !mt-10 flex w-full items-center justify-center bg-[#AE498C] py-2 font-montserrat text-lg font-medium text-[#FFF] transition duration-200 ease-in-out hover:bg-[#973f79]"
    >
      Войти
    </UButton>
  </UForm>
</template>

<style scoped>
::v-deep label {
  font-size: 16px;
  padding-bottom: 0.5rem;
}
</style>
