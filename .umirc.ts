import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  favicons: ['https://www.svgrepo.com/show/36178/universe.svg'],
  locale: {
    default: 'en-US',
    baseSeparator: '-',
  },
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'home',
      path: '/home',
      component: './Home',
    },
  ],

  npmClient: 'yarn',
});
