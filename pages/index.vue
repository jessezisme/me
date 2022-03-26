<template>
    <div class="page_index">
        <section class="intro">
            <div class="g-container-pad">
                <div class="intro_lead">
                    <h1 class="intro_lead1 g-m-0 g-mt-4 g-mb-8 g-lh-xs g-fs-4xl">
                        Hi. I'm <span class="is-accent">Jesse</span>.
                    </h1>
                    <h2 class="intro_lead2 g-m-0 g-mb-12 g-lh-xs g-fs-4xl">
                        I'm a <span class="is-accent">front-end developer</span> based in Vermont.
                    </h2>
                    <p class="intro_lead3">Lorem Ipsum....</p>
                </div>
            </div>

            <div class="bg-lines" role="presentation">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>

        <section class="proj g-container-pad">
            <h2 class="g-m-0 g-mb-12 g-fs-4xl contact_head">Projects</h2>
            <p>A collection of some of my latest side projects completed outside of work for fun.</p>

            <ProjectFeature
                class="g-mt-24 g-mb-12"
                :link-live-url="'https://2048ish.netlify.app/'"
                :link-code-url="'https://github.com/jessezisme/2048-ish'"
                :tech-list="['HTML', 'CSS / SCSS', 'JavaScript', 'Webpack', 'Netlify']"
            >
                <template #title>
                    <h3 class="g-fs-3xl">2048-ish</h3>
                </template>
                <template #body>
                    <p>
                        A complete re-build of the popular 2048 game, a sliding block puzzle game. It can be pretty
                        addicting.
                    </p>
                </template>
                <template #graphic>
                    <img src="~/assets/img/home/2048-iphone.png" alt="Screenshot of 2048 project" />
                </template>
            </ProjectFeature>

            <ProjectFeature
                class="g-mt-24 g-mb-12"
                :link-live-url="'https://2048ish.netlify.app/'"
                :link-code-url="'https://github.com/jessezisme/2048-ish'"
                :tech-list="['HTML', 'CSS / SCSS', 'JavaScript', 'Webpack', 'Netlify']"
                :reverse-order="true"
            >
                <template #title>
                    <h3 class="g-fs-3xl">2048-ish</h3>
                </template>
                <template #body>
                    <p>
                        A complete re-build of the popular 2048 game, a sliding block puzzle game. It can be pretty
                        addicting.
                    </p>
                </template>
                <template #graphic>
                    <img src="~/assets/img/home/2048-iphone.png" alt="Screenshot of 2048 project" />
                </template>
            </ProjectFeature>
        </section>

        <section class="contact g-container-pad">
            <h2 class="g-m-0 g-mb-12 g-fs-4xl contact_head">Contact</h2>
            <div class="contact_grid">
                <div class="contact_text">
                    <p class="g-m-0 g-mb-8">
                        I'm always interested in discussing new projects and opportunities. Feel free to send me a message,
                        and I'll get back to you as soon as I can.
                    </p>
                    <h3 class="contact_sub g-m-0 g-mb-4 g-fs-sm">Review the Code</h3>
                    <p class="contact_soc">
                        All of my side projects can be found on
                        <a class="g-link" href="https://github.com/jessezisme" rel="noopener" target="_blank">
                            <span class="g-icon github"></span> GitHub</a
                        >. I also occassionally post some small features to
                        <a class="g-link" href="https://github.com/jessezisme" rel="noopener" target="_blank">
                            <span class="g-icon codepen"></span> Codepen</a
                        >
                        as well.
                    </p>
                </div>
                <div class="contact_form">
                    <ContactForm class="foo" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'PageIndex',
    };
</script>

<style lang="scss" scoped>
    /*=============================================
    =            intro            =
    =============================================*/
    .intro .is-accent {
        color: var(--color-text-link-1);
    }
    .intro_lead1 {
        font-size: 2.5rem;
    }
    .intro_lead2 {
        max-width: 15em;
        font-weight: bold;

        .is-accent {
            font-weight: bold;
        }
    }
    /*=====  End of intro  ======*/

    /*=============================================
    =            decorative lines            =
    =============================================*/
    .bg-lines {
        > div {
            height: 50px;
            width: 100%;
            position: relative;
            filter: blur(0.5px);

            &::before,
            &::after {
                content: '';
                width: 50vw;
                height: inherit;
                display: block;
                z-index: -1;
                position: absolute;
                transform: translateY(50%);
                background: inherit;
            }
            &::before {
                right: calc(100% - 1px);
                transform-origin: bottom right;
                transform: skewY(5deg);
            }
            &::after {
                left: calc(100% - 1px);
                transform-origin: top left;
                transform: skewY(-5deg);
            }
        }
        > div:nth-child(1) {
            background: var(--color-acc-1-200);
        }
        > div:nth-child(2) {
            background: var(--color-acc-1-400);
        }
        > div:nth-child(3) {
            background: var(--color-acc-1-600);
        }
        > div:nth-child(4) {
            background: var(--color-acc-1-800);
        }
    }

    /*=====  End of decorative lines  ======*/

    /*=============================================
    =            contact            =
    =============================================*/
    .contact_grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }

    /*----------  contact: media queries  ----------*/
    @include media-breakpoint-up(lg) {
        .contact_grid {
            display: grid;
            grid-template-columns: 40% 1fr;
            gap: 60px;
        }
    }
    /*=====  End of contact  ======*/
</style>
