import { useContext } from "react";
import { AppContext } from "../../context";

export const Header = () => {
	const { setIsSorting, isSorting, isLoading, setSearchTerm } = useContext(AppContext);

	return (
		<div className="tasks-container__header">
			<h1 className="tasks-container__title">Список задач</h1>
			<button className="tasks-container__sort button" type="button" onClick={() => setIsSorting(!isSorting)} disabled={isLoading}>
				{isSorting ? `Отключить сортировку` : `Включить сортировку`}
			</button>
			<input className="tasks-container__search input" type="text" placeholder="Поиск..." onChange={({ target }) => setSearchTerm(target.value)} />
		</div>
	);
};
