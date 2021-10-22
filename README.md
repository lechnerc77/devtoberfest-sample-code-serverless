# Code Sample for SAP Devtoberfest - Session "Pour Some Serverless On Me"

This GitHub repository contains the code samples that have been presented during the SAP Devtoberfest Session [ "Pour Some Serverless On Me"](https://github.com/SAP-samples/devtoberfest-2021/blob/main/topics/Week3_Cloud_Native/README.md#christian-lechner-pour-some-serverless-on-me).

The recording of the session is available on [YouTube](https://youtu.be/y1167Yme07o) 🎥

## Prerequisites 🧰

If you want to execute the samples locally as shown in the video you must install the following prerequisites on your system:

* [Azure Functions Core Tools](https://github.com/Azure/azure-functions-core-tools) - Azure Functions runtime and CLI for local development.
* [VSCode Azure Functions extension](https://github.com/Microsoft/vscode-azurefunctions) - Extension for VSCode to easily develop and manage Azure Functions.
* [RESTClient for VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - An VSCode extension  to make HTTP requests.
* [Azurite](https://docs.microsoft.com/azure/storage/common/storage-use-azurite) - Emulator for using Azure Storage services if you want to develop locally without connecting to a Storage Account in the cloud.
* [Azure Storage Explorer](https://azure.microsoft.com/features/storage-explorer/) - Application to manage Azure Storage resources (both in the cloud and local emulated).

## Structure

The repository contains several branches that cover the different samples we implemented during the session:

* [main]() - Sample HTTP triggered function ([Link to recoding](https://youtu.be/y1167Yme07o?t=797))
* [input-binding]() - Function with input binding reading from a blob storage ([Link to recoding](https://youtu.be/y1167Yme07o?t=1328))
* [output-binding]() - Function with output binding writing to a blob storage ([Link to recoding](https://youtu.be/y1167Yme07o?t=1842))
* [durable]() - Durable Function with a sequential execution of steps ([Link to recoding](https://youtu.be/y1167Yme07o?t=2709))

## Samples

The `json` samples files for the input binding are stored in the folder [`samples`](./samples)