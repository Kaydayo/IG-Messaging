import { IsEmail, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator'

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    first__name?: string;

    @IsOptional()
    @IsString()
    last_name?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    facebook_id?: string;

    @IsOptional()
    @IsString()
    photo_url?: string;
}