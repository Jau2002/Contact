import { PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../app/app';

interface UserState {
	user: [];
}

type UserSlice = Slice<UserState>;

type UserPayload = PayloadAction<UserState>;

interface UserAction {
	id: number;
	names: string;
	lastNames?: string;
	phone?: number;
	cellPhone: number;
	email?: string;
	address?: string;
}

type SelectorUser = (state: RootState) => UserAction[];

interface DispatchUser {
	payload?: UserState;
	type: string;
}

type GetUsers = Promise<DispatchUser>;

type getUsersAction = (dispatch: Dispatch) => GetUsers;
