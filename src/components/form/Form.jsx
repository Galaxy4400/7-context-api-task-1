import { useContext, useState } from 'react';
import { AppContext } from '../../context';

const defaultFormState = { title: '' };

export const Form = () => {
	const { createHandler, isCreating } = useContext(AppContext);

	const [formData, setFormData] = useState(defaultFormState);

	const onCreate = (event) => {
		event.preventDefault();

		if (!formData.title) return;

		createHandler(formData);

		setFormData(defaultFormState);
	};

	return (
		<form className="tasks-form" onSubmit={onCreate}>
			<input
				className="tasks-form__input input"
				name="title"
				type="text"
				value={formData.title}
				onChange={({ target }) => setFormData({ ...formData, title: target.value })}
			/>
			<button className="tasks-form__button button" type="submit" disabled={isCreating}>
				Добавить новую задачу
			</button>
		</form>
	);
};
