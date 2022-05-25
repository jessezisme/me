<template>
    <div class="page_index">
        <!-- intro -->
        <section class="intro">
            <div class="g-container">
                <div class="intro_text">
                    <h1 class="intro_text-lead g-mt-45--lg g-mt-12 g-mb-8 g-lh-xs g-fs-3xl g-fs-5xl--sm">
                        Hi. I'm <span class="is-accent">Jesse</span>, a
                        <span class="is-accent">front-end developer</span> based in
                        <span class="g-icon maple is-accent"></span> Vermont.
                    </h1>
                    <p class="intro_text-sub g-mb-4">
                        Thanks for stopping by. I've been building sites and applications for over 5 years. I'm particularly
                        passionate about web accessibility and enjoy staying up to date on all the latest development tech.
                    </p>
                    <p class="intro_text-sub g-mb-4">
                        While you're here, please feel free to <a class="g-link" href="#about">learn more about me</a>, check
                        out some of my latest <a class="g-link" href="#projects">side projects</a>, and
                        <a class="g-link" href="#contact">contact me</a> if you want to learn more. You can also find me on:
                    </p>
                    <div class="intro_text-soc-links g-fs-xl">
                        <a class="g-link" href="https://github.com/jessezisme" rel="noopener" target="_blank" title="GitHub">
                            <span class="g-icon github"></span>GitHub</a
                        >
                        <a class="g-link" href="https://codepen.io/jessezisme" rel="noopener" target="_blank" title="Codepen"
                            ><span class="g-icon codepen"></span>Codepen</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- projects -->
        <section id="projects" class="proj g-container-pad">
            <div class="g-container">
                <div class="accent-heading_cont">
                    <h2 class="g-m-0 g-mb-8 g-fs-4xl accent-heading">Side Projects</h2>
                </div>
                <p class="g-mb-16">A collection of some of my latest side projects completed outside of work for fun.</p>
            </div>

            <!-- pod nexus -->
            <section class="proj_cont proj_pod-cont g-py-20">
                <div class="g-container">
                    <ProjectFeature
                        class="proj_feature proj_pod g-anim-fade-in"
                        :link-live-url="'https://cryptic-meadow-43049.herokuapp.com'"
                        :link-code-url="'https://github.com/jessezisme/podcast-web-player'"
                        :tech-list="['CSS/SCSS', 'Vue.js', 'Webpack', 'Node.js', 'HTML']"
                    >
                        <template #title>
                            <h3 class="g-fs-3xl">Pod Nexus</h3>
                        </template>
                        <template #body>
                            <p class="g-mb-2">
                                A podcast webplayer with search functionality. Built as a single-page-app (SPA) with Vue.js
                                and Node.js on the front-end and back-end, respectively.
                            </p>
                            <p class="g-fs-xs proj_note">
                                Note: Give it a few seconds to load. It's hosted on a free Heroku server, which goes to sleep
                                when not active.
                            </p>
                        </template>
                        <template #graphic>
                            <img
                                src="~/assets/img/home/podcast.png"
                                alt="Screenshot of Pod Nexus podcast project"
                                loading="lazy"
                            />
                        </template>
                    </ProjectFeature>
                </div>
            </section>

            <!-- 2048 -->
            <section class="proj_cont proj_2048-cont g-py-20">
                <div class="g-container">
                    <ProjectFeature
                        class="proj_feature proj_2048 g-anim-fade-in"
                        :link-live-url="'https://2048ish.netlify.app/'"
                        :link-code-url="'https://github.com/jessezisme/2048-ish'"
                        :link-codepen-url="'https://codepen.io/jessezisme/pen/yKoRWq'"
                        :link-codepen-text="'Codepen (over 7,000 views)'"
                        :tech-list="['CSS/SCSS', 'JavaScript', 'Webpack', 'Netlify', 'HTML']"
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
                            <img src="~/assets/img/home/2048-iphone.png" alt="Screenshot of 2048 project" loading="lazy" />
                        </template>
                    </ProjectFeature>
                </div>
            </section>

            <!-- Farmers Market -->
            <section class="proj_cont proj_farm-cont g-py-20">
                <div class="g-container">
                    <ProjectFeature
                        class="proj_feature proj_farm g-anim-fade-in"
                        :link-live-url="'https://findfarmersmarkets.netlify.app/'"
                        :link-code-url="'https://github.com/jessezisme/farmers-markets'"
                        :tech-list="['TypeScript', 'Vue.js', 'CSS/SCSS', 'Nuxt', 'Netlify']"
                    >
                        <template #title>
                            <h3 class="g-fs-3xl">Find Farmers Markets</h3>
                        </template>
                        <template #body>
                            <p>Search for local farmers markets in your area using the USDA's Farmers Market API.</p>
                        </template>
                        <template #graphic>
                            <img
                                src="~/assets/img/home/farmers-market.png"
                                alt="Screenshot of search page for farmers market project"
                                loading="lazy"
                            />
                        </template>
                    </ProjectFeature>
                </div>
            </section>
        </section>

        <!-- about -->
        <section id="about" class="ab g-mb-16">
            <div class="g-container">
                <div class="accent-heading_cont">
                    <h2 class="g-m-0 g-fs-4xl accent-heading">About</h2>
                </div>

                <div class="ab_grid">
                    <div class="ab_text-cont">
                        <p class="g-mb-4">
                            I initially began coding as a fun hobby, enjoying the mixture of logic and creativity and seeing
                            your ideas deployed live on the web. This led me to change careers and attend a full&hyphen;time
                            developer training program in Portland, Oregon. Since then, I've had the privilege to work with
                            some great people and companies, ranging from e-commerce to a large, international video game
                            maker.
                        </p>
                        <p class="g-mb-4">
                            I enjoy working on collaborative and innovative teams that are always looking for new ways to
                            improve their product. Although I'm not a designer, I have taken some design courses and can
                            always appreciate good color palettes, typography, and UI<span aria-label="and">/</span>UX
                            experiences.
                        </p>
                        <p class="g-mb-8">
                            When I'm not working, I'm usually watching sports (<span aria-label="basketball">🏀</span> and
                            <span aria-label="football">🏈</span>) or mountain biking and hiking outdoors
                            <span aria-hidden="true">🏔️</span>.
                        </p>
                        <div class="ab_learn g-fs-sm">
                            <dl>
                                <dt>Currently Learning:</dt>
                                <dd>Nuxt, a Vue.js framework</dd>
                            </dl>
                            <dl>
                                <dt>Up Next:</dt>
                                <dd>Progressive Web Apps</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="ab_card-cont">
                        <div class="ab_card g-mb-6 g-p-4 g-p-8--sm">
                            <span class="g-icon code g-mb-4"></span>
                            <h3 class="ab_card-title g-mb-4">Front-end Development</h3>
                            <p class="ab_card-text">
                                For over 5 years, I've been building sites optimized for performance, SEO, and accessibility.
                                I've worked on projects utilizing a variety of modern and older tools in all types of
                                environments. This includes frameworks such as Vue.js, Angular, Knockout.js, and jQuery
                                &mdash; just to name a few. These projects range from server-side rendered to client-side
                                rendered Single Page Apps.
                            </p>
                        </div>
                        <div class="ab_card g-mb-6 g-p-4 g-p-8--sm">
                            <span class="g-icon accessible g-mb-4"></span>
                            <h3 class="ab_card-title g-mb-4">Accessibility</h3>
                            <p class="ab_card-text">
                                Sites should be accessible for everyone, so I always create new features with Web Content
                                Accessibility Guidelines (WCAG) in mind. I also have extensive experience fixing
                                accessibility bugs and working in collaboration with accessibility auditors and experts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact  -->
        <section id="contact" class="contact g-mb-16">
            <div class="g-container">
                <div class="accent-heading_cont">
                    <h2 class="g-m-0 g-fs-4xl accent-heading">Contact</h2>
                </div>
                <div class="contact_grid">
                    <div class="contact_text">
                        <p class="g-m-0 g-mb-8">
                            I'm always interested in discussing new projects and opportunities. Feel free to send me a
                            message, and I'll get back to you as soon as I can.
                        </p>
                        <h3 class="contact_sub g-m-0 g-mb-4 g-fs-sm">Coding Socials</h3>
                        <p class="contact_soc">
                            All of my side projects can be found on
                            <a
                                class="g-link"
                                href="https://github.com/jessezisme"
                                rel="noopener"
                                target="_blank"
                                title="GitHub"
                                >GitHub</a
                            >. I also occassionally post some small features to
                            <a
                                class="g-link"
                                href="https://codepen.io/jessezisme"
                                rel="noopener"
                                target="_blank"
                                title="Codepen"
                                >Codepen</a
                            >
                            as well.
                        </p>
                    </div>
                    <div class="contact_form">
                        <ContactForm class="foo" />
                    </div>
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
    .no-wrap {
        white-space: nowrap;
    }
    .accent-heading {
        display: inline-flex;
        align-items: center;

        &::before {
            content: '';
            display: inline-block;
            height: 0.5em;
            width: 0.5em;
            border-radius: 100%;
            background: black;
            margin-right: 15px;
            background: linear-gradient(to right, var(--c-primary-1), var(--c-primary-2));
        }
    }
    .accent-heading_cont {
        padding: 2rem 0 1rem 0;
        margin: 2rem 0 1rem 0;
        position: relative;
    }

    /*=============================================
    =            about            =
    =============================================*/
    .ab_grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }
    .ab_card {
        background: linear-gradient(180deg, var(--c-grey-5), var(--c-grey-10));
        box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;
        border: 1px solid var(--c-primary-1-500);

        .g-icon {
            font-size: 1.75em;
            margin-bottom: 1rem;
            background: linear-gradient(to right, var(--c-primary-1), var(--c-primary-2));
        }
    }
    .ab_card-text {
        font-size: 0.95rem;
    }
    .ab_learn {
        dl,
        dd,
        dt {
            margin: 0;
            padding: 0;
        }
        dl {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            margin-bottom: 1rem;
        }
        dt {
            width: 100%;
            font-weight: bold;
        }
    }
    @include media-breakpoint-up(md) {
        .ab_grid {
            grid-template-columns: 1fr 1fr;
        }
    }
    @include media-breakpoint-up(lg) {
        .ab_learn {
            dt {
                width: auto;
            }
        }
    }
    /*=====  End of about  ======*/

    /*=============================================
    =            intro            =
    =============================================*/
    .intro {
        padding-bottom: 15vh;
        padding-bottom: clamp(150px, 18vh, 400px);
    }
    .intro .is-accent {
        color: var(--c-text-link-1);
    }
    .intro .g-icon.maple {
        font-size: 0.75em;
    }
    .intro .g-icon.is-accent {
        background: var(--c-text-link-1);

        &.maple {
            background: linear-gradient(to right, var(--c-primary-1), var(--c-primary-2));
        }
    }
    .intro_text-lead {
        max-width: 20em;
    }
    .intro_text-sub {
        max-width: 45em;
    }
    .intro_text-soc-links {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    /*=====  End of intro  ======*/

    /*=============================================
    =            project            =
    =============================================*/
    .proj {
        .proj_note {
            font-style: italic;
            font-weight: bold;
        }
        .proj_feature {
            width: 100%;
            max-width: 1300px;
            margin: auto;
            box-shadow: rgb(14 30 37 / 12%) 0px 2px 4px 0px, rgb(14 30 37 / 32%) 0px 2px 16px 0px;
            color: var(--c-text-1-inv);
            background: linear-gradient(to right, var(--c-grey-95), var(--c-grey-90), var(--c-grey-95));
            padding: 30px 15px;
        }
        .proj_pod-cont {
            background: linear-gradient(to right, #24324f, #6c149a, #24324f);
        }
        .proj_2048-cont {
            background: linear-gradient(to right, #2f1f42, #f5d1a5, #2f1f42);
        }
        .proj_farm-cont {
            background: linear-gradient(to right, #2b3201, #f7fecd, #2b3201);
        }

        @include media-breakpoint-up(sm) {
            .proj_feature {
                padding: 45px;
            }
        }
        @include media-breakpoint-up(md) {
            .proj_feature {
                padding: 60px;
            }
        }
    }
    /*=====  End of project  ======*/

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
