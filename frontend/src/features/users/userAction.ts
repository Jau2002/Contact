import type { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Inputs } from '../../hooks/hooks';
import type {
	Create,
	CreateUser,
	GetUsers,
	getUsersAction,
	Remove,
	RemoveUser,
	Update,
	UpdateUser,
} from './user';
import { deleteUser, getAllUsers, postUser, putUser } from './userSlice';

axios.defaults.baseURL = 'http://localhost:3001/';

export function getUsers(): getUsersAction {
	return async (dispatch: Dispatch): GetUsers => {
		const { data } = await axios.get('/users');
		try {
			return dispatch(getAllUsers(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export function createUser(user: Inputs): CreateUser {
	return async (dispatch: Dispatch): Create => {
		const { data } = await axios.post('/users', user);
		try {
			return dispatch(postUser(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export function removeUser(id: number): RemoveUser {
	return async (dispatch: Dispatch): Remove => {
		const { data } = await axios.delete(`/users/${id}`);
		try {
			return dispatch(deleteUser(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}

export function updateUser(id: number, user: Inputs): UpdateUser {
	return async (dispatch: Dispatch): Update => {
		const { data } = await axios.put(`/users/${id}`, user);
		try {
			return dispatch(putUser(data));
		} catch (err) {
			throw new Error((err as Error).message);
		}
	};
}
