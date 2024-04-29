import js from '@eslint/js';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	...eslintPluginAstro.configs['flat/recommended'],
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	{
		ignores: ['**/temp.js', 'dist/*'],
	},
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
		},
	},
];
