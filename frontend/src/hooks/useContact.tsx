import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import type { UserAction } from '../features/users/user';
import { getUsers } from '../features/users/userAction';
import { selectUser } from '../features/users/userSlice';
import type { DispatchUser, UseContact } from './hooks';

function useContact(): UseContact {
	const dispatch: DispatchUser = useAppDispatch();

	useEffect(() => {
		dispatch(getUsers());
	});

	const users: UserAction[] = useAppSelector(selectUser);

	return { users };
}

export default useContact;
