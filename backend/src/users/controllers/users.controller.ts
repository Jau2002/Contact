import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common';
import type { DeleteResult } from 'typeorm';
import type CreateUserDto from '../create-user.dto';
import UsersService from '../services/users.service';

@Controller('users')
export default class UsersController {
	constructor(private userService: UsersService) {}

	@Post()
	createUser(@Body() newUser: CreateUserDto): Promise<CreateUserDto> {
		return this.userService.createUser(newUser);
	}

	@Get()
	getAllUsers(): Promise<CreateUserDto[]> {
		return this.userService.searchAll();
	}

	@Delete(':id')
	deleteUser(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
		return this.userService.removeUser(id);
	}
}
