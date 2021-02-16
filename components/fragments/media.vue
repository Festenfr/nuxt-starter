<template>
    <component :is="componentId" ref="comp" :data="data"></component>
</template>
<script>
import vImage from '~/components/fragments/image.vue'
import vVideo from '~/components/fragments/video.vue'
export default {
    name: 'VMedia',
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        },
        alt: {
            type: String,
            default: ''
        }
    },
    computed: {
        componentId() {
            return this.data.url.indexOf('.mp4') !== -1 ? vVideo : vImage
        }
    },
    methods: {
        load() {
            this.$refs.comp.load()
        }
    }
}
</script>
