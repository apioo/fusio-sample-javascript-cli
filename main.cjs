
const {Client} = require('fusio-sdk');
const {OAuth2, MemoryTokenStore} = require('sdkgen-client');

async function main() {
    const tokenStore = new MemoryTokenStore();
    const scopes = ["backend"];

    const credentials = new OAuth2(
        "test",
        "FRsNh1zKCXlB",
        "https://demo.fusio-project.org/authorization/token",
        "",
        tokenStore,
        scopes
    );

    const client = new Client("https://demo.fusio-project.org", credentials)

    console.log("Operations:")
    const collection = await client.backend().operation().getAll(0, 16, "")

    for (const operation of collection.entry) {
        console.log(" * " + operation.httpMethod + " " + operation.httpPath)
    }
}

main();
