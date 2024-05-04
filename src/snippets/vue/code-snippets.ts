import type { VSnippetDefinition } from '../../types.ts';

export const codeSnippets: VSnippetDefinition = {
  meta: {
    title: 'Code snippets',
    description: 'Useful vue snippets and helpers',
  },
  snippets: {
    'v:composable': {
      name: 'Vue define composable',
      body: [
        'export function use${1/(.*)/${1:/pascalcase}/}() {',
        '\t$0',
        '\t',
        '\treturn {',
        '\t\t',
        '\t}',
        '}',
        '',
      ],
    },
    'v:composable:file': {
      name: 'Vue define composable in file',
      body: [
        'export function ${TM_FILENAME_BASE/^(.*)$/${1:/pascalcase}/}() {',
        '\t$0',
        '\t',
        '\treturn {',
        '\t\t',
        '\t}',
        '}',
        '',
      ],
    },
    'v:use': {
      name: 'Use composable',
      body: 'const ${2:$1} = use${1/(.*)/${1:/capitalize}/}($3)',
    },
    'v:used': {
      name: 'Use composable with destructuring',
      body: 'const { $2 } = use${1/(.*)/${1:/capitalize}/}($3)',
    },
    'v:has-slot': {
      name: 'Vue check for slots',
      body: [
        'const slots = useSlots()',
        'function hasSlot(name: string) {',
        '\treturn !!slots[name]',
        '}',
      ],
    },
  },
};
