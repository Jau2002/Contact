import { ReactElement } from 'react';
import { DeleteUser } from '../hooks/hooks';
import useRemove from '../hooks/useRemove';

function Delete({ id }: DeleteUser): ReactElement {
	const { handleOnClick } = useRemove();
	return (
		<article>

		<button
			type='button'
			className='btn btn-outline-danger'
			onClick={() => handleOnClick(id)}
			>
			✖
		</button>
			</article>
	);
}

export default Delete;
