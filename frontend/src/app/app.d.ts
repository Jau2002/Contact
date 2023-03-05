import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type { TypedUseSelectorHook } from 'react-redux';
import store from './store';

interface Store {}

type StoreReducers = ToolkitStore<Store>;

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = () => typeof store.dispatch;

type SelectorsApp = TypedUseSelectorHook<RootState>;
