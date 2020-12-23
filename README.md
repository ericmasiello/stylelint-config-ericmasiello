## stylelint-config-ericmasiello

`stylelint-config-ericmassielo` is a slightly more opinionated stylelint configuration than `stylelint-config-standard` that emphasizes minimal selector specificity as means toward improved CSS scalability.

The configuration comes in two variants:

1. A BEM (Block Element Modifier) variant that enforces kebab-case selector naming
2. A CSS Module variant that enforces camel case selector naming

For convenience, both configurations also white-list common SCSS directives.

### Install instructions

```shell
# npm
npm install --save-dev stylelint stylelint-config-ericmasiello

# yarn
yarn add -D stylelint stylelint-config-ericmasiello
```

Once installed, create a file in the root of your project named `.stylelintrc.js`.

If you prefer to use the BEM (Block Element Modifier) linting rules, set the contents to:

```js
// .stylelintrc.js
module.exports = {
    extends: 'stylelint-config-ericmasiello/bem',
};
```

Alternatively, if you prefer to use CSS Modules linting rules, set the contents to:

```js
// .stylelintrc.js
module.exports = {
    extends: 'stylelint-config-ericmasiello/cssModules',
};
```

If you need to ignore any files such as `normalize.css`, create a `.stylelintignore` file in the root of your project and list any files you need stylelint to ignore. For example:

```
normalize.css
normalize.min.css
```

To run the lint configuration, add a `script` to `package.json`.

```json
"scripts": {
  "lint:style": "stylelint \"src/**/*.{scss,css}\""
}
```

And then run the script like so:

```shell
# npm
npm run lint:style

# yarn
yarn lint:style
```
