import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  pluginReactConfig,
  {
    ignores: ['.eslintrc.cjs', 'vite.config.ts']
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true
        }
      ],
      'no-use-before-define': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],
      semi: 'error',
      indent: 'off',
      'no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      'comma-dangle': 0,
      'react/jsx-closing-tag-location': 'off',
      'import/no-extraneous-dependencies': [
        'off',
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false
        }
      ],
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.tsx']
        }
      ],
      'import/prefer-default-export': 'off',
      'import/extensions': [
        'off',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never'
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  { languageOptions: { globals: globals.browser } },

  eslintConfigPrettier,
  eslintPluginPrettierRecommended
];
