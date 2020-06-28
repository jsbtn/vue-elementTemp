import Layout from '@/components/layout'

const home = {
    path: '/home',
    component: Layout,
    name: "index",
    redirect: '/home/index',
    meta: {
        title: '首页',
        icon: 'adminIndex'
    },
    children: [
        {
            path: 'index',
            component: () => import('@/views/home/index'),
            name: 'index',
            meta: {
                title: '首页',
                icon: 'adminIndex'
            }
        },
        { 
            path: 'detail',
            component: () => import('@/views/home/detail'),
            name: 'detail',
            meta: {
                title: 'detail',
                icon: 'adminabout'
            }
        },

    ]
}



export default home
