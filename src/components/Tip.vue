<template>
    <div class="tip-wrapper" v-if="show">
        <div class="content tblrc">
            <p>{{text}}</p>
            <div class="operate">
                <a href="javascript: void(0);" @click="close">ok</a>
                <a href="">cancel</a>
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: 'Tips'
            // default () {
            //     return 'Tips'
            // }
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    watch: {},
    methods: {
        close() {
            this.$emit('tip-close', {a: 1})
        }
    }
}
</script>
<style lang="less" scoped>
.tip-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 0.6rem;
        background: #cb703cf2;
        .operate {
            a {
                display: inline-block;
                padding: 10px;
                color: #fff;
            }
        }
    }
    .mask {

    }
}
</style>
