import asyncComponent from './component/async-component/async-component';

const ROUTES = [
  {
    path: '/home',
    component: asyncComponent(() => import('container/home/home'))
  },
  {
    path: '/system/role',
    component: asyncComponent(() => import('container/security/role/role'))
  },
  {
    path: '/system/role/addedit',
    component: asyncComponent(() => import('container/security/role-addedit/role-addedit'))
  },
  {
    path: '/security/role/menu',
    component: asyncComponent(() => import('container/security/role-menu/role-menu'))
  },
  {
    path: '/system/menu',
    component: asyncComponent(() => import('container/security/menu/menu'))
  },
  {
    path: '/system/menu/addedit',
    component: asyncComponent(() => import('container/security/menu-addedit/menu-addedit'))
  },
  {
    path: '/system/user',
    component: asyncComponent(() => import('container/security/user/user'))
  },
  {
    path: '/system/user/addedit',
    component: asyncComponent(() => import('container/security/user-addedit/user-addedit'))
  },
  {
    path: '/system/sysPara',
    component: asyncComponent(() => import('container/security/sysParam/sysParam'))
  },
  {
    path: '/system/sysPara/addedit',
    component: asyncComponent(() => import('container/security/sysParam-addedit/sysParam-addedit'))
  },
  {
    path: '/system/dataDict',
    component: asyncComponent(() => import('container/security/dict/dict'))
  },
  {
    path: '/system/dataDict/addedit',
    component: asyncComponent(() => import('container/security/dict-addedit/dict-addedit'))
  },
  {
    path: '/public/aboutus_addedit',
    component: asyncComponent(() => import('container/public/aboutus-addedit/aboutus-addedit'))
  },
  {
    path: '/security/user/resetPwd',
    component: asyncComponent(() => import('container/security/user-resetPwd/user-resetPwd'))
  },
  {
    path: '/security/user/setRole',
    component: asyncComponent(() => import('container/security/user-setRole/user-setRole'))
  },
  {
    path: '/security/user/setBumen',
    component: asyncComponent(() => import('container/security/user-setBumen/user-setBumen'))
  },
  {
    path: '/security/user/changeMobile',
    component: asyncComponent(() => import('container/security/user-changeMobile/user-changeMobile'))
  },
  {
    path: '/public/banner',
    component: asyncComponent(() => import('container/public/banner/banner'))
  },
  {
    path: '/public/banner/addedit',
    component: asyncComponent(() => import('container/public/banner-addedit/banner-addedit'))
  },
  {
    path: '/public/time_addedit',
    component: asyncComponent(() => import('container/public/time-addedit/time-addedit'))
  },
  {
    path: '/waitList/postRequest',
    component: asyncComponent(() => import('container/waitList/postRequest/postRequest'))
  },
  {
    path: '/waitList/alreadyQuest',
    component: asyncComponent(() => import('container/waitList/alreadyQuest/alreadyQuest'))
  },
  {
    path: '/waitList/postRequest/addedit',
    component: asyncComponent(() => import('container/waitList/postRequest-addedit/postRequest-addedit'))
  },
  {
    path: '/waitList/alreadyQuest/addedit',
    component: asyncComponent(() => import('container/waitList/alreadyQuest-addedit/alreadyQuest-addedit'))
  },
  {
    path: '/waitList/feedback',
    component: asyncComponent(() => import('container/waitList/feedback/feedback'))
  },
  {
    path: '/waitList/feedback/addedit',
    component: asyncComponent(() => import('container/waitList/feedback-addedit/feedback-addedit'))
  },
  {
    path: '/waitList/textMessage',
    component: asyncComponent(() => import('container/waitList/textMessage/textMessage'))
  },
  {
    path: '/waitList/textMessage/addedit',
    component: asyncComponent(() => import('container/waitList/textMessage-addedit/textMessage-addedit'))
  },
  {
    path: '/general/textParam',
    component: asyncComponent(() => import('container/general/text-param/text-param'))
  },
  {
    path: '/general/textParam/addedit',
    component: asyncComponent(() => import('container/general/text-param-addedit/text-param-addedit'))
  },
  {
    path: '/newId/bank',
    component: asyncComponent(() => import('container/newId/bank/bank'))
  },
  {
    path: '/newId/operation',
    component: asyncComponent(() => import('container/newId/operation/operation'))
  },
  {
    path: '/newId/operation/addedit',
    component: asyncComponent(() => import('container/newId/operation-addedit/operation-addedit'))
  },
  {
    path: '/newId/bank/addedit',
    component: asyncComponent(() => import('container/newId/bank-addedit/bank-addedit'))
  },
  {
    path: '/newId/yezhu',
    component: asyncComponent(() => import('container/newId/yezhu/yezhu'))
  },
  {
    path: '/newId/yezhu/addedit',
    component: asyncComponent(() => import('container/newId/yezhu-addedit/yezhu-addedit'))
  },
  {
    path: '/newId/supervise',
    component: asyncComponent(() => import('container/newId/supervise/supervise'))
  },
  {
    path: '/newId/companyConstruct',
    component: asyncComponent(() => import('container/newId/companyConstruct1/companyConstruct1'))
  },
  {
    path: 'newId/companyConstruct/addedit',
    component: asyncComponent(() => import('container/newId/addCompany/addCompany'))
  },
  {
    path: '/newId/companyConstruct/addCompany',
    component: asyncComponent(() => import('container/newId/addCompany/addCompany'))
  },
  {
    path: '/newId/supervise/addedit',
    component: asyncComponent(() => import('container/newId/supervise-addedit/supervise-addedit'))
  }
];

export default ROUTES;
