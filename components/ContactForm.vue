<template>
  <div v-if="uuid">
    <form
      ref="contactFormElement"
      :class="{
        'is-disabled': contactFormSubmitInProgress,
      }"
      class="grid grid-cols-1 gap-[1rem] border-8 rounded-xl border-black p-8 shadow-2xl"
      name="contact"
      method="POST"
      data-netlify="true"
      novalidate
      @submit.prevent="runSubmitForm"
    >
      <div class="hidden">
        <!-- used by netlify to detect form, will break without it -->
        <input type="hidden" name="form-name" value="contact" aria-label="ignore" />
      </div>
      <div class="my-2">
        <label :for="`name-${uuid}`" class="block mb-4 text-base font-bold">Your Name: </label>
        <input
          :id="`name-${uuid}`"
          class="w-full p-4 border-2 border-black"
          ref="name"
          v-model.trim="contactFormName"
          type="text"
          name="name"
          autocomplete="true"
          required
        />
      </div>
      <div class="my-2">
        <label :for="`email-${uuid}`" class="block mb-4 text-base font-bold">Your Email: </label>
        <input
          :id="`email-${uuid}`"
          class="w-full p-4 border-2 border-black"
          ref="email"
          v-model.trim="contactFormEmail"
          type="email"
          name="email"
          autocomplete="true"
          required
        />
      </div>
      <div class="my-2">
        <label :for="`message-${uuid}`" class="block mb-4 text-base font-bold">Message: </label>
        <textarea
          :id="`message-${uuid}`"
          ref="message"
          v-model.trim="contactFormMessage"
          name="message"
          maxlength="2500"
          required
          class="min-h-[10em] w-full p-4 border-2 border-black"
        ></textarea>
      </div>
      <div class="my-2">
        <button type="submit" class="w-full max-w-full inline-flex justify-center rounded-md bg-brand5 text-body-inv p-4">
          Send
        </button>
      </div>
      <div class="my-2">
        <div v-show="contactFormSuccessMsg.length" role="alert" class="text-emerald-800">
          {{ contactFormSuccessMsg }}
        </div>
        <div v-show="contactFormErrorMsg.length" role="alert" class="text-red-800">
          {{ contactFormErrorMsg }}
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form {
  transition-property: filter, opacity;
  transition-duration: 0.4s;

  &.is-disabled {
    filter: blur(0.25em);
    opacity: 0.85;
  }
}
</style>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';

const uuid = ref('');
const contactFormSubmitInProgress = ref(false);
const contactFormSuccessMsg = ref('');
const contactFormErrorMsg = ref('');
const contactFormName = ref('');
const contactFormEmail = ref('');
const contactFormMessage = ref('');

const resetSubmitMessage = () => {
  contactFormSuccessMsg.value = '';
  contactFormErrorMsg.value = '';
};

const resetForm = () => {
  contactFormSubmitInProgress.value = false;
  contactFormSuccessMsg.value = '';
  contactFormErrorMsg.value = '';
  contactFormName.value = '';
  contactFormEmail.value = '';
  contactFormMessage.value = '';
};

// Form template ref
const contactFormElement = ref<HTMLFormElement | null>(null);

const runSubmitForm = (event: Event) => {
  const shouldAllowSubmit =
    !contactFormSubmitInProgress.value && contactFormElement.value && contactFormElement.value.reportValidity();

  resetSubmitMessage();

  if (shouldAllowSubmit) {
    contactFormSubmitInProgress.value = true;
    const formData = new FormData(contactFormElement.value as HTMLFormElement);
    const formDataBody = new URLSearchParams(formData as any).toString();

    $fetch('', {
      method: 'post',
      url: '',
      body: formDataBody,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(() => {
        resetForm();
        contactFormSuccessMsg.value = 'Thanks. 10-4, message received, the eagle has landed, etc.. ';
      })
      .catch(() => {
        contactFormErrorMsg.value = 'Sorry - an error occurred during submission. I really dropped the ball on this one.';
      })
      .finally(() => {
        contactFormSubmitInProgress.value = false;
      });
  }
};

onMounted(() => {
  uuid.value = uuidv4();
});
</script>
