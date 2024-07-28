import { useContext, useState } from 'react';
import { Item } from '../item/Item';
import { AppContext } from '../../context';
import { Reorder } from 'framer-motion';

export const List = () => {
	const { tasks, setTasks, isLoading, isSearching } = useContext(AppContext);

	const loadingClass = (isLoading || isSearching) ? 'is-loading' : '';
	const isNothing = !isLoading && !tasks.length;

	return (
		<>
			<Reorder.Group className={`tasks-list ${loadingClass}`} as='ul' values={tasks} onReorder={setTasks}>
				{tasks.map((task) => (
					<Item task={task} key={task.id} />
				))}
			</Reorder.Group>
			{isNothing && <div>Ничего не найдено</div>}
		</>
	);
};
