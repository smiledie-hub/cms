import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {VersioningType} from "@nestjs/common";
import {json, urlencoded} from 'express';

async function bootstrap() {
  const PORT = Number(process.env.PORT) || 3000
  const app: any = await NestFactory.create(AppModule, {cors: true})

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
  })

  app.use(json({limit: '5mb'}))
  app.use(urlencoded({extended: true, limit: '5mb'}))
  app.set('trust proxy', true)

  const config = new DocumentBuilder()
      .setTitle('CMS API').setVersion('1.0.0').build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document, {
    customSiteTitle: "CMS API"
  })

  await app.listen(PORT, () => console.log('Server started on port =', PORT))
}

bootstrap().catch(console.error)