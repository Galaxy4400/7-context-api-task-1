import { useState } from "react";
import { updateTask } from "../api/tasks-api";

export const useUpdateTask = (refreshTasks) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateHandler = (taskId, input) => {
		setIsUpdating(true);

		const updateData = { [input.name]: input.value };

		updateTask(taskId, updateData)
			.then(() => {
				refreshTasks();
			})
			.finally(() => {
				setIsUpdating(false);
			});
	};

	return { updateHandler, isUpdating };
};
