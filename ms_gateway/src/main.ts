import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { TimeoutInterceptor } from './common/interceptors/time-out.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.APP_PORT || 3000;

  // Create the application
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Middlewares
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new TimeoutInterceptor());

  const config = new DocumentBuilder()
    .setTitle('MS Gateway')
    .setDescription('The MS Gateway API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  // Start the application
  await app.listen(PORT);

  Logger.log(`Server running on http://localhost:${PORT}/docs`, 'Bootstrap');
}
bootstrap();
