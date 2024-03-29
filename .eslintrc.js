module.exports = {
	root: true,
	extends: [
		"airbnb",
		"airbnb-typescript",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		warnOnUnsupportedTypeScriptVersion: false,
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint", "prettier"],
	settings: {
		extensions: [".ts", ".tsx", ".js"],
		react: {
			version: "detect",
		},
		"import/extensions": [".ts", ".tsx", ".js"],
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/core-modules": ["react", "prop-types", "config"],
		"import/resolver": {
			typescript: {},
			node: {
				extensions: [".ts", ".tsx", ".js", ".css", ".png", ".jpg", ".svg"],
				paths: ["src"],
			},
		},
	},
	rules: {
		"@typescript-eslint/member-delimiter-style": [
			"warn",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi",
					requireLast: false,
				},
			},
		],
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"import/prefer-default-export": 0,
		"react/jsx-props-no-spreading": 0,
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
			},
		],
	},
	overrides: [
		{
			files: ["src/**/*.ts", "src/**/*.tsx"],
			env: {
				browser: true,
			},
		},
		{
			files: [
				"gatsby-config.ts",
				"gatsby-node.ts",
				"gatsby-ssr.ts",
				"jest.config.js",
				"lint-staged.config.js",
				"postcss.config.js",
				"tailwind.config.js",
			],
			env: {
				node: true,
			},
		},
		{
			files: ["*.test.ts", "*.test.tsx", "src/__mocks__/*.ts"],
			env: {
				jest: true,
			},
			rules: {
				"react/destructuring-assignment": 0,
			},
		},
		{
			files: [
				"gatsby-config.ts",
				"gatsby-node.ts",
				"tailwind.config.js",
				"postcss.config.js",
				"jest.preprocess.js",
				"src/jest.setup.tsx",
				"*.test.ts",
				"*.test.tsx",
				"*.stories.tsx",
			],
			env: {
				jest: true,
			},
			rules: {
				"import/no-extraneous-dependencies": [
					"error",
					{
						devDependencies: true,
						optionalDependencies: true,
						peerDependencies: true,
					},
				],
			},
		},
		{
			files: ["tailwind.config.js", "postcss.config.js"],
			rules: {
				"global-require": 0,
			},
		},
		{
			files: [
				"tailwind.config.js",
				"postcss.config.js",
				"gatsby-node.ts",
				"gatsby-config.ts",
				"jest.preprocess.js",
			],
			rules: {
				"@typescript-eslint/no-var-requires": 0,
			},
		},
	],
};
