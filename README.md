
Fusio JavaScript CLI sample
=====

# About

This is a simple JavaScript CLI application which shows how to use the JavaScript SDK to access a Fusio instance.
In this example we simply output all registered operations.
Fusio is an open source API management which helps to build and manage great APIs more information at:
https://www.fusio-project.org/

```javascript
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
```

# Run

To run the demo you simply need to install all dependencies.

```
npm install
```

and then you can execute the main script.

```
node main.cjs
```
