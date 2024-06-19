import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { type Request } from "express";
import { AuthService } from "./auth.service";
import { User } from "../common/schema/user";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get("/facebook")
    @UseGuards(AuthGuard("facebook"))
    async facebookLogin(): Promise<any> {
        return HttpStatus.OK;
    }

    @Get("/facebook/redirect")
    @UseGuards(AuthGuard("facebook"))
    async facebookLoginRedirect(@Req() req: Request): Promise<any> {
        await this.authService.loginOrSignUpUser(req?.user)
        return {
            statusCode: HttpStatus.OK,
            data: req.user,
        };
    }
}
