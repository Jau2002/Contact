import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { TypedUseSelectorHook } from 'react-redux';
import type { UserState } from '../features/users/user';
import store from './store';

interface Store {
	users: UserState;
}

type StoreReducers = ToolkitStore<Store>;

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = () => typeof store.dispatch;

type SelectorsApp = TypedUseSelectorHook<RootState>;
