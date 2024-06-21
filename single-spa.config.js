import { registerApplication, start } from 'single-spa'
import { loadScript } from './src/loadScript.js'; 

registerApplication({
  name: 'header',
  app: () => import('@oscar50048/test-header-666666').then(module => module.mount),
  activeWhen: () => true,
});


registerApplication(
  'vue', 
  () => import('./src/vue/vue.app.js'),
  () => location.pathname === "/react" ? false : true
);

registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/vue"  ? false : true
);

start();