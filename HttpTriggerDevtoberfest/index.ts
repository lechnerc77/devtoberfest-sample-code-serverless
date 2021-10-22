import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    let responseStatusCode: number
    let responseMessage: string

    if (req.body) {

        context.bindings.stage = req.body

        responseStatusCode = 201
        responseMessage = "Marvel character data created in Blob storage (STAGING)."

    }
    else {

        responseStatusCode = 400
        responseMessage = "Provide player data in the request."

    }

    context.res = {
        status: responseStatusCode,
        body: responseMessage
    }


}

export default httpTrigger