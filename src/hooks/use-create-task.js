import { useState } from 'react';
import { createTask } from '../api/tasks-api';

export const useCreateTask = (refreshTasks) => {
	const [isCreating, setIsCreating] = useState(false);

	const createHandler = (event) => {
		event.preventDefault();

		const $form = event.target;
		const formData = new FormData($form);

		setIsCreating(true);

		createTask(formData)
			.then(() => {
				refreshTasks();
				$form.reset();
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return { createHandler, isCreating };
};
