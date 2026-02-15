// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
        {
          name: 'signup',
          path: '/user/signup',
          component: './user/signup',
        },
        {
          name: 'inviteUser',
          path: '/user/forgotpassword',
          component: './user/ForgotPassword',
        },
        {
          name: 'resetPassword',
          path: '/user/resetpassword',
          component: './user/ResetPassword',
        },
        {
          name: 'inviteUser',
          path: '/user/invitedUserLogin',
          component: './user/acceptInvitation',
        },
      ],
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: './Policy',
    },
    {
      path: '/child-safety',
      name: 'childSafety',
      component: './ChildSafety',
    },
    {
      path: '/',
      component: '../layouts/UserLayout',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: '/login-register/family',
            },
            {
              path: '/login-register',
              name: 'login-register',
              icon: 'dashboard',
              routes: [
                {
                  name: 'family',
                  path: '/login-register/family',
                  component: './LoginRegister/Family',
                },
                {
                  name: 'education',
                  path: '/login-register/education',
                  component: './LoginRegister/Education',
                },
              ],
            },
            {
              path: '/jobs',
              name: 'job-section',
              icon: 'dashboard',
              component: './Jobs',
              // routes: [
              //   {
              //     name: 'job-details',
              //     path: '/jobs/job-details',
              //     component: './JobSection/JobDetails',
              //   },
              //   {
              //     name: 'job-list',
              //     path: '/jobs/list',
              //     component: './Jobs',
              //   },
              // ],
            },
            {
              path: '/products',
              name: 'products',
              icon: 'dashboard',
              component: './Products',
            },

            {
              path: '/users',
              name: 'user',
              icon: 'dashboard',
              component: './Users',
              // routes: [
              //   {
              //     name: 'users',
              //     path: '/users/list',
              //     component: './Users',
              //   },
              // ],
            },
            {
              path: '/news',
              name: 'news',
              icon: 'dashboard',
              component: './News',
            },
            {
              path: '/events',
              name: 'events',
              icon: 'dashboard',
              component: './Events',
            },
            {
              path: '/staff',
              name: 'staff',
              icon: 'dashboard',
              routes: [
                {
                  path: '/staff/list',
                  name: 'staff-list',
                  component: './Staff/StaffList',
                },
                {
                  path: '/staff/invite',
                  name: 'staff-invite',
                  component: './Staff/InviteStaff',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
