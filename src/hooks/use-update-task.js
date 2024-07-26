import { useState } from "react";
import { updateTask } from "../api/tasks-api";

export const useUpdateTask = (refreshTasks) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateHandler = (taskId, input) => {
		setIsUpdating(true);

		const updatingData = { [input.name]: input.value };

		updateTask(taskId, updatingData)
			.then(() => {
				refreshTasks();
			})
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return { updateHandler, isUpdating };
};
