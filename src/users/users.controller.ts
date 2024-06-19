import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
        
    }
    @Post('/create')
    async create(@Body() body: CreateUserDTO) {
        return this.userService.create(body);
    }

    @Get('/get')
    async read(@Query() query: any) {
        return this.userService.getOne(query);
    }

    @Put('/update')
    async update(@Query() query: any, @Body() body: any) {
        return this.userService.update(query, body);
    }

    @Delete('/delete')
    async delete(@Query() query: any) {
        return this.userService.delete(query);
    }
}
