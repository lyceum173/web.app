

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import NotFound  from '../views/NotFound.vue'
import NewsPageView from '../views/NewsPageView.vue'
import AuthView from '@/views/manager/AuthView.vue'
import UserAuth from '@/views/UserAuth.vue'
import PostsView from '@/views/manager/PostsView.vue'
import PostView from '@/views/manager/PostView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TOSView from '@/views/TOSView.vue'
import DashboardView from '@/views/dashboard/DashboardView.vue'
import SignOut from '@/views/SignOut.vue'
import LoginView from '@/views/nmt/LoginView.vue'
import DashboarView from '@/views/nmt/DashboarView.vue'
import LogsView from '@/views/LogsView.vue'
import DragNDrop from '@/views/nmt/NMTDemo.vue'
import TeacherDashboardView from '@/views/lms/teacher/TeacherDashboardView.vue'
import AllCoursesView from '@/views/lms/teacher/AllCoursesView.vue'
import TeacherNMTView from '@/views/lms/teacher/TeacherNMTView.vue'
import AdminSetup from '@/views/nmt/admin/AdminSetup.vue'
import AdminDashboard from '@/views/nmt/admin/AdminDashboard.vue'
import AdminSessionView from '@/views/nmt/admin/AdminSessionView.vue'
import NMTStartView from '@/views/nmt/NMTStartView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nmt/demo',
      name: 'nmtdemo',
      component: DragNDrop,
    },

    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    },
     {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: TOSView,
    },
    {
      path: '/news/',
      name: 'news',
      component: NewsView,
    },
     {
      path: '/news/:id/',
      name: 'news-view',
      component: NewsPageView,
    },
    {
      path: '/auth/',
      name: 'auth',
      component: UserAuth,
    },
    {
      path: '/signout/',
      name: 'signout',
      component: SignOut,
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/teacher/dashboard',
      name: 'teacher-dashboard',
      component: TeacherDashboardView,
    },
    {
      path: '/teacher/courses/all',
      name: 'teacher-courses-all',
      component: AllCoursesView,
    },
    {
      path: '/teacher/nmt',
      name: 'teacher-nmt',
      component: TeacherNMTView,
    },
    {
      path: '/manager/',
      name: 'manager-auth',
      component: AuthView,
    },
    {
      path: '/manager/posts/',
      name: 'manager-posts',
      component: PostsView,
    },
    {
      path: '/manager/posts/:id/edit',
      name: 'manager-post-edit',
      component: PostView,
    },
    {
      path:  '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
    },
    
    {
      path: '/:pathMatch(.*\\.json)',
      name: 'BlockJSON',
      component: NotFound,
    },
    {
      path: '/nmt/',
      name: 'nmt-login',
      component: LoginView,
    },
     {
      path: '/nmt/dashboard/',
      name: 'nmt-dashboard',
      component: DashboarView,
    },
    {
      path: '/nmt/start/',
      name: 'nmt-start',
      component: NMTStartView,
    },
    {
      path: '/nmt/admin/',
      name: 'nmt-admin',
      component: AdminDashboard,
    },
    // {
    //   path: '/nmt/admin/dashboard',
    //   name: 'nmt-admin-dashboard',
    //   component: AdminDashboard,
    // },
    {
      path: '/nmt/admin/dashboard/course/:id',
      name: 'nmt-admin-dashboard-course',
      component: AdminSessionView,
    },
    {
      path: '/nmt/admin/setup',
      name: 'nmt-admin-setup',
      component: AdminSetup,
    },
    {
      path: '/dev/logs/',
      name: 'dev-logs',
      component: LogsView,
    }
  ],
})

// router.beforeEach((to, from, next) => {
//   console.log(to) // /news/u7k3bn



//   // document.title = to.meta.title || 'EduCheck'
  
//   // document.querySelectorAll('meta[property^="og:"]').forEach(el => el.remove())
  
//   // // Add new OG tags
//   // const metaTags = [
//   //   { property: 'og:title', content: to.meta.og?.title || 'EduCheck' },
//   //   { property: 'og:description', content: to.meta.og?.description || 'EduCheck' },
//   //   { property: 'og:image', content: to.meta.og?.image || 'https://educheck.web.app/' },
//   //   { property: 'og:url', content: window.location.origin + to.fullPath },
//   //   { property: 'og:type', content: 'website' }
//   // ]
  
//   // metaTags.forEach(tag => {
//   //   const meta = document.createElement('meta')
//   //   meta.setAttribute('property', tag.property)
//   //   meta.setAttribute('content', tag.content)
//   //   document.head.appendChild(meta)
//   // })
  
//   next()
// })
export default router