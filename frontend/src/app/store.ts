import { configureStore } from '@reduxjs/toolkit';
import type { StoreReducers } from './app';

const store: StoreReducers = configureStore({
	reducer: {},
});

export default store;
