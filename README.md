# Bitcoin Layers

Bitcoin Layers is an open-source, risk analysis platform focusing on bitcoin scaling protocols. In this repo, you will see the code to our website. If you're interested in contributing to the discussion around Bitcoin Layers, please join this [telegram chat](https://t.me/+8rv-1I2gkmQ4ZmJh).

If you'd like to see your project added to Bitcoin Layers, please see the section below.

## Using our research

If you're building any materials, platforms or websites related to #bitcoin L2s and sidechains, you're welcome to use Bitcoin Layers research. Everything we release is free and open-source under an MIT license. We kindly ask that you reference this project with a link to the domain bitcoinlayers.org.

## How to add a project

Example for a layer:

1. Create a new [layername].ts file by copying the template.ts file. Please include as much information around the project as you can.
2. Add the project to /util/layer_index.tsx by copy-pasting the import and declaration, using new name format from Step 1
3. Add to the array of all layers
4. Add project logo to public/logos. Please ensure that the file's name matches the "slug" in the [layername].ts file and is in png format
5. Submit a PR and prosper 😎

To add an 'infrastructure' (e.g., a BTC wrapper), repeat the same processes substituting `layer` for `infrastructure`

## Using our data

You're welcome to use Bitcoin Layers data. Everything we release is free and open-source under an MIT license. We kindly ask that you reference this project with a link to the domain bitcoinlayers.org. No API key is required. See below for our API documentation. If you can't find what you're looking for, reach out in Telegram and we can hopefully get you the data you need.

## Where does our data come from?

We have our own database and data ingestion pipeline. For some projects, we run our own nodes; for others, we leverage RPCs for our calls.

See our [data ingestion repo](https://github.com/bitcoinlayers/data-ingestion) to view:

1. Scripts used to pull daily supply and reserve data
2. Database structure, i.e., tables and views
3. API endpoint documentation

## Our other properties

- [Website](https://bitcoinlayers.org)
- [Social Media](https://twitter.com/bitcoinlayers)
- [Blog](https://www.lxresearch.co/)
