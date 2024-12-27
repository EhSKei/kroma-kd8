import 'element-plus/dist/index.css';
import { ElDatePicker, ElSelect, ElColorPicker } from 'element-plus';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElSelect);
  nuxtApp.vueApp.use(ElDatePicker);
  nuxtApp.vueApp.use(ElColorPicker);
});
