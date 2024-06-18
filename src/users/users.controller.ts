import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
        
    }
    @Post()
    async create(@Body() body: any) {
        return this.userService.create(body);
    }

    @Get()
    async read(@Query() query: any) {
        return this.userService.getOne(query);
    }

    @Put()
    async update(@Query() query: any, @Body() body: any) {
        return this.userService.update(query, body);
    }

    @Delete()
    async delete(@Query() query: any) {
        return this.userService.delete(query);
    }
}
