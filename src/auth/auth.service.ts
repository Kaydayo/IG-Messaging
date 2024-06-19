import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }
    
    async loginOrSignUpUser(data:CreateUserDTO) {
        const findUser = await this.usersService.getOne(data)
        console.log(findUser,"FIND USER")
    }
}
