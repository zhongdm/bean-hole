// import { App, Plugin } from 'vue';
import InputCurrency from './src/index.vue';

export const InputCurrencyPlugin = {
  install(app) {
    app.component('input-currency', InputCurrency);
  }
};

export { InputCurrency };