<template>
    <div>
        <p>首页</p>
        <Tip
            :text="tip.text"
            :show="tip.show"
            @tip-close="onCloseTip"
        ></Tip>
        <button @click="showTip()">显示tip</button>
    </div>
</template>

<script>
import Tip from '@/components/Tip'
export default {
    components: {
        Tip
    },
    data () {
        return {
            tip: {
                text: '知道了',
                show: false
            }
        }
    },
    mounted() {

    },
    methods: {
        showTip(text) {
            this.tip.show = true;
            if (text) this.tip.text = text;
        },
        hideTip() {
            this.tip.show = true;
        },
        onCloseTip (res) {
            this.tip.show = false;

            console.log(res)
        }
    }
}
</script>
<style lang="less" scoped>

</style>
