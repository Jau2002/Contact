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
		errors.email = 'Por favor ingrese un formato del correo valido';
	}

	if (!names) {
		errors.names = 'Por favor ingrese al menos un nombre';
	} else if (!/^[A-Za-z\s]+$/g.test(String(names))) {
		errors.names = 'Por favor borre números o símbolos';
	}

	if (lastNames && !/^[A-Za-z\s]+$/g.test(String(lastNames))) {
		errors.lastNames = 'Por favor borre números o símbolos';
	}

	if (!cellPhone) {
		errors.cellPhone = 'Por favor ingrese numero';
	} else if (!/^\d{10}$/.test(String(cellPhone))) {
		errors.cellPhone = 'Por favor ingrese ingrese su prefijo y número';
	}

	if (phone && !/^\d{10}$/.test(String(phone))) {
		errors.phone = 'Por favor ingrese ingrese su prefijo y número';
	}
	return errors;
}

export default validator;
