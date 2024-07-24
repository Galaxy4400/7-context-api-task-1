import { useState } from "react";
import { deleteTask } from "../api/tasks-api";

export const useDeleteTask = (refreshTasks) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const removeHandler = (taskId) => {
		setIsDeleting(true);

		deleteTask(taskId)
			.then(() => {
				refreshTasks();
			})
			.finally(() => {
				setIsDeleting(false);
			});
	}

	return { removeHandler, isDeleting };
};
