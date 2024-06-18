import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { Supabase } from '../common/supabase';

@Module({
  imports: [ConfigModule, UsersModule

  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, Supabase],
  exports: [AuthService],
})
export class AuthModule { }
