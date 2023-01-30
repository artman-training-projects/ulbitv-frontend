import { useState } from "react";

import classes from "./Counter.module.scss";

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => setCount((prevCount) => prevCount + 1);
	const handleDecrement = () => setCount((prevCount) => prevCount - 1);

	return (
		<div>
			<h1>{count}</h1>
			<button className={classes.button} onClick={handleIncrement}>
				increment
			</button>
			<button className={classes.button} onClick={handleDecrement}>
				decrement
			</button>
		</div>
	);
};
