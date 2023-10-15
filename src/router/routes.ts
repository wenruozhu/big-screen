/*
 * @Description:
 * @Author: Vergil
 * @Date: 2021-09-07 18:05:24
 * @LastEditTime: 2021-09-08 16:02:44
 * @LastEditors: Vergil
 */
const home = () => import('@/views/home/index.vue')

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]
export default routes
