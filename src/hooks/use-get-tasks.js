import { useEffect, useState } from "react";
import { readTasks } from "../api/tasks-api";

export const useGetTasks = (refreshTasksFlag, sortingColumn) => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		readTasks(sortingColumn)
			.then((response) => response.json())
			.then(setTasks)
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshTasksFlag, sortingColumn]);

	return { tasks, setTasks, isLoading };
};
