import { fireEvent, screen } from "@testing-library/react";

import { renderComponent } from "shared/lib";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
	test("render", () => {
		renderComponent(<Sidebar />);

		const sidebar = screen.getByTestId("Sidebar");
		expect(sidebar).toBeInTheDocument();
	});

	test("test toggle", () => {
		renderComponent(<Sidebar />);

		const sidebar = screen.getByTestId("Sidebar");
		const toggle = screen.getByTestId("Sidebar-toggle");
		fireEvent.click(toggle);

		expect(sidebar).toHaveClass("collapsed");
	});
});
