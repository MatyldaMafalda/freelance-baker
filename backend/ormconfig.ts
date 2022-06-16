import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { existsSync } from "fs";

const env = process.env.NODE_ENV || "development";
if (env === "production") {
    const result = dotenv.config({ path: resolve(process.cwd(), ".env") });
    if (result.error) {
        console.error(result.error);
    }
} else {
    [".env.development", ".env.development.local"].forEach((file) => {
        if (existsSync(resolve(process.cwd(), file))) {
            const result = dotenv.config({ path: resolve(process.cwd(), file) });
            if (result.error) {
                throw result.error;
            } else {
                for (const key in result.parsed) {
                    process.env[key] = result.parsed[key];
                }
            }
        }
    });
}

export const ormConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: !!process.env.DATABASE_SYNCHRONIZE,
    entities: ["src/modules/**/entities/*.entity.ts"],
    migrations: ["src/migrations/*{.ts,.js}"],
    
};

export default ormConfig;
