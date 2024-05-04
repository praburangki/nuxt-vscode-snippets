import type { VSnippetVariant } from '../../types.ts';

import { codeSnippets } from './code-snippets.ts';
import { script } from './script.ts';
import { sfc } from './sfc.ts';
import { template } from './template.ts';

export const vue: Array<VSnippetVariant> = [
  {
    fileName: 'vue',
    snippetDefinitions: [sfc],
  },
  {
    fileName: 'vue-template',
    snippetDefinitions: [template],
  },
  {
    fileName: 'vue-script',
    snippetDefinitions: [script, codeSnippets],
  },
];
