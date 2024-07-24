import { useEffect, useState } from "react";
import { readTasks } from "../api/tasks-api";

export const useGetTasks = (refreshTasksFlag, isSorting) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		readTasks(isSorting)
			.then((response) => response.json())
			.then(setTasks)
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshTasksFlag, isSorting]);

	return { tasks, setTasks, isLoading };
};
