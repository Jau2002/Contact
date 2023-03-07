import type { ReactElement } from 'react';
import type { UserAction } from '../features/users/user';
import useContact from '../hooks/useContact';
import Delete from './Delete';

function User(): ReactElement {
	const { users } = useContact();
	return (
		<section className='user--section'>
			{users?.map(
				({
					id,
					names,
					cellPhone,
					lastNames,
					phone,
					email,
					address,
				}: UserAction): ReactElement => (
					<div
						key={id}
						className='card-body user--div'
					>
						<Delete id={id} />
						<h2 className='card-title user--h2'>{names}</h2>
						{lastNames && <h3 className='user--p'>{lastNames}</h3>}
						<p className='card-subtitle mb-2 text-muted user--p'>{cellPhone}</p>
						{phone && <p className='card-subtitle mb-2 text-muted'>{phone}</p>}
						{email && <samp className='card-text user--p'>{email}</samp>}
						{address && <samp className='user--p'>{address}</samp>}
					</div>
				)
			)}
		</section>
	);
}

export default User;
