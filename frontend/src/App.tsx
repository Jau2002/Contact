import type { ReactElement } from 'react';
import User from './components/User';

function App(): ReactElement {
	return (
		<>
			<h1>Contacts</h1>
			<User />
		</>
	);
}

export default App;
