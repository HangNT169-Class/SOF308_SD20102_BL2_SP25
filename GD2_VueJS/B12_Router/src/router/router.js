import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import MayTinhView from '@/views/MayTinhView.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
// B1: Liet ke tat ca cac duong dan
const listRouter = [
  {
    path: '/',
    name: 'HomeView', // ten minh dinh danh cho router
    component: HomeView, // Trang ma router day hien thi
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/may-tinh',
    name: 'MayTinhView1',
    component: MayTinhView,
  },
]

const a = createRouter({
  history: createMemoryHistory(),
  routes: listRouter, // lay toan bo danh sach list router o phia xuong
})

export default a
