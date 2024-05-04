import type { VSnippetDefinition } from '../../types.ts';

export const script: VSnippetDefinition = {
  meta: {
    title: 'Vue Router (script)',
    lang: 'javascript',
  },
  snippets: {
    'v:router': {
      name: 'Vue router',
      body: 'const ${1:router} = useRouter()',
    },
    'v:route': {
      name: 'Vue route',
      body: 'const ${1:route} = useRoute()',
    },
    'v:router:create': {
      name: 'Create Vue router',
      body: [
        'const router = createRouter({',
        '\thistory: createWebHashHistory(),',
        '\troutes: ${1:routes},',
        '\tscrollBehavior(to, from, savedPosition) {',
        '\t\t$2',
        '\t}',
        '})',
      ],
    },
  },
};
