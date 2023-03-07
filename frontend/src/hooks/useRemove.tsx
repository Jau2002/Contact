import { useAppDispatch } from '../app/hook';
import { removeUser } from '../features/users/userAction';
import { DispatchUser, HandleOnClick, UseRemove } from './hooks';

function useRemove(): UseRemove {
	const dispatch: DispatchUser = useAppDispatch();

	const handleOnClick: HandleOnClick = (id: number) => {
		dispatch(removeUser(id));
	};

	return { handleOnClick };
}

export default useRemove;
