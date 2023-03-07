import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Header(): ReactElement {
	return (
		<>
			<header className='p-2 text-center bg-light'>
				<h1 className='mb-3'>Contacts</h1>
			</header>
			<Link to='/user'>
				<button
					type='button'
					className='btn btn-outline-success m-4'
				>
					New Contact
				</button>
			</Link>
		</>
	);
}

export default Header;
