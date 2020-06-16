import { Application } from "https://deno.land/x/oak/mod.ts";
import { Snelm } from "../mod.ts";

const app = new Application();

// Creating and initializing a Snelm object and setting Oak as the framework
const snelm = new Snelm("oak");

// Snelm Middleware for Oak
app.use((ctx, next) => {
    ctx.response = snelm.snelm(ctx.request, ctx.response);

    next();
});

app.use((ctx) => {
    ctx.response.body = "Oak";
});

await app.listen({ port: 8000 });