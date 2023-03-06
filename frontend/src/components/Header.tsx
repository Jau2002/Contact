import type { ReactElement } from 'react';

function Header(): ReactElement {
	return (
		<header className='p-5 text-center bg-light'>
			<h1 className='mb-3'>Contacts</h1>
		</header>
	);
}

export default Header;
