import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Supabase} from '../common/supabase';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Supabase, ConfigService],
  exports:[UsersService]
})
export class UsersModule {}
