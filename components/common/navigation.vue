<template>
    <nav class="navigation">
        <nuxt-link
            :to="{ name: 'index' }"
            class="home"
            @click.native="onLogoClicked"
            @mouseenter.native="onLogoEnter"
            ><v-logo
        /></nuxt-link>
        <nuxt-link :to="{ name: 'work' }" class="projects">Projects</nuxt-link>
        <nuxt-link :to="{ name: 'about' }" class="about">About </nuxt-link>
    </nav>
</template>

<script>
import vLogo from '~/assets/svgs/logo.svg?inline'
// import transform from 'dom-transform'
// import ScrollHelper from '~/assets/js/utils/ScrollHelper'
// import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'Navigation',
    components: { vLogo },
    data() {
        return {}
    },
    mounted() {
        this.$el.style.opacity = 1
        const stagger = [
            this.$el.querySelector('.projects'),
            this.$el.querySelector('.about')
        ]
        window.gsap.fromTo(
            stagger,
            { opacity: 0 },
            {
                opacity: 1,
                delay: 1.2,
                duration: 2,
                stagger: 0.6,
                ease: 'power2.out',
                clearProps: 'all'
            }
        )
    },
    methods: {
        onLogoClicked() {},
        onLogoEnter() {},
        resize(w, h, ph) {
            this.w = w
            this.h = h
            this.ph = ph
            this.top = this.ph - this.h - this.h
        }
    }
}
</script>

<style lang="scss">
.navigation {
    position: fixed;
    top: 0;
    opacity: 0;
    width: 100vw;
    font-size: vw(14);
    height: 100vh;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    pointer-events: none;
    z-index: 5;
    .home {
        position: absolute;
        top: vw(40);
        left: vw(40);
        width: vw(45);
        height: vw(45);

        svg {
            display: block;
            fill: currentColor;
        }
    }
    a {
        color: currentColor;
        pointer-events: auto;
    }
    a.about {
        top: vw(40);
        right: vw(60);
        transform-origin: 0% 0%;
        padding: vw(21) vw(16) vw(23);
    }
    a.projects {
        right: vw(150);
        top: vw(40);
        padding: vw(22) vw(16) vw(22);
    }
    a.projects,
    a.about {
        position: absolute;
        font-weight: normal;
        display: block;
        line-height: 1;
        .hover {
            display: block;
            position: absolute;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(-1, -1);
            fill: none;
            stroke: currentColor;
        }
    }
    @include below(medium) {
        font-size: vwM(14);
        .home {
            top: vwM(30);
            left: vwM(20);
            width: vwM(45);
            height: vwM(45);
        }
        a.about {
            top: vwM(30);
            right: vwM(20);
        }

        a.projects {
            right: vwM(100);
            top: vwM(30);
        }
        a.projects {
            padding: vwM(22) vwM(16) vwM(22);
        }
        a.about {
            padding: vwM(21) vwM(16) vwM(23);
        }
    }
}
</style>
