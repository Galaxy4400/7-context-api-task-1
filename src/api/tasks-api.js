import { TASKS_RESORURSE } from '../constants/tasks-resourse';


export const createTask = (creatingData) => {
	return fetch(TASKS_RESORURSE, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(creatingData),
	});
};


export const readTasks = (sortingColumn = '', searchTearm = '') => {
	const params = [];

	if (sortingColumn) params.push(`_sort=${sortingColumn}`);
	if (searchTearm) params.push(`title_like=${searchTearm}`);

	const paramsString = params.length ? `?${params.join('&')}` : '';

	return fetch(`${TASKS_RESORURSE}${paramsString}`);
};


export const updateTask = (taskId, updatingData) => {
	return fetch(`${TASKS_RESORURSE}/${taskId}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(updatingData),
	});
};


export const deleteTask = (taskId) => {
	return fetch(`${TASKS_RESORURSE}/${taskId}`, {
		method: 'DELETE',
	});
};
