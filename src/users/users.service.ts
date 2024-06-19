import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Supabase } from '../common/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
import { User } from '../common/schema/user';


@Injectable()
export class UsersService {
    private supabaseClient:SupabaseClient
    constructor(private supabase: Supabase) {
        this.supabaseClient = this.supabase.getClient()
    }

    async create(data:Partial<User>):Promise<User|null> {
        const { data: result, error } = await this.supabaseClient.from('users_meta').insert(data)
        if (error) throw new BadRequestException(error.message)
        return result
    }

    async getOne(query: any): Promise<any[]> {
        const { data: result, error } = await this.supabaseClient.from('users_meta').select('*').match(query).single()
        if (error) throw new NotFoundException(error.message)
        return result
    }

    async getAll() {
        const { data: result, error } = await this.supabaseClient.from('users_meta').select('*')
        if (error) throw new BadRequestException(error.message)
        return result
    }

    async update(query:any, data:any) {
        const { data: result, error } = await this.supabaseClient
            .from('users_meta')
            .update(data)
            .match(query);
        if (error) throw new BadRequestException(error.message);
        return result;
    }

    async delete(query: any) {
        const { data: result, error } = await this.supabaseClient
            .from('users_meta')
            .delete()
            .match(query);
        if (error) throw new BadRequestException(error.message);
        return result;
    }
}
