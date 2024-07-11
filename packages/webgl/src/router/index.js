import { createRouter, createWebHashHistory } from 'vue-router' import layout
from '@vue-demo/components/Layout' import { basis } from './basis' import {
matrix } from './matrix' import { texture } from './texture' export const routes
= [ { path: '/', component: layout, redirect: '/圆形', children: basis, meta: {
name: '基本图形' } }, { path: '/matrix', component: layout, redirect:
'/translate', meta: { name: '矩阵' }, children: matrix }, { path: '/texture',
component: layout, redirect: '/多点异色', meta: { name: '纹理和颜色' },
children: texture } ] export const router = createRouter({ history:
createWebHashHistory(), routes }) export function setupRouter(app) {
app.use(router) }
