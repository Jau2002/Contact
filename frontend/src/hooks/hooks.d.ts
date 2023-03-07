import type { Dispatch } from '@reduxjs/toolkit';
import type { UserAction } from '../features/users/user';
import type { Attributes } from '../utils/utils';

interface UseContact {
	users: UserAction[];
}

interface Inputs {
	email?: string;
	names?: string;
	lastNames?: string;
	cellPhone?: string;
	phone?: string;
	address?: string;
}

interface Attributes {
	type: string;
	placeholder: string;
	name: string;
	display: string;
}

interface FormsAssociation {
	form: Attributes[];
}

type HandleSubmit = (body: Inputs) => void;

interface UseSubmit {
	defaultInputs: Inputs;
	handleSubmit: HandleSubmit;
}

type DispatchUser = Dispatch<any>;

type HandleOnClick = (id: number) => void;

interface UseRemove {
	handleOnClick: HandleOnClick;
}

interface DeleteUser {
	id: number;
}
