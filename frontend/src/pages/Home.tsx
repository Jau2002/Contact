import type { ReactElement } from 'react';
import Header from '../components/Header';
import User from '../components/User';

function Home(): ReactElement {
	return (
		<>
			<Header />
			<User />
		</>
	);
}

export default Home;
