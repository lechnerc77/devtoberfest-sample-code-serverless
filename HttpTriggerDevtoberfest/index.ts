import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    
    context.log('HTTP trigger function processed a request.')
    
    const name = req.query.name
    
    const responseMessage = name
        ? "Hello Devtoberfest participant, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."

    context.res = {
        body: responseMessage
    }

}

export default httpTrigger