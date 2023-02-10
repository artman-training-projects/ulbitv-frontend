import { classNames } from "./classNames";

describe("classNames", () => {
	test("with only first param", () => {
		const someClass = "someClass";

		const styles = classNames(someClass);
		expect(styles).toBe(someClass);
	});

	test("with additional class", () => {
		const classes = "someClass";
		const additionalClasses = ["class1", "class2"];
		const expected = `${classes} ${additionalClasses.join(" ")}`;

		const styles = classNames(classes, {}, additionalClasses);
		expect(styles).toBe(expected);
	});

	test("with mods", () => {
		const classes = "someClass";
		const additionalClasses = ["class1", "class2"];
		const mods = {
			hovered: true,
			scrollable: false,
			active: undefined as undefined,
		};
		const expected = `${classes} ${additionalClasses.join(" ")} hovered`;

		const styles = classNames(classes, mods, additionalClasses);
		expect(styles).toBe(expected);
	});
});
