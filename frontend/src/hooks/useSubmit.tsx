import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hook';
import { createUser } from '../features/users/userAction';
import type { DispatchUser, HandleSubmit, Inputs, UseSubmit } from './hooks';

function useSubmit(): UseSubmit {
	const dispatch: DispatchUser = useAppDispatch();

	const navigate: NavigateFunction = useNavigate();

	const handleSubmit: HandleSubmit = (user: Inputs) => {
		dispatch(createUser(user));
		setTimeout(() => {
			navigate('/');
		}, 3000);
	};

	const defaultInputs: Inputs = {
		email: '',
		names: '',
		lastNames: '',
		cellPhone: '',
		phone: '',
		address: '',
	};

	return { handleSubmit, defaultInputs };
}

export default useSubmit;
