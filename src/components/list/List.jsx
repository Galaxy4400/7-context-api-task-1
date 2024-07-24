import { useContext } from 'react';
import { Item } from '../item/Item';
import { AppContext } from '../../context';

export const List = () => {
	const { tasks, isLoading, isSearching } = useContext(AppContext);

	const loadingClass = (isLoading || isSearching) ? 'is-loading' : '';
	const isNothing = !isLoading && !tasks.length;

	return (
		<>
			<ul className={`tasks-list ${loadingClass}`}>
				{tasks.map(({ id, title }) => (
					<Item {...{ id, title }} />
				))}
			</ul>
			{isNothing && <div>Ничего не найдено</div>}
		</>
	);
};
