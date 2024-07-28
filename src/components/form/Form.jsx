import { useContext, useState } from 'react';
import { AppContext } from '../../context';
import { maxOrderValue } from '../../helpers';

const defaultFormState = { title: '' };

export const Form = () => {
	const { createHandler, isCreating, tasks } = useContext(AppContext);

	const [formData, setFormData] = useState(defaultFormState);

	const onCreate = (event) => {
		event.preventDefault();

		if (!formData.title) return;

		createHandler({ ...formData, order: maxOrderValue(tasks) + 1});

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
