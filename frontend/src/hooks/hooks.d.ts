import type { Dispatch } from '@reduxjs/toolkit';
import type { UserAction } from '../features/users/user';

interface UseContact {
	users: UserAction[];
}

type DispatchUser = Dispatch<any>;
