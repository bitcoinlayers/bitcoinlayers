The Bitcoin Layers team prioritizes reviews on projects that are in production and accepting users BTC deposits, today. Teams with protocols on testnet, or those that require a softfork to go live, are welcome to self-submit reviews on their project to the site.

## Self-submit information on your testnet project

When submitting a review, please follow the process below:

-   Create a new [layername].json file inside `i18n/messages/en/layers` folder by copying the [citrea.json](./i18n/messages/en/layers/citrea.json) template. Please include as much information around the project as you can.
-   Add the project to [i18n/messages/en/layers/index.ts](i18n/messages/en/layers/index.ts) by copy+pasting the import and declaration, using new name format from Step 1
-   Add to the array of all layers
-   If you want to add a project for different languages, please follow the steps 1-3 for the respective language folder
-   Add project logo to public/logos. Please ensure that the file's name matches the "slug" in the [layername].json file and is in png format
-   Submit a PR and prosper :sunglasses:

Please include any relevant documentation, and source viewable code, with your submission.

## Self-submit information on your project that requires a soft-fork

When submitting a review, please follow the process below:

-   Create a new [layername].json file inside `i18n/messages/en/layers` folder by copying the [starknet.json](./i18n/messages/en/layers/starknet.json) template. Please include as much information around the project as you can.
-   Add the project to [i18n/messages/en/layers/index.ts](i18n/messages/en/layers/index.ts) by copy+pasting the import and declaration, using new name format from Step 1
-   Add to the array of all layers
-   If you want to add a project for different languages, please follow the steps 1-3 for the respective language folder
-   Add project logo to public/logos. Please ensure that the file's name matches the "slug" in the [layername].json file and is in png format
-   Submit a PR and prosper :sunglasses:

Please include any relevant documentation, and source viewable code, with your submission.

## Get in touch

After following this process and submitting your PR, feel free to additionally notify our team in our [community telegram](https://t.me/+8rv-1I2gkmQ4ZmJh).
