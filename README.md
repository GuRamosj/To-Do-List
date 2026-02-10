# React + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (ou [oxc](https://oxc.rs) quando usado no [rolldown-vite](https://vite.dev/guide/rolldown)) para atualização rápida.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para atualização rápida.

## React Compiler

O React Compiler não está habilitado neste modelo devido ao seu impacto no desempenho de desenvolvimento e compilação. Para adicionar, consulte [esta documentação](https://react.dev/learn/react-compiler/installation).

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo um aplicativo de produção, recomendamos o uso do TypeScript com regras de lint que reconhecem tipos ativadas. Confira o [modelo TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para obter informações sobre como integrar o TypeScript e o [`typescript-eslint`](https://typescript-eslint.io) em seu projeto.
