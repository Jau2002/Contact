export default class CreateUserDto {
	id: number;
	names: string;
	lastNames?: string;
	email?: string;
	phone?: string;
	cellPhone: string;
	address?: string;
}
