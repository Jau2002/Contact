import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { DeleteResult, Repository, UpdateResult } from 'typeorm';
import type CreateUserDto from '../dto/create-user.dto';
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

	updateUser(id: number, user: User): Promise<UpdateResult> {
		return this.userRepository.update({ id }, user);
	}
}
