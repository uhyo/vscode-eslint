const globals = require('globals');
const typescriptESLintParser = require('@typescript-eslint/parser')
const typescriptESLintPlugin = require('@typescript-eslint/eslint-plugin')

module.exports = [
	"eslint:recommended",
	{
		files: ["**/*.js", "**/*.ts"],
		languageOptions: {
			parserOptions: {
				sourceType: "module"
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es6,
				...globals.commonjs
			}
		},
	},
	{
		files: ["**/*.ts"],
		languageOptions: {
			parser: typescriptESLintParser,
		},
		plugins: {
			"@typescript-eslint": typescriptESLintPlugin,
		},
		rules: {
			"@typescript-eslint/consistent-type-assertions": ["error", {
				assertionStyle: "never"
			}]
		}
	},
	{
		files: ["sub/*.js"],
		rules: {
			"no-undef": "warn",
			"no-console": "warn"
		}
	}
]