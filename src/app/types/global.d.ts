declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}

	const classNames: IClassNames;
	export = classNames;
}

declare module "*.svg" {
	export const src: string;

	const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}

declare module "*.png" {
	const src: string;
	export default src;
}

declare module "*.jpeg" {
	const src: string;
	export default src;
}

declare const __IS_DEV__: boolean;
