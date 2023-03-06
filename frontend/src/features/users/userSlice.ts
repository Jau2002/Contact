import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/app';
import type {
	SelectorUser,
	UserAction,
	UserPayload,
	UserSlice,
	UserState,
} from './user';

const initialState: UserState = {
	user: [],
};

const UserSlice: UserSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getAllUsers: (state: any, { payload }: UserPayload): UserState => ({
			...state,
			user: payload,
		}),
		postUser: (state: any, {}: UserPayload): UserState => ({
			...state,
		}),
	},
});

export const selectUser: SelectorUser = (state: RootState): UserAction[] =>
	state.users.user;

export const { getAllUsers, postUser } = UserSlice.actions;

export default UserSlice.reducer;
