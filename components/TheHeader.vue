<template>
    <header ref="header" class="header" @focusout="trapFocus($event, isMobileMenuShown)">
        <nav class="header_nav">
            <div class="g-container">
                <div class="header_nav-in">
                    <div class="header_home">
                        <client-only>
                            <transition
                                appear
                                appear-class="anim-slide-in--from"
                                appear-to-class="anim-slide-in--to"
                                appear-active-class="anim-slide-in--active"
                                @after-appear="transitionAppearComplete"
                            >
                                <button
                                    ref="header-home"
                                    class="header_home-btn"
                                    title="Back to Top"
                                    @click="scrollToTop(), toggleMobileMenu(false)"
                                >
                                    <span class="g-icon maple header_home-logo">
                                        <span class="g-sr-only">Back to Top</span>
                                    </span>
                                </button>
                            </transition>
                        </client-only>
                    </div>
                    <!-- mobile menu toggle -->
                    <client-only>
                        <template v-if="isMobileMenuSize">
                            <button
                                class="menu-btn menu-btn_rotate"
                                :class="{
                                    'is-open': isMobileMenuToggledOpen,
                                }"
                                @click="toggleMobileMenu"
                            >
                                <span class="g-sr-only">{{ isMobileMenuToggledOpen ? 'Close' : 'Open' }} Menu</span>
                                <span class="menu-btn_outer">
                                    <span class="menu-btn_inner"> </span>
                                </span>
                            </button>
                        </template>
                        <!-- full size menu links -->
                        <template v-else>
                            <div class="header_anchors g-fs-sm">
                                <transition
                                    appear
                                    appear-class="anim-slide-in--from"
                                    appear-to-class="anim-slide-in--to"
                                    appear-active-class="anim-slide-in--active is-sequence"
                                    @after-appear="transitionAppearComplete"
                                >
                                    <span>
                                        <a class="g-link" href="#projects">projects</a>
                                    </span>
                                </transition>
                                <transition
                                    appear
                                    appear-class="anim-slide-in--from"
                                    appear-to-class="anim-slide-in--to"
                                    appear-active-class="anim-slide-in--active is-sequence"
                                    @after-appear="transitionAppearComplete"
                                >
                                    <span>
                                        <a class="g-link" href="#about">about</a>
                                    </span>
                                </transition>
                                <transition
                                    appear
                                    appear-class="anim-slide-in--from"
                                    appear-to-class="anim-slide-in--to"
                                    appear-active-class="anim-slide-in--active is-sequence"
                                    @after-appear="transitionAppearComplete"
                                >
                                    <span>
                                        <a class="g-link" href="#contact">contact</a>
                                    </span>
                                </transition>
                            </div>
                        </template>
                    </client-only>
                </div>
            </div>
        </nav>

        <transition
            enter-class="anim-slide-in--from"
            enter-to-class="anim-slide-in--to"
            enter-active-class="anim-slide-in--active"
            leave-class="anim-slide-in--to"
            leave-active-class="anim-slide-in--active"
            leave-to-class="anim-slide-in--from"
        >
            <nav v-if="isMobileMenuShown" ref="header-mobile-overlay" class="header_over">
                <ul>
                    <li><a class="g-link" href="#projects" @click="toggleMobileMenu(false)">projects</a></li>
                    <li><a class="g-link" href="#about" @click="toggleMobileMenu(false)">about</a></li>
                    <li><a class="g-link" href="#contact" @click="toggleMobileMenu(false)">contact</a></li>
                </ul>
            </nav>
        </transition>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',
        data() {
            return {
                eventListenerArray: [],
                breakpoint: '',
                isMobileMenuToggledOpen: false,
                mobileMenuBodyClass: 'mobile-menu-open',
            };
        },
        computed: {
            isMobileMenuSize() {
                const mobileSizes = ['xs', 'sm'];
                return mobileSizes.includes(this.breakpoint);
            },
            isMobileMenuShown() {
                return this.isMobileMenuToggledOpen && this.isMobileMenuSize;
            },
        },
        watch: {
            isMobileMenuShown(newValue) {
                if (newValue === true) {
                    document.body.classList.add(this.mobileMenuBodyClass);
                } else {
                    document.body.classList.contains(this.mobileMenuBodyClass) &&
                        document.body.classList.remove(this.mobileMenuBodyClass);
                }
            },
        },
        beforeMount() {
            this.initBreakpointCheck();
        },
        destroyed() {
            this.removeAllEventListeners();
            document.body.classList.contains(this.mobileMenuBodyClass) &&
                document.body.classList.remove(this.mobileMenuBodyClass);
        },
        methods: {
            trapFocus(event, trapCondition) {
                const self = this;
                const detectFocus = () => {
                    const headerEl = self?.$refs?.header;
                    const homeLogo = self?.$refs['header-home'];
                    const inFocus = headerEl && headerEl.contains(document.activeElement);

                    document.removeEventListener('focusin', detectFocus);

                    if (!inFocus) {
                        homeLogo.focus();
                    }
                };

                if (trapCondition) {
                    document.addEventListener('focusin', detectFocus, { once: true });
                }
            },
            createEventListener(el, event, callback, options) {
                options ? el.addEventListener(event, callback, options) : el.addEventListener(event, callback);
                this.eventListenerArray.push({
                    el,
                    event,
                    callback,
                });
            },
            removeAllEventListeners() {
                this.eventListenerArray.forEach((val) => {
                    val.el.removeEventListener(val.event, val.callback);
                });
                this.eventListenerArray = [];
            },
            initBreakpointCheck() {
                this.checkBreakpoint();
                if (screen && screen.orientation) {
                    screen.orientation.onchange = () => {
                        this.checkBreakpoint();
                    };
                }
                this.createEventListener(window, 'resize', this.checkBreakpoint, { passive: true });
            },
            checkBreakpoint() {
                const getBreakpoint = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint');
                this.breakpoint = getBreakpoint.trim();
            },
            toggleMobileMenu(setValue) {
                if (setValue === true || setValue === false) {
                    this.isMobileMenuToggledOpen = setValue;
                } else {
                    this.isMobileMenuToggledOpen = !this.isMobileMenuToggledOpen;
                }
            },
            transitionAppearComplete(el) {
                el.classList.add('has-shown');
            },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
        },
    };
</script>

<style>
    body.mobile-menu-open {
        overflow: hidden;
    }
</style>

<style lang="scss" scoped>
    $header-z-index: map-get($z-index, 7);
    $header-bg-z-index: map-get($z-index, 6);
    .header {
        --header-height: 3.5rem;
    }

    /*=============================================
    =            animations            =
    =============================================*/
    .anim-slide-in {
        &--from {
            transform: translateY(-200%);
            opacity: 0;
        }
        &--to {
            transform: translateY(0);
            opacity: 1;
        }
        &--active {
            transition-property: opacity, transform;
            transition-duration: 0.4s;
        }
        @for $i from 1 through 5 {
            &--active:nth-child(#{$i}).is-sequence {
                transition-delay: #{0.4 + (0.2 * $i)}s;
                transition-property: opacity, transform;
                transition-duration: var(--animation-duration);
            }
        }
        .has-shown {
            transition-duration: 0 !important;
        }
    }

    .anim-slide-left {
        &--from {
            transform: translateY(400%);
        }
        &--to {
            transform: translateY(0);
        }
    }

    /*=====  End of animations  ======*/

    .header_nav,
    .header {
        min-height: 3.5em;
    }

    .header_nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 0.5rem;
        z-index: $header-z-index;
        background: var(--c-bg-1);

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to right, var(--c-primary-1), var(--c-primary-2));
            transform: translateY(calc(50% - 1px));
        }
    }

    .header_nav-in {
        display: flex;
        flex-wrap: nowrap;
        gap: 30px;
        align-items: center;
        justify-content: space-between;
    }

    .header_home-btn {
        display: inline-block;
        font-size: 1rem;
        background: none;
        margin: 0;
        padding: 0;
        text-transform: none;
        border: none;
        line-height: inherit;
        cursor: pointer;
        animation-delay: 0.4s;
    }
    .header_home-logo {
        width: 2.5rem;
        height: 2.5rem;
        background: linear-gradient(to right, var(--c-primary-1), var(--c-primary-2));
    }
    .header_anchors {
        display: flex;
        align-items: center;
        gap: 15px;

        span {
            display: inline-block;
        }
    }

    /*=============================================
    =            mobile menu overlay            =
    =============================================*/
    .header_over {
        position: fixed;
        z-index: $header-bg-z-index;
        width: 100%;
        left: 0;
        right: 0;
        height: 100vh;
        overflow: auto;
        top: var(--header-height);
        background: var(--c-grey-95);
        color: var(--c-text-1);
        text-align: center;

        ul,
        li {
            padding: 0;
            margin: 0;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 45px;
            padding-top: 45px;
            list-style: none;
        }
        a {
            font-size: var(--font-size-lg);
            color: var(--c-text-link-1-inv);
        }
    }

    /*=====  End of mobile menu overlay  ======*/

    /*=============================================
    =            mobile menu button             =
    =============================================*/
    .menu-btn {
        display: inline-block;
        width: 40px;
        height: 40px;
        padding: 5px;
        border: 2px solid var(--c-text-link-1);
        border-radius: 4px;
    }
    /*----------  rotate version  ----------*/
    .menu-btn_rotate {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        transition-duration: 0.3s;

        .menu-btn_outer {
            width: 100%;
            height: 100%;
            position: relative;
            flex-grow: 1;
            transition-duration: inherit;
        }
        .menu-btn_outer::before,
        .menu-btn_outer::after {
            content: '';
        }
        .menu-btn_outer::before,
        .menu-btn_outer::after,
        .menu-btn_inner {
            display: inline-block;
            width: 100%;
            height: 4px;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            border-top: 4px solid var(--c-text-link-1);
            border-radius: 4px;
            transition-duration: inherit;
        }

        /*----------  closed state  ----------*/
        // top line
        .menu-btn_outer::before {
            top: 0;
            transition-property: top, transform;
        }
        // middle line
        .menu-btn_inner {
            top: 50%;
            transform: translateY(-50%);
            transition-property: transform, opacity, width;
        }
        // bottom line
        .menu-btn_outer::after {
            top: 100%;
            transform: translateY(-100%);
            transition-property: top, transform;
        }

        /*----------  open state  ----------*/
        &.is-open {
            // top line
            .menu-btn_inner {
                width: 0;
                opacity: 0;
                transform: scale(0);
            }
            // middle line
            .menu-btn_outer::before {
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
            }
            // bottom line
            .menu-btn_outer::after {
                top: 50%;
                transform: translateY(-50%) rotate(-45deg);
            }
        }
    }
    /*=====  End of mobile menu button   ======*/
</style>
