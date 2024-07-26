import { useState } from 'react';
import { createTask } from '../api/tasks-api';

export const useCreateTask = (refreshTasks) => {
	const [isCreating, setIsCreating] = useState(false);

	const createHandler = (data) => {
		setIsCreating(true);

		createTask(data)
			.then(() => {
				refreshTasks();
			})
			.finally(() => {
				setIsCreating(false);
			});
	};

	return { createHandler, isCreating };
};
