import './app.scss';
import { useState } from 'react';
import { useCreateTask, useGetTasks, useSearchTasks } from './hooks';
import { AppContext } from './context';
import { Tasks } from './components';

export const App = () => {
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);
	const [isSorting, setIsSorting] = useState(false);

	const refreshTasks = () => setRefreshTasksFlag(!refreshTasksFlag);

	const { tasks, setTasks, isLoading } = useGetTasks(refreshTasksFlag, isSorting);
	const { createHandler, isCreating } = useCreateTask(refreshTasks);
	const { setSearchTerm, isSearching } = useSearchTasks(setTasks, refreshTasks, isSorting);

	return (
		<AppContext.Provider
			value={{
				createHandler,
				isCreating,
				isSorting,
				setIsSorting,
				isLoading,
				setSearchTerm,
				tasks,
				setTasks,
				refreshTasks,
				isSearching,
			}}
		>
			<Tasks />
		</AppContext.Provider>
	);
};
