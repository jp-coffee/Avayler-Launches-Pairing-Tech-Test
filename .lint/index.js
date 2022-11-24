// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require("./prettier.js");

/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
		browser: false,
		es2020: true,
		node: true,
		jest: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "prettier", "import"],
	rules: {
		"prettier/prettier": ["error", prettierConfig],
		"@typescript-eslint/explicit-function-return-type": "off",
		"no-debugger": "error",
		"no-console": ["warn", { allow: ["warn", "error", "debug"] }],
		"no-warning-comments": ["error", { terms: ["todo", "fixme", "xxx"] }],
		"sort-imports": [
			"error",
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
			},
		],
		"import/order": [
			"error",
			{
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
				"newlines-between": "always",
				pathGroups: [
					{
						pattern: "~**/**",
						group: "external",
						position: "after",
					},
					{
						pattern: "@**/**",
						group: "external",
						position: "after",
					},
				],
			},
		],
	},
};
