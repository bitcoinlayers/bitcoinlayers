# Bitcoin Layers

Bitcoin Layers is an open-source, risk analysis platform focusing on Bitcoin scaling protocols. In this repo, you will see the code to our website. If you're interested in contributing to the discussion around Bitcoin Layers, please join this [telegram chat](https://t.me/+8rv-1I2gkmQ4ZmJh).

If you'd like to see your project added to Bitcoin Layers, please see the section below.

## Using our research

If you're building any materials, platforms or websites related to #Bitcoin L2s and sidechains, you're welcome to use Bitcoin Layers research. Everything we release is free and open-source under an MIT license. We kindly ask that you reference this project with a link to the domain bitcoinlayers.org.

## How to add a Project

1. Create a new [layername].json file inside `i18n/messages/en/layers` folder by copying the [moneta.json](./i18n/messages/en/layers/moneta.json) template. Please include as much information around the project as you can.
2. Add the project to [i18n/messages/en/layers/index.ts](i18n/messages/en/layers/index.ts) by copy+pasting the import and declaration, using new name format from Step 1
3. Add to the array of all layers
4. If you want to add a project for different languages, please follow the steps 1-3 for the respective language folder
5. Add project logo to public/logos. Please ensure that the file's name matches the "slug" in the [layername].json file and is in png format
6. Submit a PR and prosper 😎

## Our other properties

-   [Website](https://bitcoinlayers.org)
-   [Social Media](https://twitter.com/bitcoinlayers)
-   [Documentation](https://bitcoin-layers.gitbook.io/bitcoin-layers)
