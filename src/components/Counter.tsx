import { useState } from "react";

import "./Counter.scss";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => setCount((prevCount) => prevCount + 1);
	const handleDecrement = () => setCount((prevCount) => prevCount - 1);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>increment</button>
			<button onClick={handleDecrement}>decrement</button>
		</div>
	);
};
