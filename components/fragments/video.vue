<template>
    <div
        class="video"
        :style="{ paddingTop: (data.height / data.width) * 100 + '%' }"
    >
        <video
            ref="video"
            :src="data.url"
            loop
            muted
            playsinline
            preload="none"
            :height="data.height"
            :width="data.width"
        />
        <video
            ref="videoSml"
            :src="data.url.replace('.mp4', '_sml.mp4')"
            loop
            muted
            playsinline
            preload="none"
            :height="data.height"
            :width="data.width"
        />
    </div>
</template>
<script>
export default {
    name: 'VVideo',
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    mounted() {},
    methods: {
        load() {
            const p =
                window.innerWidth < 1000
                    ? this.$refs.videoSml.play()
                    : this.$refs.video.play()
            p &&
                p.catch((e) => {
                    console.warn(e, 'canvas logo')
                })
        }
    }
}
</script>
<style lang="scss">
.video {
    position: relative;
}
.video video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
