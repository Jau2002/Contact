import type { Dispatch } from '@reduxjs/toolkit';
import type { GetUsers, getUsersAction, UserAction } from './user';
import { getAllUsers } from './userSlice';

const DefaultURL = 'http://localhost:3001';

export function getUsers(): getUsersAction {
	return async (dispatch: Dispatch): GetUsers => {
		const res: Response = await window.fetch(`${DefaultURL}/users`);
		try {
			const data: Promise<UserAction[]> = await res.json();
			return dispatch(getAllUsers(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
