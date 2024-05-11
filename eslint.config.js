import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  pluginReactConfig,
  {
    ignores: [".eslintrc.cjs", "vite.config.ts"],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    rules: { "react/react-in-jsx-scope": "off", "react/jsx-uses-react": "off" },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  { languageOptions: { globals: globals.browser } },
];
