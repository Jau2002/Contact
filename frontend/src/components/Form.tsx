import { Form, Formik } from 'formik';
import type { ReactElement } from 'react';
import type { FormsAssociation, Inputs } from '../hooks/hooks';
import useSubmit from '../hooks/useSubmit';
import type { Attributes } from '../utils/utils';
import validator from '../utils/validator';
import Input from './Input';

function Forms({ form }: FormsAssociation): ReactElement {
	const { defaultInputs, handleSubmit } = useSubmit();
	return (
		<Formik
			initialValues={defaultInputs}
			validate={(values: Inputs): Inputs => validator(values)}
			onSubmit={handleSubmit}
		>
			<Form>
				<div className='container contact'>
					<div className='row'>
						<div className='col-md-3'>
							<div className='contact-info'>
								<img
									src='https://image.ibb.co/kUASdV/contact-image.png'
									alt='image'
								/>
								<h2>Add Contact</h2>
							</div>
						</div>
						<div className='col-md-9'>
							<div className='contact-form'>
								{form.map(
									(
										{ name, type, display }: Attributes,
										i: number
									): ReactElement => (
										<Input
											key={i}
											type={type}
											placeholder={display}
											name={name}
											display={display}
										/>
									)
								)}
								<div className='form-group'>
									<div className='col-sm-offset-2 col-sm-10'>
										<button
											type='submit'
											className='btn btn-default'
										>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Form>
		</Formik>
	);
}

export default Forms;
