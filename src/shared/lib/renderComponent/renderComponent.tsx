import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import i18nForTests from "shared/config/i18n/i18nForTests";

import { IRenderOptions } from "./interfaces";

export function renderComponent(
	component: ReactNode,
	options: IRenderOptions = {}
) {
	const { route = "/", initialState } = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState as IStateSchema}>
				<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	);
}
