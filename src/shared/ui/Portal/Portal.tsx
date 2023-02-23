import { ReactElement } from "react";
import { createPortal } from "react-dom";

import { IPortalProps } from "./interfaces";

export const Portal = ({
	children,
	element = document.body,
}: IPortalProps): ReactElement => createPortal(children, element);
