<template>
    <div
        class="feat"
        :class="{
            'is-reverse': reverseOrder,
        }"
    >
        <div class="feat_desc">
            <div class="feat_desc-title g-mb-8">
                <slot name="title"></slot>
            </div>
            <div class="feat_desc-body">
                <div class="feat_desc-text g-mb-6">
                    <slot name="body"></slot>
                </div>
                <div class="feat_cta-cont g-mb-6">
                    <span class="g-mb-4">
                        <a :href="linkLiveUrl" class="g-link" rel="noopener" target="_blank">
                            <span class="g-icon bolt"></span>
                            {{ linkLiveText }}
                        </a>
                    </span>
                    <span v-if="linkCodepenUrl" class="g-mb-4">
                        <a :href="linkCodepenUrl" class="g-link" rel="noopener" target="_blank">
                            <span class="g-icon codepen"></span>
                            {{ linkCodepenText }}
                        </a>
                    </span>
                    <span class="g-mb-4">
                        <a :href="linkCodeUrl" class="g-link" rel="noopener" target="_blank">
                            <span class="g-icon github"></span>
                            {{ linkCodeText }}
                        </a>
                    </span>
                </div>
                <ul class="g-mb-8">
                    <li v-for="(item, index) in techList" :key="index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <a :href="linkLiveUrl" target="_blank" class="feat_img-cont">
            <slot name="graphic"></slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'ProjectFeature',
        props: {
            reverseOrder: {
                type: Boolean,
                default: false,
            },
            techList: {
                type: Array,
                default: () => [],
                required: true,
            },
            linkLiveUrl: {
                type: String,
                default: '',
                required: true,
            },
            linkLiveText: {
                type: String,
                default: 'Visit Project',
            },
            linkCodeUrl: {
                type: String,
                default: '',
                required: true,
            },
            linkCodeText: {
                type: String,
                default: 'Source Code',
            },
            linkCodepenUrl: {
                type: String,
                default: '',
                required: false,
            },
            linkCodepenText: {
                type: String,
                default: '',
                required: false,
            },
        },
    };
</script>

<style lang="scss" scoped>
    /*=============================================
    =            base styling            =
    =============================================*/
    ul {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        flex-direction: row;
        list-style: none;
    }
    ul,
    li {
        margin: 0;
        padding: 0;
    }
    li {
        display: inline-block;
        padding: 5px;
        font-size: var(--font-size-sm);
        background: var(--c-grey-80);
        border-radius: 4px;
        color: var(--c-grey-10);
    }
    a {
        color: var(--c-text-link-1-inv);
        font-weight: normal;
    }
    a .g-icon {
        background: var(--c-text-link-1-inv);
    }
    /*=====  End of base styling  ======*/

    .feat {
        display: flex;
        flex-direction: column;
        padding: 30px;
        background: var(--c-grey-10);
        gap: 1.5rem;
    }
    .feat_cta-cont {
        display: flex;
        flex-direction: column;
    }
    .feat_img-cont {
        display: flex;
        width: 100%;
        height: 325px;
        align-items: center;
        justify-content: center;

        img,
        svg {
            max-width: calc(100% - 20px);
            max-height: calc(100% - 20px);
        }
    }

    @include media-breakpoint-up(lg) {
        .feat {
            flex-direction: row;
            gap: 1rem;

            &.is-reverse {
                flex-direction: row-reverse;
            }
        }
        .feat_desc,
        .feat_img-cont {
            width: 50%;
        }
        .feat_img-cont {
            height: 425px;
        }
    }
</style>
