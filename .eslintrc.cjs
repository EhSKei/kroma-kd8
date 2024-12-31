module.exports = {
  root: true,
  env: {
    browser: true, // 브라우저 환경에서 실행
    node: true, // 노드 환경에서 실행
  },
  parser: 'vue-eslint-parser', // Vue.js 코드를 분석할 때 사용할 파서 지정
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    parser: '@typescript-eslint/parser', // TypeScript 코드를 파싱하는 데 사용할 파서 지정
    sourceType: 'module', // ECMAScript 모듈 형식으로 코드 작성
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'eslint:recommended', // ESLint에서 권장 규칙
    'plugin:vue/vue3-recommended', // Vue.js 3 권장 규칙
    'plugin:nuxt/recommended', // Nuxt.js 권장 규칙
    '@nuxtjs/eslint-config-typescript', // Nuxt.js 프로젝트에서 TypeScript와 함께 사용되는 ESLint 규칙
    'plugin:prettier/recommended', // ESLint, Prettier 충돌 방지
  ],
  rules: {
    // `console` 사용을 허용 (디버깅에 유용)
    'no-console': 'off',

    // Vue의 self-closing 규칙 (component는 self-closing을 권장)
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always', // void 태그는 항상 self-closing
          normal: 'never', // 일반 HTML 태그는 self-closing 하지 않음
          component: 'always', // Vue 컴포넌트 태그는 항상 self-closing
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'prettier/prettier': 'off',
  },
};
