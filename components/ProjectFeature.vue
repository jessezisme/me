<template>
    <div
        class="feat"
        :class="{
            'is-reverse': reverseOrder,
        }"
    >
        <div class="feat_desc">
            <div class="feat_desc-title">
                <slot name="title"></slot>
            </div>
            <div class="feat_desc-body">
                <div class="feat_desc-text g-mb-4">
                    <slot name="body"></slot>
                </div>
                <ul class="g-mb-8">
                    <li v-for="(item, index) in techList" :key="index">{{ item }}</li>
                </ul>
                <div class="feat_cta-cont g-mt-8">
                    <span class="g-mb-4">
                        <a :href="linkLiveUrl" class="g-link" rel="noopener" target="_blank">
                            <span class="g-icon bolt"></span>
                            {{ linkLiveText }}
                        </a>
                    </span>
                    <span class="g-mb-4">
                        <a :href="linkCodeUrl" class="g-link" rel="noopener" target="_blank">
                            {{ linkCodeText }}
                        </a>
                    </span>
                </div>
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
        background: var(--color-grey-10);
        border-radius: 1px;
        color: var(--color-grey-95);
    }
    /*=====  End of base styling  ======*/

    .feat {
        display: flex;
        flex-direction: column;
        gap: 4rem 2rem;
    }
    .feat_cta-cont {
        display: flex;
        flex-direction: column;
    }
    // featured screenshot
    .feat_img-cont {
        display: flex;
        width: 100%;
        height: 375px;
        align-items: center;
        justify-content: center;
        background: var(--color-grey-10);
        border-radius: 8px;

        img,
        svg {
            max-width: calc(100% - 20px);
            max-height: calc(100% - 20px);
        }
    }

    @include media-breakpoint-up(lg) {
        .feat {
            flex-direction: row;

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
