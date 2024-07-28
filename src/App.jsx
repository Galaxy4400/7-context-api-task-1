import './app.scss';
import { useState } from 'react';
import { useCreateTask, useGetTasks, useSearchTasks } from './hooks';
import { AppContext } from './context';
import { Tasks } from './components';

export const App = () => {
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);
	const [sortingColumn, setSortingColumn] = useState('order');

	const refreshTasks = () => setRefreshTasksFlag(!refreshTasksFlag);

	const { tasks, setTasks, isLoading } = useGetTasks(refreshTasksFlag, sortingColumn);
	const { createHandler, isCreating } = useCreateTask(refreshTasks);
	const { setSearchTerm, isSearching } = useSearchTasks(setTasks, refreshTasks, sortingColumn);

	return (
		<AppContext.Provider
			value={{
				createHandler,
				isCreating,
				sortingColumn,
				setSortingColumn,
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
