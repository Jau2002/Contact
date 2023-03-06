import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hook';
import type { Inputs, UseSubmit } from './hooks';

function useSubmit(): UseSubmit {
	const dispatch: Dispatch<any> = useAppDispatch();

	const navigate: NavigateFunction = useNavigate();

	const handleSubmit = ({}) => {
		return navigate('/');
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
