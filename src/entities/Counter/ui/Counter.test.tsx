import { screen, fireEvent } from "@testing-library/react";

import { renderComponent } from "shared/lib";

import { Counter } from "./Counter";

describe("<Counter />", () => {
	test("render", () => {
		renderComponent(<Counter />, {
			initialState: { counter: { value: 10 } },
		});

		const value = screen.getByTestId("value-title");
		expect(value).toHaveTextContent("10");
	});

	test("increment", () => {
		renderComponent(<Counter />, {
			initialState: { counter: { value: 10 } },
		});

		const incrementButton = screen.getByTestId("increment-button");
		fireEvent.click(incrementButton);

		const value = screen.getByTestId("value-title");
		expect(value).toHaveTextContent("11");
	});

	test("decrement", () => {
		renderComponent(<Counter />, {
			initialState: { counter: { value: 10 } },
		});

		const decrementButton = screen.getByTestId("decrement-button");
		fireEvent.click(decrementButton);

		const value = screen.getByTestId("value-title");
		expect(value).toHaveTextContent("9");
	});
});
