# @flaconi/eslint-config-typescript

[Flaconi's](https://www.flaconi.de/) shareable eslint config for `Typescript Backend Services Only`

This is not meant to be used for frontend projects React/Vue etc.


## Usage
### Install deps
Install the correct versions of each package, which are listed by the command:
```shell
yarn add --dev @flaconi/eslint-config-typescript@latest
```

If you are migrating old service to new plugin first please make sure to first remove old dependencies that are duplicates like example `yarn remove eslint prettier @typescript-eslint/eslint-plugin etc`

### Config
Add the following to your `.eslintrc.js`:
```js
module.exports = {
    extends: ['@flaconi/eslint-config-typescript'],
};

```

## Develop
More info on how to develop your custom eslint config can be found here: https://eslint.org/docs/developer-guide/shareable-configs

To develop locally you can install with `yarn add --dev pathtolocalfile` example
`yarn add --dev /Users/kristi.jorgji/Desktop/fl-lite/eslint-config-typescript`
 
You need to run the above command after every plugin change.
## License

[MIT](LICENSE) © Flaconi GmbH
