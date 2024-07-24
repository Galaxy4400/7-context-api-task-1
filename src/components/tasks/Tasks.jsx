import { Form } from '../form/Form';
import { Header } from '../header/Header';
import { List } from '../list/List';

export const Tasks = () => {
	return (
		<div className="tasks">
			<Form />
			<div className="tasks-container">
				<Header />
				<List />
			</div>
		</div>
	);
};
