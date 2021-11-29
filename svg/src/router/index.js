import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/example',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/ad',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'ad',
        name: 'Ad',
        component: () => import('@/views/ad/ad'),
        meta: { title: 'Ad', icon: 'table' }
      },
      {
        path: 'enginmanage',
        name: 'EnginManage',
        component: () => import('@/views/enginManage/enginManage'),
        meta: { title: 'enginmanage', icon: 'table' }
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/map/map'),
        meta: { title: 'Map', icon: 'tree' }
      },
      {
        path: 'map2',
        name: 'Map2',
        component: () => import('@/views/map/map2'),
        meta: { title: 'Map2', icon: 'tree' }
      },
      {
        path: 'reliability',
        name: 'Reliability',
        component: () => import('@/views/reliability/reliability'),
        meta: { title: 'Reliability', icon: 'tree' }
      },
      {
        path: 'station',
        name: 'Station',
        component: () => import('@/views/station/station'),
        meta: { title: 'Station', icon: 'tree' }
      },
      {
        path: 'pssafe',
        name: 'Pssafe',
        component: () => import('@/views/psSafe/psSafe'),
        meta: { title: 'Pssafe', icon: 'tree' }
      },
      {
        path: 'psunit',
        name: 'Psunit',
        component: () => import('@/views/psUnit/psUnit'),
        meta: { title: 'Psunit', icon: 'tree' }
      },
      {
        path: 'reliabilityreport',
        name: 'Reliabilityreport',
        component: () => import('@/views/reliabilityReport/reliabilityReport'),
        meta: { title: 'Reliabilityreport', icon: 'tree' }
      },
      {
        path: 'psdivision',//供电单元划分
        name: 'Psdivision',
        component: () => import('@/views/psDivision/psDivision'),
        meta: { title: 'Psdivision', icon: 'tree' }
      },
      {
        path: 'psline',//供电单元布线
        name: 'PsLine',
        component: () => import('@/views/psLine/psLine'),
        meta: { title: 'PsLine', icon: 'tree' }
      },
      {
        path: 'reportform1-1',//报表1
        name: 'ReportForm1',
        component: () => import('@/views/reportForm/reportForm1'),
        meta: { title: 'ReportForm1', icon: 'tree' }
      },
      {
        path: 'reportform1-2-1',//报表2
        name: 'ReportForm2',
        component: () => import('@/views/reportForm/reportForm2'),
        meta: { title: 'ReportForm2', icon: 'tree' }
      },
      {
        path: 'reportform1-2-2',//报表3
        name: 'ReportForm3',
        component: () => import('@/views/reportForm/reportForm3'),
        meta: { title: 'ReportForm3', icon: 'tree' }
      },
      {
        path: 'reportform1-2-3',//报表4
        name: 'ReportForm4',
        component: () => import('@/views/reportForm/reportForm4'),
        meta: { title: 'ReportForm4', icon: 'tree' }
      },
      {
        path: 'reportform1-3-1',//报表5
        name: 'ReportForm5',
        component: () => import('@/views/reportForm/reportForm5'),
        meta: { title: 'ReportForm5', icon: 'tree' }
      },
      {
        path: 'reportform1-3-2',//报表6
        name: 'ReportForm6',
        component: () => import('@/views/reportForm/reportForm6'),
        meta: { title: 'ReportForm6', icon: 'tree' }
      },
      {
        path: 'reportform1-3-3',//报表7
        name: 'ReportForm7',
        component: () => import('@/views/reportForm/reportForm7'),
        meta: { title: 'ReportForm7', icon: 'tree' }
      },
      {
        path: 'reportform1-3-4',//报表8
        name: 'ReportForm8',
        component: () => import('@/views/reportForm/reportForm8'),
        meta: { title: 'ReportForm8', icon: 'tree' }
      },
      {
        path: 'reportform1-3-5',//报表9
        name: 'ReportForm9',
        component: () => import('@/views/reportForm/reportForm9'),
        meta: { title: 'ReportForm9', icon: 'tree' }
      },
      {
        path: 'reportform1-3-6',//报表10
        name: 'ReportForm10',
        component: () => import('@/views/reportForm/reportForm10'),
        meta: { title: 'ReportForm10', icon: 'tree' }
      },
      {
        path: 'reportform1-4-1',//报表11
        name: 'ReportForm11',
        component: () => import('@/views/reportForm/reportForm11'),
        meta: { title: 'ReportForm11', icon: 'tree' }
      },
      {
        path: 'reportform1-4-2',//报表12
        name: 'ReportForm12',
        component: () => import('@/views/reportForm/reportForm12'),
        meta: { title: 'ReportForm12', icon: 'tree' }
      },
      {
        path: 'reportform1-4-3-1',//报表13
        name: 'ReportForm13',
        component: () => import('@/views/reportForm/reportForm13'),
        meta: { title: 'ReportForm13', icon: 'tree' }
      },
      {
        path: 'reportform1-4-4-1',//报表14
        name: 'ReportForm14',
        component: () => import('@/views/reportForm/reportForm14'),
        meta: { title: 'ReportForm14', icon: 'tree' }
      },
      {
        path: 'reportform1-4-4-2',//报表15
        name: 'ReportForm15',
        component: () => import('@/views/reportForm/reportForm15'),
        meta: { title: 'ReportForm15', icon: 'tree' }
      },
      {
        path: 'reportform2-12-1',//报表16
        name: 'ReportForm16',
        component: () => import('@/views/reportForm/reportForm16'),
        meta: { title: 'ReportForm16', icon: 'tree' }
      },
      {
        path: 'reportform2-12-2-1',//报表17
        name: 'ReportForm17',
        component: () => import('@/views/reportForm/reportForm17'),
        meta: { title: 'ReportForm17', icon: 'tree' }
      },
      {
        path: 'reportform2-12-2-2',//报表18
        name: 'ReportForm18',
        component: () => import('@/views/reportForm/reportForm18'),
        meta: { title: 'ReportForm18', icon: 'tree' }
      },
      {
        path: 'reportform2-12-2-3',//报表19
        name: 'ReportForm19',
        component: () => import('@/views/reportForm/reportForm19'),
        meta: { title: 'ReportForm19', icon: 'tree' }
      },
      {
        path: 'reportform2-12-3-1',//报表20
        name: 'ReportForm20',
        component: () => import('@/views/reportForm/reportForm20'),
        meta: { title: 'ReportForm20', icon: 'tree' }
      },
      {
        path: 'reportform2-12-3-2',//报表21
        name: 'ReportForm21',
        component: () => import('@/views/reportForm/reportForm21'),
        meta: { title: 'ReportForm21', icon: 'tree' }
      },
      {
        path: 'reportform2-12-3-3',//报表22
        name: 'ReportForm22',
        component: () => import('@/views/reportForm/reportForm22'),
        meta: { title: 'ReportForm22', icon: 'tree' }
      },
      {
        path: 'reportform2-12-3-4',//报表23
        name: 'ReportForm23',
        component: () => import('@/views/reportForm/reportForm23'),
        meta: { title: 'ReportForm23', icon: 'tree' }
      },
      {
        path: 'reportform2-12-4-1',//报表24
        name: 'ReportForm24',
        component: () => import('@/views/reportForm/reportForm24'),
        meta: { title: 'ReportForm24', icon: 'tree' }
      },
      {
        path: 'reportform2-12-4-2',//报表25
        name: 'ReportForm25',
        component: () => import('@/views/reportForm/reportForm25'),
        meta: { title: 'ReportForm25', icon: 'tree' }
      },
      {
        path: 'reportform2-12-5',//报表26
        name: 'ReportForm26',
        component: () => import('@/views/reportForm/reportForm26'),
        meta: { title: 'ReportForm26', icon: 'tree' }
      },
      {
        path: 'reportform2-2-1',//报表27
        name: 'ReportForm27',
        component: () => import('@/views/reportForm/reportForm27'),
        meta: { title: 'ReportForm27', icon: 'tree' }
      },
      {
        path: 'reportform2-3-1-1',//报表28
        name: 'ReportForm28',
        component: () => import('@/views/reportForm/reportForm28'),
        meta: { title: 'ReportForm28', icon: 'tree' }
      },
      {
        path: 'reportform2-3-2-1',//报表29
        name: 'ReportForm29',
        component: () => import('@/views/reportForm/reportForm29'),
        meta: { title: 'ReportForm29', icon: 'tree' }
      },
      {
        path: 'reportform2-3-3-1',//报表30
        name: 'ReportForm30',
        component: () => import('@/views/reportForm/reportForm30'),
        meta: { title: 'ReportForm30', icon: 'tree' }
      },
      {
        path: 'reportform3-1-1',//报表31
        name: 'ReportForm31',
        component: () => import('@/views/reportForm/reportForm31'),
        meta: { title: 'ReportForm31', icon: 'tree' }
      },
      {
        path: 'reportform3-2-1',//报表32
        name: 'ReportForm32',
        component: () => import('@/views/reportForm/reportForm32'),
        meta: { title: 'ReportForm32', icon: 'tree' }
      },
      {
        path: 'reportform4-1-1',//报表33
        name: 'ReportForm33',
        component: () => import('@/views/reportForm/reportForm33'),
        meta: { title: 'ReportForm33', icon: 'tree' }
      },
      {
        path: 'reportform31-1-1',//报表34
        name: 'ReportForm34',
        component: () => import('@/views/reportForm/reportForm34'),
        meta: { title: 'ReportForm34', icon: 'tree' }
      },
      {
        path: 'reportform41-1-1',//报表35
        name: 'ReportForm35',
        component: () => import('@/views/reportForm/reportForm35'),
        meta: { title: 'ReportForm35', icon: 'tree' }
      },
      {
        path: 'reportform41-3-1',//报表36
        name: 'ReportForm36',
        component: () => import('@/views/reportForm/reportForm36'),
        meta: { title: 'ReportForm36', icon: 'tree' }
      },
      {
        path: 'reportform41-2-1',//报表37
        name: 'ReportForm37',
        component: () => import('@/views/reportForm/reportForm37'),
        meta: { title: 'ReportForm37', icon: 'tree' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
