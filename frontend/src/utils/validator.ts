import type { Inputs } from '../hooks/hooks';

function validator({
	email,
	names,
	lastNames,
	cellPhone,
	phone,
}: Inputs): Inputs {
	const errors: Inputs = {};

	if (
		email &&
		!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(String(email))
	) {
		errors.email = 'Please enter a valid email format';
	}

	if (!names) {
		errors.names = 'Please enter at least one name';
	} else if (!/^[A-Za-z\s]+$/g.test(String(names))) {
		errors.names = 'Please delete numbers or symbols';
	}

	if (lastNames && !/^[A-Za-z\s]+$/g.test(String(lastNames))) {
		errors.lastNames = 'Please delete numbers or symbols';
	}

	if (!cellPhone) {
		errors.cellPhone = 'Please enter number';
	} else if (!/^\d{10}$/.test(String(cellPhone))) {
		errors.cellPhone = 'Please enter only numbers';
	}

	if (phone && !/^\d{10}$/.test(String(phone))) {
		errors.phone = 'Please enter only numbers';
	}

	return errors;
}

export default validator;
