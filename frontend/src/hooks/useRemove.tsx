import { useAppDispatch } from '../app/hook';
import type { RemoveUser } from '../features/users/user';
import { removeUser } from '../features/users/userAction';
import type { DispatchUser, HandleOnClick, UseRemove } from './hooks';

function useRemove(): UseRemove {
	const dispatch: DispatchUser = useAppDispatch();

	const handleOnClick: HandleOnClick = (id: number): RemoveUser =>
		dispatch(removeUser(id));

	return { handleOnClick };
}

export default useRemove;
