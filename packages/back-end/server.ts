import Hapi from "@hapi/hapi"
import dotenv from "dotenv";
import path from 'path'

import isProduction from "./utils/isProduction"
import loggerPlugin from "./plugins/logger.plugin"
import mongoosePlugin from "./plugins/mongoose.plugin"
import questionsPlugin from "./plugins/questions.plugin"

if (!isProduction) {
    dotenv.config({ path: path.resolve(__dirname, './.env') })
}

const server: Hapi.Server = Hapi.server({
    port: process.env.BACKEND_PORT || 5000,
    host: process.env.HOST || "0.0.0.0",
});

export const createServer = async (): Promise<Hapi.Server> => {
    // Register middleware
    await server.register([
        loggerPlugin,
        mongoosePlugin,
    ])

    // Register routes
    await server.register([
        questionsPlugin,
    ])

    await server.initialize();

    return server;
}

export const startServer = async (server: Hapi.Server): Promise<Hapi.Server> => {
    await server.start();

    server.log("info", `Server running on ${server.info.uri}`);

    return server;
}

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});
