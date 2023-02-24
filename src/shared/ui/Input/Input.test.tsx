import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("<Input />", () => {
	test("render", () => {
		render(<Input value="value" />);

		const button = screen.getByText("test");
		expect(button).toBeInTheDocument();
	});
});
