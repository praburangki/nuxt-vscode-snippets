import type { VSnippetDefinition } from '../../types.ts';

export const script: VSnippetDefinition = {
  meta: {
    title: 'Pinia',
  },
  snippets: {
    'pstore': {
      name: 'Setup Pinia store',
      body: [
        'import { defineStore } from \'pinia\'',
        '',
        'export const use${TM_FILENAME_BASE/^(.*)$/${1:/pascalcase}/}Store = defineStore(\'$TM_FILENAME_BASE\', () => {',
        '\t$0',
        '\t',
        '\treturn {',
        '\t ',
        '\t}',
        '})',
        '',
      ],
    },
    'pstore:options': {
      name: 'Setup Pinia store (Options)',
      body: [
        'import { defineStore } from \'pinia\'',
        '',
        'export const use${TM_FILENAME_BASE/^(.*)$/${1:/pascalcase}/}Store = defineStore(\'$TM_FILENAME_BASE\', {',
        ' state: () => ({',
        '   $0',
        ' }),',
        ' getters: {},',
        ' actions: {},',
        '})',
        '',
      ],
    },
    'vuseStore': {
      name: 'Use store',
      body: 'const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()',
      alt: ['vus'],
    },
  },
};
