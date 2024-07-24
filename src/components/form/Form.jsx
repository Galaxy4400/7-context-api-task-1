import { useContext } from "react";
import { AppContext } from "../../context";

export const Form = () => {
	const { createHandler, isCreating } = useContext(AppContext);

	return (
		<form className="tasks-form" onSubmit={createHandler}>
			<input className="tasks-form__input input" name="title" type="text" />
			<button className="tasks-form__button button" type="submit" disabled={isCreating}>Добавить новую задачу</button>
		</form>
	)
};
