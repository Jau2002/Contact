import { ReactElement } from 'react';
import { DeleteUser } from '../hooks/hooks';
import useRemove from '../hooks/useRemove';

function Delete({ id }: DeleteUser): ReactElement {
	const { handleOnClick } = useRemove();
	return (
		<button
			type='button'
			onClick={() => handleOnClick(id)}
		>
			✖
		</button>
	);
}

export default Delete;
