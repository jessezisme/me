<template>
    <footer class="footer">
        <div class="g-container">
            <div class="footer_in">
                <div class="footer_text">
                    Made in Vermont, the Sunshine State.<br />
                    <a class="g-link" href="https://github.com/jessezisme/me" rel="noopener">Source Code on Github</a>
                </div>
                <div class="footer_links">
                    <a href="https://github.com/jessezisme/me" rel="noopener"
                        ><span class="g-icon github" title="GitHub"><span class="g-sr-only">Github</span></span></a
                    >
                    <a href="https://github.com/jessezisme/me" rel="noopener"
                        ><span class="g-icon codepen" title="Codepen"><span class="g-sr-only">Codepen</span></span></a
                    >
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'TheFooter',
    };
</script>

<style lang="scss" scoped>
    .footer {
        padding: 4rem 0;
        color: var(--c-text-1-inv);
        background: var(--c-grey-90);
        font-size: 0.9rem;
    }
    a,
    .g-icon {
        color: var(--c-text-link-1-inv);
    }
    .g-icon {
        background: var(--c-text-link-1-inv);
    }
    .footer_in {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
        align-items: flex-start;
    }
    .footer_links {
        display: flex;
        gap: 15px;
        flex-wrap: nowrap;
        align-items: center;
    }
    .footer_links a {
        font-size: 1.25rem;
        text-decoration: none;
    }
</style>
