import { Counter } from "./components/Counter";

import "./index.scss";

const App = () => {
	return (
		<div className="app">
			Счётчик
			<Counter />
		</div>
	);
};

export default App;
