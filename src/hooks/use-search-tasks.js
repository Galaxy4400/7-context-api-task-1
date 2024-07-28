import { useEffect, useState } from 'react';
import { useDebounce } from './use-debounce';
import { readTasks } from '../api/tasks-api';

export const useSearchTasks = (setTasks, refreshTasks, sortingColumn) => {
	const [searchTerm, setSearchTerm] = useState(false);
	const [isSearching, setIsSearching] = useState(false);
	const [searchCount, setSearchCount] = useState(null);

	const debouncedSearchTerm = useDebounce(searchTerm);

	const searchReset = () => {
		refreshTasks();
		setSearchCount(null);
		setIsSearching(false);
	};

	useEffect(() => {
		if (!debouncedSearchTerm) {
			searchReset();
			return;
		}

		setIsSearching(true);

		readTasks(sortingColumn, debouncedSearchTerm)
			.then((response) => response.json())
			.then((result) => {
				setTasks(result);
				setSearchCount(result.length);
			})
			.finally(() => {
				setIsSearching(false);
			});
	}, [debouncedSearchTerm]);

	return { searchTerm, setSearchTerm, isSearching, searchCount };
};
