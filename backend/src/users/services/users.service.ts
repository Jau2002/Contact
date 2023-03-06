import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { DeleteResult, Repository, UpdateResult } from 'typeorm';
import CreateUserDto from '../dto/create-user.dto';
import User from '../user.entity';

@Injectable()
export default class UsersService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}

	async createUser(user: CreateUserDto): Promise<User | HttpException> {
		const userFound: User = await this.userRepository.findOne({
			where: { cellPhone: user.cellPhone },
		});

		if (userFound) {
			return new HttpException(
				'the user´s phone number already exists',
				HttpStatus.CONFLICT
			);
		}

		if (!user.names) {
			return new HttpException('Name cannot be null', HttpStatus.CONFLICT);
		}

		const newUser: User = this.userRepository.create(user);
		return this.userRepository.save(newUser);
	}

	searchAll(): Promise<User[]> {
		return this.userRepository.find({ order: { names: 'ASC' } });
	}

	async removeUser(id: number): Promise<HttpException | DeleteResult> {
		const userNotFound: User = await this.userRepository.findOne({
			where: { id },
		});
		return !userNotFound
			? new HttpException('User not found', HttpStatus.NOT_FOUND)
			: this.userRepository.delete({ id });
	}

	async updateUser(
		id: number,
		user: User
	): Promise<HttpException | UpdateResult> {
		const userNotFound: User = await this.userRepository.findOne({
			where: { id },
		});
		return !userNotFound
			? new HttpException('User not found', HttpStatus.NOT_FOUND)
			: this.userRepository.update({ id }, user);
	}
}
