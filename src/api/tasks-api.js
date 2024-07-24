import { TASKS_RESORURSE } from '../constants/tasks-resourse';


export const createTask = (formData) => {
	return fetch(TASKS_RESORURSE, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(Object.fromEntries(formData.entries())),
	});
};


export const readTasks = (isSorting = false, searchTearm = '') => {
	const params = [];

	if (isSorting) params.push(`_sort=title`);
	if (searchTearm) params.push(`title_like=${searchTearm}`);

	const paramsString = params.length ? `?${params.join('&')}` : '';

	return fetch(`${TASKS_RESORURSE}${paramsString}`);
};


export const updateTask = (taskId, formData) => {
	return fetch(`${TASKS_RESORURSE}/${taskId}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(Object.fromEntries(formData.entries())),
	});
};


export const deleteTask = (taskId) => {
	return fetch(`${TASKS_RESORURSE}/${taskId}`, {
		method: 'DELETE',
	});
};
