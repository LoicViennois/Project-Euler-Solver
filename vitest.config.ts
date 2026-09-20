import * as fs from 'node:fs';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    {
      name: 'txt-loader',
      enforce: 'pre',
      load(id) {
        const cleanId = id.split('?')[0];
        if (cleanId.endsWith('.txt')) {
          const content = fs.readFileSync(cleanId, 'utf-8');
          return `export default ${JSON.stringify(content)};`;
        }
      },
    },
  ],
  test: {
    globals: true,
    include: ['src/**/*.spec.ts'],
  },
});
