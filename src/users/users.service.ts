import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Supabase } from '../common/supabase';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class UsersService {
    private supabaseClient:SupabaseClient
    constructor(private supabase: Supabase) {
        this.supabaseClient = this.supabase.getClient()
    }

    async create(data:any) {
        const { data: result, error } = await this.supabaseClient.from('users').insert(data)
        if (error) throw new BadRequestException(error.message)
        return result
    }

    async getOne(query:any) {
        const { data: result, error } = await this.supabaseClient.from('users').select().match(query)
        if (error) throw new NotFoundException(error.message)
        return result
    }

    async getAll() {
        const { data: result, error } = await this.supabaseClient.from('users').select()
        if (error) throw new BadRequestException(error.message)
        return result
    }

    async update(query:any, data:any) {
        const { data: result, error } = await this.supabaseClient
            .from('users')
            .update(data)
            .match(query);
        if (error) throw new BadRequestException(error.message);
        return result;
    }

    async delete(query: any) {
        const { data: result, error } = await this.supabaseClient
            .from('users')
            .delete()
            .match(query);
        if (error) throw new BadRequestException(error.message);
        return result;
    }
}
