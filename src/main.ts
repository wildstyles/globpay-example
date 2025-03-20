import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AjvValidationPipe } from './controllers/common/ajv-validation.pipe';
import { setupSwagger } from './controllers/common/setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new AjvValidationPipe());
  setupSwagger(app);
  
  await app.listen(3000);
}
bootstrap();
