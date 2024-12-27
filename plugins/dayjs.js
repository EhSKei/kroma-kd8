import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 필요에 따라 로케일 설정

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('dayjs', dayjs); // dayjs를 앱에 제공
});
