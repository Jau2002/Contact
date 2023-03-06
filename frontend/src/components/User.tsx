import type { ReactElement } from 'react';
import type { UserAction } from '../features/users/user';
import useContact from '../hooks/useContact';

function User(): ReactElement {
	const { users } = useContact();
	console.log(users);
	return (
		<>
			{users.map(
				({
					id,
					names,
					cellPhone,
					lastNames,
					phone,
					email,
					address,
				}: UserAction): ReactElement => (
					<div key={id}>
						<h2>{names}</h2>
						{lastNames && <h3>{lastNames}</h3>}
						<p>{cellPhone}</p>
						{phone && <p>{phone}</p>}
						{email && <samp>{email}</samp>}
						{address && <samp>{address}</samp>}
					</div>
				)
			)}
		</>
	);
}

export default User;
