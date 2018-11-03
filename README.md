# Working exemple of lazy loading translations with VueJS and I18n

This repository is basic example of using VueJS hello-world project (Vue CLI 3) with Vue-I18n (https://kazupon.github.io/vue-i18n/), implementing a lazy loading translations.

How it works:
- In any case, en-US file is loaded, so we have a fall back translation ready
- When App.vue is created, it identifies the navigator language and try to load it asynchronously
  - By matching the composed version if exist (example: fr-FR)
  - if not possible, just try to match with the first letters (in this example: fr)
  - if not, remain at en-US

## Project setup
```
yarn install
```

### Update Webpack config
Update directory configuration in vue.config.js

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
