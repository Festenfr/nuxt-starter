<template>
    <div class="loader">
        <v-logo />
        <v-logo class="logo" />
        <v-logo class="logo" />
        <v-logo class="logo" />
        <v-logo class="logo" />
    </div>
</template>

<script>
import vLogo from '~/assets/svgs/logo.svg?inline'
import { mapActions } from 'vuex'
export default {
    name: 'Loader',
    components: { vLogo },
    mounted() {
        this.svgs = [].slice.call(this.$el.querySelectorAll('svg'))
        this.logos = [].slice.call(this.$el.querySelectorAll('.logo'))
        this.$nextTick(() => {
            this.logoAnimation()
        })
    },
    methods: {
        ...mapActions(['set']),
        logoAnimation() {
            this.logos.forEach((el, i) => {
                window.gsap
                    .fromTo(
                        el,
                        { scaleX: 0, scaleY: 0 },
                        {
                            scaleX: 1,
                            scaleY: 1,
                            duration: 0.8,
                            delay: 0.2 * i,
                            ease: 'power4.in'
                        }
                    )
                    .then(() => {
                        this.svgs[i].style.display = 'none'
                    })
            })
            gsap.to(this.$el, {
                autoAlpha: 0,
                duration: 0.1,
                ease: 'power3.out',
                delay: 1.4
            }).then(() => {
                this.set({ property: 'isLoaderAnimationDone', value: true })
            })
        }
    }
}
</script>

<style lang="scss">
.loader {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transform-origin: 50% 0%;
    z-index: 10;
    svg:nth-child(2) {
        fill: $white;
    }
    svg:nth-child(3) {
        fill: $primary;
    }
    svg:nth-child(4) {
        fill: $secondary;
    }
    svg:nth-child(5) {
        fill: $black;
    }

    svg {
        position: absolute;
        transform: none;
        fill: currentColor;
        top: vw(39.75);
        left: vw(39.75);
        width: vw(45.5);
        height: vw(45.5);
        display: block;
        @include below(medium) {
            top: vwM(30);
            left: vwM(20);
            width: vwM(45);
            height: vwM(45);
        }
    }
}
</style>
