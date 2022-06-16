import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";

import { AppModule } from "app.module";

import * as pack from "../package.json";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(helmet());

    const swaggerConfig = new DocumentBuilder()
        .setTitle(`FREELANCE BAKER API`)
        .setDescription(pack.description)
        .setVersion(pack.version)
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup("apidoc", app, document);

    app.enableCors();

    await app.listen(5000);
}
bootstrap();
