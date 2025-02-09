// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt } from 'passport-jwt';
// import { SupabaseAuthStrategy } from 'nestjs-supabase-auth';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class SupabaseStrategy extends PassportStrategy(
//     SupabaseAuthStrategy,
//     'supabase',
// ) {
//     public constructor(private configService:ConfigService) {
//         super({
//             supabaseUrl: configService.get<string>('SUPABASE_API_URL'),
//             supabaseKey: configService.get<string>('SUPABASE_JWT_SECRET'),
//             supabaseOptions: {},
//             supabaseJwtSecret: configService.get<string>('SUPABASE_JWT_SECRET'),
//             extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         });
//     }

//     async validate(payload: any): Promise<any> {
//         super.validate(payload);
//     }

//     authenticate(req) {
//         super.authenticate(req);
//     }
// }