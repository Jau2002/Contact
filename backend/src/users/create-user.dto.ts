export default class CreateUserDto {
	id: number;
	names: string;
	lastNames?: string;
	email?: string;
	phone?: number;
	cellPhone: number;
	address?: string;
}
