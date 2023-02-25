import { ILoginSchema } from "features/AuthByUsername";
import { IUserSchema } from "entities/User";

export interface IStateSchema {
	user: IUserSchema;
	loginForm?: ILoginSchema;
}
