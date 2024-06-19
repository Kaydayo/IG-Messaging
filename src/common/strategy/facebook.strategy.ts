import { HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";
import { CreateUserDTO } from "../../users/dto/create-user.dto";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(
        private readonly configService: ConfigService,
    ) {
        super({
            clientID:configService.get<string>('APP_ID'),
            clientSecret: configService.get<string>('APP_SECRET'),
            callbackURL: "http://localhost:3000/auth/facebook/redirect",
            scope: "email",
            profileFields: ['id', 'name', 'emails', 'photos'], 
        });
    }

    async validate(
        accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        try {
            console.log(JSON.stringify(profile))
            const { name, emails,id,photos:{}} = profile;
            const user:CreateUserDTO = {
                email: emails[0].value,
                first_name: name.givenName,
                last_name: name.familyName,
                facebook_id: id,
                photo_url:""
            };
            const payload = {
                user,
                accessToken,
            };

            done(null, payload);
        } catch (error) {
            throw new UnauthorizedException(error.message)
        }
    }
}