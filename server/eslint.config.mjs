// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import simpleSort from 'eslint-plugin-simple-import-sort';
import eslintImport from 'eslint-plugin-import';
import importAlias from '@dword-design/eslint-plugin-import-alias';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'simple-import-sort': simpleSort,
      import: eslintImport,
      'import-alias': importAlias,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // External packages.
            ['^'],
            // NestJS packages.
            ['^@nestjs'],
            // Internal aliased imports.
            ['^@\\w'],
            // Relative imports.
            ['^\\.'],
          ],
        },
      ],
      "import-alias/prefer-alias": [
        "error",
        {
          "alias": {
            "@problems": "./src/problems",
          }
        }
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
    },
  },
  {
    // disable `any` checks in tests
    files: ['src/**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
);
