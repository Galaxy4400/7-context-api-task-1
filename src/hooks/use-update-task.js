import { useState } from "react";
import { updateTask } from "../api/tasks-api";

export const useUpdateTask = (refreshTasks) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateHandler = (event, taskId) => {
		event.preventDefault();

		const $form = event.target;
		const formData = new FormData($form);

		setIsUpdating(true);

		updateTask(taskId, formData)
			.then(() => {
				refreshTasks();
			})
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return { updateHandler, isUpdating };
};
