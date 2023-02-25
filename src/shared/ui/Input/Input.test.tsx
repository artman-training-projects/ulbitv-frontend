import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("<Input />", () => {
	test("render", () => {
		render(<Input data-testid="input" />);

		const button = screen.queryByTestId("input");
		expect(button).toBeInTheDocument();
	});
});
