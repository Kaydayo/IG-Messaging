import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const logger: Logger = new Logger('Main');
const port = new ConfigService().get('PORT');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    logger.log('---------------------------------');
    logger.log(`🚀 App is listening on ${port} 🚀`);
    logger.log('---------------------------------');
  });
}
bootstrap();
