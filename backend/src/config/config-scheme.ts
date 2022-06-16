import * as Joi from "joi";

export const configScheme = Joi.object({
    NODE_ENV: Joi.string().valid("development", "production", "test", "provision").default("development"),
    // auth settings
    JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
    JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string().required(),
    JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),

    // database settings
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.string().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_SYNCHRONIZE: Joi.bool().default(false),
    SSL_CERT_PATH: Joi.string().optional(),
});
