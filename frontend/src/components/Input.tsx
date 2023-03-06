import { ErrorMessage, Field } from 'formik';
import type { ReactElement } from 'react';
import type { Attributes } from '../hooks/hooks';

function Input({ type, name, display }: Attributes): ReactElement {
	return (
		<section className='form-group'>
			<label
				htmlFor={type}
				className='control-label col-sm-2'
			>
				{display}
			</label>
			<div className='col-sm-10'>
				<Field
					type={type}
					id={type}
					name={name}
					placeholder={display}
					className='form-control'
				/>
			</div>
			<div className='alert alert-danger p-1 m-x-2'>
				<ErrorMessage
					name={name}
					component='span'
					className='alert-link mb-0'
				/>
			</div>
		</section>
	);
}

export default Input;
