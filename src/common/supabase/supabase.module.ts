import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SupabaseStrategy } from '../strategy/supabase.strategy';
import { SupabaseGuard } from '../guard/supabase.guard';
import { Supabase } from './supabase';

@Module({
    imports: [ConfigModule],
    providers: [Supabase, SupabaseStrategy, SupabaseGuard],
    exports: [Supabase, SupabaseStrategy, SupabaseGuard],
})
export class SupabaseModule { }