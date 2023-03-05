import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { DeleteResult, Repository } from 'typeorm';
import type CreateUserDto from '../create-user.dto';
import User from '../user.entity';

@Injectable()
export default class UsersService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}

	createUser(user: CreateUserDto): Promise<CreateUserDto> {
		const newUser: User = this.userRepository.create(user);
		return this.userRepository.save(newUser);
	}

	searchAll(): Promise<User[]> {
		return this.userRepository.find({ order: { names: 'ASC' } });
	}

	removeUser(id: number): Promise<DeleteResult> {
		return this.userRepository.delete({ id });
	}
}
