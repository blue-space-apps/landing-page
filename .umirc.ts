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
      name: 'home',
      icon: 'home',
      component: './Home',
    },
    {
      path: '/base64',
      name: 'base64',
      icon: 'redo',
      component: './Base64',
    },
  ],
  npmClient: 'yarn',
});
