import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = r => require.ensure(
    [],
    () => r(require('@/page/Index')),
    'Record'
)
const Record = r => require.ensure(
    [],
    () => r(require('@/page/Record')),
    'Record'
)
const My = r => require.ensure(
    [],
    () => r(require('@/page/My')),
    'Record'
)

export default new Router({
    routes: [
        {
            path: '/index',
            alias: '/',
            name: '一元购',
            component: Index
        },
        {
            path: '/record',
            alias: '/',
            name: '参与记录',
            component: Record
        },
        {
            path: '/my',
            alias: '/',
            name: '我的',
            component: My
        }
    ]
})
