import type { VSnippetVariant } from '../../types.ts';

import { script } from './script.ts';
import { template } from './template.ts';

export const vueRouter: Array<VSnippetVariant> = [
  {
    fileName: 'vue-router-script',
    snippetDefinitions: [script],
  },
  {
    fileName: 'vue-router-template',
    snippetDefinitions: [template],
  },
];
