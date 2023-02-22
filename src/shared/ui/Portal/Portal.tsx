import { ReactElement } from "react";
import { createPortal } from "react-dom";

import { IPortalProps } from "./interfaces";

const Portal = ({
	children,
	element = document.body,
}: IPortalProps): ReactElement => createPortal(children, element);

export default Portal;
