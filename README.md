## stylelint-config-ericmasiello

_"A slightly more opinionated stylelint configuration than stylelint-config-standard that also white-lists common SCSS directives and enforces kebab-case BEM naming"_

### Install instructions

```shell
npm install --save-dev stylelint stylelint-config-ericmasiello
```

Create a file in the root of your project called .stylelintrc.js with the following contents:

```js
module.exports = {
  extends: 'stylelint-config-ericmasiello'
}
```

If you wish to ignore any files such as normalize.css, add a .stylelintignore file to the root of your project and list any files you wish to ignore. For example:

```
normalize.css
normalize.min.css
```
To run the lint configuration, add a `script` to your package.json file. For example:

```json
"scripts": {
  "lint:style": "stylelint \"src/**/*.{scss,css}\""
}
```
To run the lint, simply execute:
```shell
npm run lint:style
```
