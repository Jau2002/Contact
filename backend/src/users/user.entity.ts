import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar' })
	names: string;

	@Column({ nullable: true, type: 'varchar' })
	lastNames: string;

	@Column({ nullable: true, type: 'varchar' })
	email: string;

	@Column({ nullable: true, type: 'int' })
	phone: number;

	@Column({ unique: true, type: 'int' })
	cellPhone: number;

	@Column({ nullable: true, type: 'varchar' })
	address: string;
}
