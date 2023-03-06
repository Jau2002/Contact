import type { ReactElement } from 'react';
import Forms from '../components/Form';
import { attributes } from '../utils/attributes';

function Create(): ReactElement {
	return (
		<div>
			<Forms form={attributes} />
		</div>
	);
}

export default Create;
