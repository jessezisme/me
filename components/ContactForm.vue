<template>
  <div class="contact-form_cont">
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
      <div class="contact-form_row">
        <label :for="`name-${uuid}`" class="inline-block mb-4 text-base font-bold">Your Name: </label>
        <input :id="`name-${uuid}`" ref="name" v-model.trim="contactFormName" type="text" name="name" required />
      </div>
      <div class="contact-form_row">
        <label :for="`email-${uuid}`" class="inline-block mb-4 text-base font-bold">Your Email: </label>
        <input :id="`email-${uuid}`" ref="email" v-model.trim="contactFormEmail" type="email" name="email" required />
      </div>
      <div class="contact-form_row">
        <label :for="`message-${uuid}`" class="inline-block mb-4 text-base font-bold">Message: </label>
        <textarea
          :id="`message-${uuid}`"
          ref="message"
          v-model.trim="contactFormMessage"
          name="message"
          maxlength="2500"
          required
          class="min-h-[10em]"
        ></textarea>
      </div>
      <div class="contact-form_row g-m-0">
        <button type="submit" class="w-[200px] max-w-full inline-flex justify-center rounded-md bg-brand5 text-body-inv">
          Send
        </button>
      </div>
      <div class="contact-form_row g-mt-2">
        <div v-show="contactFormSuccessMsg.length > 0" role="alert" class="contact_msg is-success">
          {{ contactFormSuccessMsg }}
        </div>
        <div v-show="contactFormErrorMsg.length > 0" role="alert" class="contact_msg is-error">
          {{ contactFormErrorMsg }}
        </div>
      </div>
    </form>
  </div>
</template>

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

<style lang="scss" scoped>
form {
  transition-property: filter, opacity;
  transition-duration: 0.4s;

  &.is-disabled {
    filter: blur(0.25em);
    opacity: 0.85;
  }
}

button,
textarea,
input {
  // display: inline-block;
  // width: 100%;
  // border: 3px solid var(--c-grey-90);
  // padding: 15px 10px;
  // outline: 0;
  // // background-color: transparent;
  // transition: 0.3s border;
  // border-radius: 3px;
  // appearance: none;
  // transition: border, box-shadow;
  // transition-duration: 0.4s;
}

input,
textarea {
  &:hover,
  &:focus {
    border-color: var(--c-primary-1-600);
  }

  &:focus {
    box-shadow: inset 0 0 1px 2px var(--c-primary-1-600);
  }
}

.contact_msg {
  color: var(--c-text-1);
  border-width: 4px;
  border-style: dotted;
  padding: 5px;

  &.is-success {
    border-color: var(--c-success-text);
  }

  &.is-error {
    border-color: red;
  }
}

.contact_btn-sub {
  // background: var(--c-primary-1-700);
  // color: var(--c-text-1-inv);
  // transition: background 0.4s;

  // &:hover,
  // &:focus {
  //   background: var(--c-primary-1-800);
  // }
}
</style>
