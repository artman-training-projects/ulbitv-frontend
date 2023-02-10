module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "i18next"],
	rules: {
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		indent: ["error", "tab"],
		"react/jsx-filename-extension": [
			"error",
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "warn",
		"react/function-component-definition": "off",
		quotes: ["error", "double"],
		"implicit-arrow-linebreak": "off",
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"no-shadow": "off",
		"no-unused-vars": "warn",
		"no-underscore-dangle": "off",
		"no-tabs": "off",
		"i18next/no-literal-string": ["error", { markupOnly: true }],
	},
	globals: {
		__IS_DEV__: true,
	},
};
