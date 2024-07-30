<script setup>
import { ref, reactive, computed } from "vue";

const activeTab = ref("Физ.лицо");
const activeStep = ref(1);

const phone = ref("");
const password = ref("");
const confirmPassword = ref("");

const companyName = ref("");
const contactPerson = ref("");
const legalAddress = ref("");
const email = ref("");
const bin = ref("");
const bic = ref("");
const iik = ref("");
const bank = ref("");

const consentPhysical = ref(false);
const consentLegal = ref(false);

const state = reactive({
  phone,
  password,
  confirmPassword,
  companyName,
  contactPerson,
  legalAddress,
  email,
  bin,
  bic,
  iik,
  bank,
});

const validate = () => {
  const errors = [];
  if (activeTab.value === "Физ.лицо") {
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
    if (!state.confirmPassword) {
      errors.push({ path: "confirmPassword", message: "Обязательное поле" });
    } else {
      if (state.password !== state.confirmPassword) {
        errors.push({
          path: "confirmPassword",
          message: "Пароли не совпадают",
        });
      }
    }
    if (!consentPhysical.value) {
      errors.push({ path: "consent", message: "Необходимо согласие" });
    }
  } else if (activeTab.value === "Юр.лицо") {
    if (activeStep.value === 1) {
      if (!state.companyName)
        errors.push({ path: "companyName", message: "Обязательное поле" });
      if (!state.contactPerson)
        errors.push({ path: "contactPerson", message: "Обязательное поле" });
      if (!state.legalAddress)
        errors.push({ path: "legalAddress", message: "Обязательное поле" });
    } else if (activeStep.value === 2) {
      if (!state.email)
        errors.push({ path: "email", message: "Обязательное поле" });
      if (!state.phone)
        errors.push({ path: "phone", message: "Обязательное поле" });
    } else if (activeStep.value === 3) {
      if (!state.bin)
        errors.push({ path: "bin", message: "Обязательное поле" });
      if (!state.bic)
        errors.push({ path: "bic", message: "Обязательное поле" });
      if (!state.iik)
        errors.push({ path: "iik", message: "Обязательное поле" });
      if (!state.bank)
        errors.push({ path: "bank", message: "Обязательное поле" });
      if (!consentLegal.value) {
        errors.push({ path: "consent", message: "Необходимо согласие" });
      }
    }
  }
  return errors;
};

async function onSubmit(event) {
  console.log(event.data);
}

const nextStep = () => {
  const errors = validate();
  if (errors.length === 0 && activeStep.value < 3) {
    activeStep.value++;
  } else {
    console.log(errors);
  }
};

const prevStep = () => {
  if (activeStep.value > 1) {
    activeStep.value--;
  }
};
</script>

<template>
  <main>
    <div class="mb-5 flex justify-around">
      <button
        :class="{
          'border-b-2 border-[#5810B5] font-medium': activeTab === 'Физ.лицо',
          'opacity-50': activeTab === 'Юр.лицо',
        }"
        class="py-2"
        @click="activeTab = 'Физ.лицо'"
      >
        Физ.лицо
      </button>
      <button
        :class="{
          'border-b-2 border-[#5810B5] font-medium': activeTab === 'Юр.лицо',
          'opacity-50': activeTab === 'Физ.лицо',
        }"
        class="py-2"
        @click="activeTab = 'Юр.лицо'"
      >
        Юр.лицо
      </button>
    </div>

    <div v-if="activeTab === 'Физ.лицо'">
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-5"
        @submit="onSubmit"
      >
        <UFormGroup label="Телефон" name="phone" class="!mt-6">
          <UInput v-model="state.phone" style="padding: 0.4rem" />
        </UFormGroup>

        <UFormGroup label="Пароль" name="password">
          <UInput
            v-model="state.password"
            type="password"
            style="padding: 0.4rem"
          />
        </UFormGroup>

        <UFormGroup label="Подтвердите пароль" name="confirmPassword">
          <UInput
            v-model="state.confirmPassword"
            type="password"
            style="padding: 0.4rem"
          />
        </UFormGroup>

        <UFormGroup name="consent" class="!mt-8">
          <input
            type="checkbox"
            v-model="consentPhysical"
            id="consentPhysical"
          />
          <label for="consentPhysical" class="ml-2 font-montserrat text-sm">
            Я даю согласие на обработку персональных данных.
            <br />
            <a href="/privacy-policy" class="text-blue-500"
              >Политика конфиденциальности</a
            >. *
          </label>
        </UFormGroup>

        <UButton
          type="submit"
          class="!mt-8 flex w-full items-center justify-center bg-[#AE498C] py-2.5 font-montserrat text-[17px] font-medium text-white transition duration-200 ease-in-out hover:bg-[#973f79]"
        >
          Зарегистрироваться
        </UButton>

        <UDivider label="ИЛИ" />

        <UButton
          color="emerald"
          label="Регистрация через Google"
          icon="i-simple-icons-google"
          block
          class="!mb-8 space-x-1 py-2.5 font-montserrat text-[17px] font-medium transition duration-200 ease-in-out"
        />
      </UForm>
    </div>

    <div v-if="activeTab === 'Юр.лицо'">
      <div class="mb-5 flex items-center justify-evenly">
        <div
          :class="{
            'bg-[#5810B5] text-[#FFF]': activeStep >= 1,
            'border border-solid border-[#5810B5] bg-[#FFF]': activeStep < 1,
          }"
          class="flex h-12 w-12 items-center justify-center rounded-full font-inter text-sm"
        >
          1/3
        </div>
        <img src="/images/arrow-right.svg" alt="arrow-right" class="w-8" />
        <div
          :class="{
            'bg-[#5810B5] text-white': activeStep >= 2,
            'border border-solid border-[#5810B5] bg-[#FFF]': activeStep < 2,
          }"
          class="flex h-12 w-12 items-center justify-center rounded-full font-inter text-sm"
        >
          2/3
        </div>
        <img src="/images/arrow-right.svg" alt="arrow-right" class="w-8" />
        <div
          :class="{
            'bg-[#5810B5] text-white': activeStep >= 3,
            'border border-solid border-[#5810B5] bg-[#FFF]': activeStep < 3,
          }"
          class="flex h-12 w-12 items-center justify-center rounded-full font-inter text-sm"
        >
          3/3
        </div>
      </div>

      <div v-if="activeStep === 1">
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-5"
          @submit="nextStep"
        >
          <UFormGroup
            label="Название компании"
            name="companyName"
            class="!mt-6"
          >
            <UInput v-model="state.companyName" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup label="Имя контактного лица" name="contactPerson">
            <UInput v-model="state.contactPerson" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup label="Юр.адрес" name="legalAddress">
            <UInput v-model="state.legalAddress" style="padding: 0.4rem" />
          </UFormGroup>

          <UButton
            type="button"
            @click="nextStep"
            class="!mb-12 !mt-10 flex w-full items-center justify-center bg-[#AE498C] py-2 font-montserrat text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-[#973f79]"
          >
            Далее
          </UButton>
        </UForm>
      </div>

      <div v-if="activeStep === 2">
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-5"
          @submit="nextStep"
        >
          <UFormGroup label="Эл.почта" name="email" class="!mt-6">
            <UInput v-model="state.email" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup label="Телефон" name="phone">
            <UInput v-model="state.phone" style="padding: 0.4rem" />
          </UFormGroup>

          <div class="!mb-12 !mt-10 flex gap-x-4">
            <UButton
              type="button"
              @click="prevStep"
              class="flex flex-1 items-center justify-center bg-gray-500 py-2 font-montserrat text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-gray-600"
            >
              Назад
            </UButton>
            <UButton
              type="button"
              @click="nextStep"
              class="flex flex-1 items-center justify-center bg-[#AE498C] py-2 font-montserrat text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-[#973f79]"
            >
              Далее
            </UButton>
          </div>
        </UForm>
      </div>

      <div v-if="activeStep === 3">
        <UForm
          :validate="validate"
          :state="state"
          class="space-y-5"
          @submit="onSubmit"
        >
          <UFormGroup label="БИН" name="bin" class="!mt-6">
            <UInput v-model="state.bin" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup label="БИК" name="bic">
            <UInput v-model="state.bic" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup label="ИИК" name="iik">
            <UInput v-model="state.iik" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup label="Банк" name="bank">
            <UInput v-model="state.bank" style="padding: 0.4rem" />
          </UFormGroup>

          <UFormGroup name="consent" class="!mt-8">
            <input type="checkbox" v-model="consentLegal" id="consentLegal" />
            <label for="consentLegal" class="ml-2 font-montserrat text-sm">
              Я даю согласие на обработку персональных данных.
              <br />
              <a href="/privacy-policy" class="text-blue-500"
                >Политика конфиденциальности</a
              >. *
            </label>
          </UFormGroup>

          <div class="!mb-12 !mt-12 flex gap-x-4">
            <UButton
              type="button"
              @click="prevStep"
              class="flex flex-1 items-center justify-center bg-gray-500 py-2 font-montserrat text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-gray-600"
            >
              Назад
            </UButton>
            <UButton
              type="submit"
              class="flex flex-1 items-center justify-center bg-[#AE498C] py-2 font-montserrat text-lg font-medium text-white transition duration-200 ease-in-out hover:bg-[#973f79]"
            >
              Зарегистрироваться
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
  </main>
</template>

<style scoped>
::v-deep label {
  font-size: 16px;
  padding-bottom: 0.5rem;
}
</style>
