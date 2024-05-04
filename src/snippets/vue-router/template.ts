import type { VSnippetDefinition } from '../../types.ts';

export const template: VSnippetDefinition = {
  meta: {
    title: 'Vue Router (template)',
    lang: 'html',
  },
  snippets: {
    'v:to': {
      name: 'Vue Router to',
      body: '${1|to,:to|}="$2"',
    },
    'v:to:param': {
      name: 'Vue Router :to with param',
      body: ':to="`$1${${2:id}}$3`"',
    },
    'v:to:obj': {
      name: 'Vue Router :to object',
      body: ':to="{ $1 }"',
    },
    'v:to:name': {
      name: 'Vue Router :to name',
      body: ':to="{ name: \'$1\',$2 }"',
    },
    'v:to:path': {
      name: 'Vue Router :to path',
      body: ':to="{ path: \'$1\',$2 }"',
    },
    'v:view': {
      name: 'RouterView',
      body: '<RouterView>\n\t$0\n</RouterView>',
    },
    'v:link': {
      name: 'RouterLink',
      body: '<RouterLink ${1|to,:to|}="$2">$3</RouterLink>',
    },
    'v:link:param': {
      name: 'RouterLink with param',
      body: '<RouterLink :to="`$1${${2:id}}$3`">$4</RouterLink>',
    },
    'v:link:obj': {
      name: 'RouterLink with object',
      body: '<RouterLink :to="{ $1 }">$2</RouterLink>',
    },
    'v:link:name': {
      name: 'RouterLink with name',
      body: '<RouterLink :to="{ name: \'$1\'$2 }">$3</RouterLink>',
    },
    'v:link:path': {
      name: 'RouterLink with path',
      body: '<RouterLink :to="{ path: \'$1\'$2 }">$3</RouterLink>',
    },
  },
};
