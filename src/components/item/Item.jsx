import { useContext } from 'react';
import { changeTask } from '../../helpers';
import { useDeleteTask, useUpdateTask } from '../../hooks';
import { AppContext } from '../../context';

export const Item = ({ id, title }) => {
	const { tasks, setTasks, refreshTasks } = useContext(AppContext);

	const { removeHandler, isDeleting } = useDeleteTask(refreshTasks);
	const { updateHandler, isUpdating } = useUpdateTask(refreshTasks);

	return (
		<li className="tasks-list__item">
			<div className="tasks-list__title">
				<span>{id}.</span>
				<input
					className="tasks-list__input"
					type="text"
					name="title"
					value={title}
					onChange={({ target }) => changeTask(id, target, tasks, setTasks)}
					onBlur={({ target }) => updateHandler(id, target)}
					readOnly={isUpdating}
				/>
			</div>
			<button className="tasks-list__remove" onClick={() => removeHandler(id)} disabled={isDeleting}>
				Удалить
			</button>
		</li>
	);
};
