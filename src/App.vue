<template>
    <div id="app" class="main">
        <div class="nav">
            <router-link to="/index" class="nav-item">一元购</router-link>
            <router-link to="/record" class="nav-item">参与记录</router-link>
            <router-link to="/my" class="nav-item">我的</router-link>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style lang="less">
@import url('./assets/css/responsive.css');
@import url('./assets/css/normalize.css');
@import url('./assets/css/layout');

.main {
    position: relative;
    .nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        display: flex;
        text-align: center;
        background-color: #333;
        .nav-item {
            flex: 1;
            color: #999;
            &.router-link-active {
                color: #fff;
            }
        }
    }
    .content {

    }
}
</style>
