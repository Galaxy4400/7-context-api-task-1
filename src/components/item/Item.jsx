import { useContext } from 'react';
import { changeTask, setNewTasksOrder } from '../../helpers';
import { useDeleteTask, useUpdateTask } from '../../hooks';
import { AppContext } from '../../context';
import { Reorder, useDragControls } from 'framer-motion';

export const Item = ({ task }) => {
	const { id, title } = task;

	const { tasks, setTasks, refreshTasks } = useContext(AppContext);

	const { removeHandler, isDeleting } = useDeleteTask(refreshTasks);
	const { updateHandler, isUpdating } = useUpdateTask(refreshTasks);

	const dragControls = useDragControls();

	return (
		<Reorder.Item
			className="tasks-list__item"
			value={task}
			dragListener={false}
			dragControls={dragControls}
			onDragEnd={() => setNewTasksOrder(tasks)}
		>
			<div className="tasks-list__title">
				<span className="tasks-list__id" onPointerDown={(event) => dragControls.start(event)}>
					{id}
				</span>
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
		</Reorder.Item>
	);
};
