// import { App, Plugin } from 'vue';

import { InputCurrencyPlugin } from './input-currency';

const BeanHolePlugin = {
  install(app) {
    if (InputCurrencyPlugin.install) {
      InputCurrencyPlugin.install(app)
    }
    // InputCurrencyPlugin.install?.(app);
  }
};

export default BeanHolePlugin;

export * from './input-currency';
