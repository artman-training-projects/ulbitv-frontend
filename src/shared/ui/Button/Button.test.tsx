import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { EButtonTheme } from "./interfaces";

describe("Button", () => {
	test("render", () => {
		render(<Button>test</Button>);

		const button = screen.getByText("test");
		expect(button).toBeInTheDocument();
	});

	test("render clear theme", () => {
		render(<Button theme={EButtonTheme.Clear}>test</Button>);

		const button = screen.getByText("test");
		expect(button).toHaveClass("clear");
	});
});
