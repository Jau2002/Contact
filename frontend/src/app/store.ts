import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/users/userSlice';
import type { StoreReducers } from './app';

const store: StoreReducers = configureStore({
	reducer: {
		users: UserReducer,
	},
});

export default store;
