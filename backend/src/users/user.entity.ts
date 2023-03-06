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

	@Column({ nullable: true, type: 'varchar' })
	phone: string;

	@Column({ unique: true, type: 'varchar' })
	cellPhone: string;

	@Column({ nullable: true, type: 'varchar' })
	address: string;
}
