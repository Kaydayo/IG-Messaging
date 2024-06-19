import { IsEmail, IsNotEmpty, IsString } from '@nestjs/class-validator'

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    first__name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    facebook_id: string;

    @IsNotEmpty()
    @IsString()
    photo_url: string;
}