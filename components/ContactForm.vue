<template>
    <div class="contact-form_cont">
        <form
            ref="contact-form"
            :class="{
                'is-disabled': contactFormSubmitInProgress,
            }"
            class="contact-form g-p-4 g-p-8--lg"
            name="contact"
            method="POST"
            data-netlify="true"
            novalidate
            @submit.prevent="runSubmitForm"
        >
            <div class="hide-field">
                <!-- used by netlify to detect form, will break without it -->
                <input type="hidden" name="form-name" value="contact" aria-label="ignore" />
            </div>
            <div class="contact-form_row">
                <label :for="`name-${uuid}`">Your Name: </label>
                <input :id="`name-${uuid}`" ref="name" v-model.trim="contactFormName" type="text" name="name" required />
            </div>
            <div class="contact-form_row">
                <label :for="`email-${uuid}`">Your Email: </label>
                <input
                    :id="`email-${uuid}`"
                    ref="email"
                    v-model.trim="contactFormEmail"
                    type="email"
                    name="email"
                    required
                />
            </div>
            <div class="contact-form_row">
                <label :for="`message-${uuid}`">Message: </label>
                <textarea
                    :id="`message-${uuid}`"
                    ref="message"
                    v-model.trim="contactFormMessage"
                    name="message"
                    maxlength="2500"
                    required
                ></textarea>
            </div>
            <div class="contact-form_row g-m-0">
                <button type="submit" class="contact_btn-sub">Send</button>
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

<script>
    import { v4 as uuidv4 } from 'uuid';

    export default {
        name: 'ContactForm',
        data() {
            return {
                uuid: '',
                contactFormSubmitInProgress: false,
                contactFormSuccessMsg: '',
                contactFormErrorMsg: '',
                contactFormName: '',
                contactFormEmail: '',
                contactFormMessage: '',
            };
        },
        mounted() {
            this.uuid = uuidv4();
        },
        methods: {
            resetSubmitMessage() {
                this.contactFormSuccessMsg = '';
                this.contactFormErrorMsg = '';
            },

            resetForm() {
                this.contactFormSubmitInProgress = false;
                this.contactFormSuccessMsg = '';
                this.contactFormErrorMsg = '';
                this.contactFormName = '';
                this.contactFormEmail = '';
                this.contactFormMessage = '';
            },

            runSubmitForm(event) {
                const contactFormElement = this.$refs['contact-form'];
                const shouldAllowSubmit =
                    !this.contactFormSubmitInProgress && contactFormElement && contactFormElement.reportValidity();
                let formData;
                let formDataBody;

                this.resetSubmitMessage();

                if (shouldAllowSubmit) {
                    formData = new FormData(contactFormElement);
                    formDataBody = new URLSearchParams(formData).toString();
                    this.contactFormSubmitInProgress = true;

                    this.$axios({
                        method: 'post',
                        url: '',
                        data: formDataBody,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    })
                        .then((response) => {
                            this.resetForm();
                            this.contactFormSuccessMsg = 'Thanks. 10-4, message received, the eagle has landed, etc.. ';
                        })
                        .catch((response) => {
                            this.contactFormErrorMsg =
                                'Sorry - an error occurred during submission. I really dropped the ball on this one.';
                        })
                        .then((response) => {
                            this.contactFormSubmitInProgress = false;
                        });
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    .hide-field {
        display: none;
    }

    .contact-form {
        border: 5px solid var(--c-primary-1-600);
        border-radius: 8px;
    }
    .contact-form_row {
        margin-bottom: 2rem;
    }
    form {
        transition-property: filter, opacity;
        transition-duration: 0.4s;

        &.is-disabled {
            filter: blur(0.25em);
            opacity: 0.85;
        }
    }
    label {
        display: inline-block;
        font-size: var(--font-size-md);
        margin-bottom: 1rem;
        font-weight: bold;
    }
    button,
    textarea,
    input {
        display: inline-block;
        width: 100%;
        border: 3px solid var(--c-grey-90);
        padding: 15px 10px;
        outline: 0;
        background-color: transparent;
        transition: 0.3s border;
        border-radius: 3px;
        appearance: none;
        transition: border, box-shadow;
        transition-duration: 0.4s;
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
    textarea {
        min-height: 10em;
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
        background: var(--c-primary-1-700);
        color: var(--c-text-1-inv);
        transition: background 0.4s;

        &:hover,
        &:focus {
            background: var(--c-primary-1-800);
        }
    }
</style>
