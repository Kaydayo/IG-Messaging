import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FacebookStrategy } from './common/strategy/facebook.strategy';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, PassportModule.register({ defaultStrategy: 'facebook' })],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule {}
