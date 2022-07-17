import { registerAs } from "@nestjs/config";
import { readFileSync } from "fs";

export const databaseConfig = registerAs("database", () => ({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: process.env.SSL_CERT_PATH ? { ca: readFileSync(process.env.SSL_CERT_PATH) } : false,
    synchronize: process.env.DATABASE_SYNCHRONIZE ? process.env.DATABASE_SYNCHRONIZE === "true" : false,
}));
