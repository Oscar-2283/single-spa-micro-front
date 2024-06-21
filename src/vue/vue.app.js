import { createApp, h } from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './main.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render: () => h(Hello),
  },
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
