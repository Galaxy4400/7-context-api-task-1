import { useContext, useRef } from 'react';
import { changeTask } from '../../helpers';
import { useDeleteTask, useUpdateTask } from '../../hooks';
import { AppContext } from '../../context';

export const Item = ({ id, title }) => {
	const { tasks, setTasks, refreshTasks } = useContext(AppContext);

	const { removeHandler, isDeleting } = useDeleteTask(refreshTasks);
	const { updateHandler, isUpdating } = useUpdateTask(refreshTasks);

	const inputForm = useRef(null);

	return (
		<li className="tasks-list__item">
			<form className="tasks-list__title" onSubmit={(event) => updateHandler(event, id)} ref={inputForm}>
				<span>{id}.</span>
				<input
					className="tasks-list__input"
					type="text"
					name="title"
					value={title}
					onChange={({ target }) => changeTask(id, target, tasks, setTasks)}
					onBlur={() => inputForm.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))}
					readOnly={isUpdating}
				/>
			</form>
			<button className="tasks-list__remove" onClick={() => removeHandler(id)} disabled={isDeleting}>
				Удалить
			</button>
		</li>
	);
};
