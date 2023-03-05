import { Body, Controller, Post } from '@nestjs/common';
import type CreateUserDto from '../create-user.dto';
import UsersService from '../services/users.service';

@Controller('users')
export default class UsersController {
	constructor(private userService: UsersService) {}

	@Post()
	createUser(@Body() newUser: CreateUserDto): Promise<CreateUserDto> {
		return this.userService.createUser(newUser);
	}
}
