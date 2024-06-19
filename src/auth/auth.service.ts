import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { User } from '../common/schema/user';




@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }
    
    async loginOrSignUpUser(data: CreateUserDTO) {
        let findUser;
        try {
            findUser = await this.usersService.getOne({ email: data?.email })
        } catch (error) {
            findUser = await this.usersService.create(data)
        } finally {
            
        }
       
    }
}
