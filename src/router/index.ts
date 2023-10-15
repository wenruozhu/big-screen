/*
 * @Description:
 * @Author: Vergil
 * @Date: 2021-09-07 18:04:47
 * @LastEditTime: 2021-09-19 21:59:57
 * @LastEditors: Vergil
 */
// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
