import { Injectable } from '@nestjs/common';
import { Supabase } from '../common/supabase';

@Injectable()
export class UsersService {
    constructor(private supabase: Supabase) {
        
    }
}
