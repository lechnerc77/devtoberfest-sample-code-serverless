import * as df from "durable-functions"

const orchestrator = df.orchestrator(function* (context) {

    const outputs = []

    outputs.push(yield context.df.callActivity("HelloDevAdvocate", "Josh"))
    outputs.push(yield context.df.callActivity("HelloDevAdvocate", "DJ"))
    outputs.push(yield context.df.callActivity("HelloDevAdvocate", "Marius"))

    return outputs
})

export default orchestrator
