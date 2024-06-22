import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'header',
  app: () => import('@oscar50048/react-test-button').then(module => {
    return {
      bootstrap: module.bootstrap,
      mount: module.mount,
      unmount: module.unmount
    };
  }),
  activeWhen: () => true,
  customProps: {
    domElementGetter: () => document.getElementById('header')
  }
});

registerApplication(
  'vue',
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/react" ? false : true,
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue" ? false : true,
);

start();
