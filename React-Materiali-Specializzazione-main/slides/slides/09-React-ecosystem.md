---
revealOptions:
  transition: 'fade'
---

---

<img src="https://aulab.it/img/logo-aulab-horizontal-white.png">
<h3 class="r-fit-text">SPECIALIZZAZIONE REACT</h3>

---

# React Ecosystem

---

## Topics

* Build Tools <!-- .element: class="fragment" -->
* Awesome React <!-- .element: class="fragment" -->
* Frameworks / Project Generation <!-- .element: class="fragment" -->
* A11y Tools e Risorse <!-- .element: class="fragment" -->
* Testing Tools e Frameworks <!-- .element: class="fragment" -->
* Component Testing / Design System Tools <!-- .element: class="fragment" -->
* Immutable State Librerie <!-- .element: class="fragment" -->
* State Management Librerie <!-- .element: class="fragment" -->
* Asynchronous State Management Librerie <!-- .element: class="fragment" -->
* Routing Librerie <!-- .element: class="fragment" -->
* Form Validation Librerie <!-- .element: class="fragment" -->
* Hook Librerie <!-- .element: class="fragment" -->
* TypeScript Risorse <!-- .element: class="fragment" -->
* App Idee <!-- .element: class="fragment" -->

---

## Build Tools

* Vite
  * https://vitejs.dev/
* Webpack
  * https://webpack.js.org/awesome-webpack/#react
* ParcelJS
  * https://parceljs.org/recipes/react/
* Esbuild
  * https://esbuild.github.io/
* Rollup - The JavaScript module bundler
  * https://rollupjs.org/
* Legacy / Archived - Snowpack, Gulp, Grunt

---

## Awesome React

* https://github.com/enaqx/awesome-react
* https://github.com/brillout/awesome-react-components

---

## Frameworks

----

# Rendering Strategies

----

## CSR - Client Side Rendering

* SPA (Single Page Application), tutto accade con JS nel browser
* Deployed a una CDN

----

## SSG - Static Site Generation

* Le pagine sono renderizzate al momento della compilazione, il meno JS possibile nelle pagine risultanti
* Deployed a una CDN

----

## SSR - Server Side Rendered

* Le pagine vengono visualizzate in fase di esecuzione (quando un utente visita il sito), il meno JS possibile nelle pagine risultanti
* Deployed a un backend JS environment (VPS, Serverless, Edge etc.)

----

##  Hybrid

* SSG tutto il possibile al momento della costruzione (build time)
* SSR tutte le pagine che non erano SSG, renderizzate al primo caricamento
   * Successivi caricamenti possono comportarsi come CSR/SPA 
* Deployed a un backend JS environment (VPS, Serverless, Edge etc.)

----

* CSR
* SSG
* SSR

----

* https://react.dev/learn/start-a-new-react-project
* Meta Frameworks - Hybrid Rendering - CSR/SPA, SSR, SSG
  * Next.js - The React Framework for the Web
    * https://nextjs.org/
  * Remix - Remix is a full stack web framework that lets you focus on the user interface
    * https://remix.run/
  * Alephjs - The Full-stack Framework in Deno.
    * https://alephjs.org/docs/framework/react
* SSG - Static Site Generation
  * Gatsby - The Fastest Frontend for the Headless Web
    * https://www.gatsbyjs.com/
  * Astro - Astro is the all-in-one web framework designed for speed.
    * https://docs.astro.build/en/core-concepts/framework-components/
* CSR / Prerender
  * Redwood - the full-stack web framework designed to help you grow from side project to startup.
    * https://redwoodjs.com/

---

## Project Generation / Templates

* create-t3-app - Interactive CLI to start a full-stack, typesafe Next.js app.
  * https://github.com/t3-oss/create-t3-app
* Blitz - The Missing Fullstack Toolkit for Next.js
  * https://blitzjs.com/
* react-admin - The React Framework for B2B Apps
  * https://marmelab.com/react-admin/
* refine - Build your React-based CRUD applications, without constraints.
  * https://refine.dev/
* NX - monorepo / project scaffolding
  * https://nx.dev/getting-started/intro
* react-ts-starter - A bare-bones vite + react + typescript starter template with eslint + prettier, vitest + @testing-library and react-router
  * https://github.com/CodingGarden/react-ts-starter

---

## A11y Tools e Risorse

* Legacy React Docs
  * https://legacy.reactjs.org/docs/accessibility.html
* eslint rules
  * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
* VS Code - axe Accessibility Linter
  * https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter
* Test your React application with the axe-core accessibility testing library.
  * https://www.npmjs.com/package/@axe-core/react

---

## Testing Tools e Frameworks

----

## Unit Testing

* Vitest - Blazing Fast Unit Test Framework
  * https://vitest.dev/
* Jest - 🃏 Delightful JavaScript Testing
  * https://jestjs.io/
* DOM Utilities
  * Testing Library - Simple and complete testing utilities that encourage good testing practices
    * https://testing-library.com/docs/react-testing-library/intro/
  * Enzyme - a JavaScript Testing utility for React that makes it easier to test your React Components' output.
    * https://enzymejs.github.io/enzyme/
* Hooks
  * react-hooks-testing-library - Simple and complete React hooks testing utilities that encourage good testing practices.
    * https://react-hooks-testing-library.com/

----

## E2E / Integration Testing / Browser Automation

* Playwright - Playwright enables reliable end-to-end testing for modern web apps.
  * https://playwright.dev/
* Cypress - Fast, easy and reliable testing for anything that runs in a browser.
  * https://www.cypress.io/
* Nightwatch - End-to-end testing framework written in Node.js and using the W3C Webdriver API
  * https://nightwatchjs.org/

---

## Component Testing / Design System Tools

- storybook - Storybook is a frontend workshop for building UI components and pages in isolation
  * https://github.com/storybookjs/storybook
- react-styleguidist - Isolated React component development environment with a living style guide
  * https://github.com/styleguidist/react-styleguidist
- react-cosmos - Dev tool for creating reusable React components
  * https://github.com/react-cosmos/react-cosmos

---

## Immutable State Librerie

* Immer - Create the next immutable state by mutating the current one
  * https://immerjs.github.io/immer/
* Immutable.js -  Immutable persistent data collections for Javascript which increase efficiency and simplicity.
  * https://immutable-js.com/

---

## State Management Librerie

----

## Redux

* Redux - A Predictable State Container for JS Apps
  * https://redux.js.org/
  * https://react-redux.js.org/
* Redux Toolkit - The official, opinionated, batteries-included toolset for efficient Redux development
  * https://redux-toolkit.js.org/
* Redux Devtools - DevTools for Redux with hot reloading, action replay, and customizable UI
  * https://github.com/reduxjs/redux-devtools

----

## Redux Ecosystem

* Rematch - The Redux Framework
  * https://github.com/rematch/rematch
* Async Actions
  * Redux Thunk - Thunk middleware for Redux 
    * https://github.com/reduxjs/redux-thunk
  * Redux Promise - FSA-compliant promise middleware for Redux.
    * https://github.com/redux-utilities/redux-promise
  * Redux Observable - RxJS middleware for action side effects in Redux using "Epics" 
    * https://github.com/redux-observable/redux-observable
  * Redux Saga - An alternative side effect model for Redux apps
    * https://redux-saga.js.org/

----

### State Management Librerie

- mobx - Simple, scalable state management
  * https://github.com/mobxjs/mobx
- recoil - Experimental state management library for React apps
  * https://github.com/facebookexperimental/Recoil
- jotai - Bottom-up approach to React state management with an atomic model
  * https://github.com/pmndrs/jotai
- xstate-react - State machines and statecharts for the modern web
  * https://github.com/davidkpiano/xstate/tree/master/packages/xstate-react
- zustand - Bear necessities for state management in React
  * https://github.com/pmndrs/zustand
- easy-peasy - Vegetarian friendly state for React
  * https://github.com/ctrlplusb/easy-peasy

---

## Asynchronous State Management Librerie

- tanstack-query - Powerful asynchronous state management
  * https://github.com/TanStack/query
- swr - React Hooks for Data Fetching
  * https://github.com/vercel/swr
- apollo-client - A fully-featured, production ready caching GraphQL client
  * https://github.com/apollographql/apollo-client
- relay - A framework for building data-driven React applications
  * https://github.com/facebook/relay

---

## Routing Librerie

- react-router - Declarative routing for React
  * https://github.com/remix-run/react-router
- tanstack-router - Type-safe router with built-in caching & URL state management
  * https://github.com/TanStack/router
- Reach Router - Next Generation Routing for React
  * https://github.com/reach/router
- wouter - A minimalist-friendly routing
  * https://github.com/molefrog/wouter

---

## Form Validation Librerie

- react-hook-form - React Hooks for form state management and validation
  * https://github.com/react-hook-form/react-hook-form
- formik - Build forms in React, without the tears
  * https://github.com/jaredpalmer/formik
- react-jsonschema-form - A React component for building Web forms from JSON Schema
  * https://github.com/mozilla-services/react-jsonschema-form
- react-final-form - High performance subscription-based form state management for React
  * https://github.com/final-form/react-final-form
- formily - Alibaba Group Unified Form Solution
  * https://github.com/alibaba/formily
- vest - Declarative validations framework
  * https://github.com/ealush/vest

---

## Hook Librerie

- Awesome React Hooks
  * https://github.com/rehooks/awesome-react-hooks

---

## TypeScript Risorse

* Total TypeScript - https://www.totaltypescript.com/tutorials
* ts-reset - A 'CSS reset' for TypeScript, improving types for common JavaScript API's
  * https://github.com/total-typescript/ts-reset
* Type Challenges - Collection of TypeScript type challenges with online judge 
  * https://github.com/type-challenges/type-challenges
* Awesome Typescript
  * https://github.com/dzharii/awesome-typescript
  * https://github.com/semlinker/awesome-typescript

---

# BUILD THINGS

---

## App Idee

* https://github.com/florinpop17/app-ideas
* https://legacy.reactjs.org/community/examples.html
* https://www.freecodecamp.org/news/8-reactjs-project-ideas-to-start-learning-by-doing/
* https://codewithhugo.com/coding-web-app-ideas/

---


