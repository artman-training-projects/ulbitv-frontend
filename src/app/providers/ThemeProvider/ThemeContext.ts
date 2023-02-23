import { createContext } from "react";

import { IThemeContextProps } from "./interfaces";

export const ThemeContext = createContext<IThemeContextProps>({});
