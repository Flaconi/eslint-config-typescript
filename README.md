# @flaconi/eslint-config-typescript

[Flaconi's](https://www.flaconi.de/) shareable eslint config


## Usage
### Install deps
Install the correct versions of each package, which are listed by the command:
```shell
npm info "@flaconi/eslint-config-typescript@latest" peerDependencies
```
Or use this command (works for both `npm` and `yarn`)
```shell
npx install-peerdeps --dev @flaconi/eslint-config-typescript@latest
```

### Config
Add the following to your `.eslintrc.js`:
```js
module.exports = {
    extends: ['@flaconi/eslint-config-typescript'],
    parser: '@typescript-eslint/parser',
};

```

## Develop
More info on how to develop your custom eslint config can be found here: https://eslint.org/docs/developer-guide/shareable-configs

## License

[MIT](LICENSE) © Flaconi GmbH