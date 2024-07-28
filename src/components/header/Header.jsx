import { useContext } from 'react';
import { AppContext } from '../../context';

const sortingColumns = [
	{label: 'Кастомная сортировка', value: 'order'},
	{label: 'Сортировка по id', value: 'id'},
	{label: 'Сортировка по title', value: 'title'},
];

export const Header = () => {
	const { setSortingColumn, sortingColumn, isLoading, setSearchTerm } = useContext(AppContext);

	return (
		<div className="tasks-container__header">
			<h1 className="tasks-container__title">Список задач</h1>
			<select
				className="tasks-container__sort input"
				placeholder="Поле сортировки"
				value={sortingColumn}
				onChange={({ target }) => setSortingColumn(target.value)}
				disabled={isLoading}
			>
				{sortingColumns.map(({label, value}, i) => <option value={value} key={i}>{label}</option>)}
			</select>
			<input className="tasks-container__search input" type="text" placeholder="Поиск..." onChange={({ target }) => setSearchTerm(target.value)} />
		</div>
	);
};
