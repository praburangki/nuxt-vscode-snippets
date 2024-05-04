import type { VSnippetDefinition } from '../../types.ts';

export const template: VSnippetDefinition = {
  meta: {
    title: 'Nuxt (template)',
    lang: 'html',
  },
  snippets: {
    'v:n:link': {
      name: 'NuxtLink',
      body: '<NuxtLink ${1|to,:to|}="$2">$3</NuxtLink>',
    },
    'v:n:link:blank': {
      name: 'NuxtLink with target _blank',
      body: '<NuxtLink ${1|to,:to|}="$2" target="_blank" $3>$4</NuxtLink>',
    },
    'v:n:link:external': {
      name: 'NuxtLink with target external',
      body:
        '<NuxtLink ${1|to,:to|}="$2" external target="${3|_blank,_self|}" $4>$5</NuxtLink>',
    },
    'v:n:link:param': {
      name: 'NuxtLink with param',
      body: '<NuxtLink :to="`$1${${2:id}}$3`" $4>$5</NuxtLink>',
    },
    'v:n:link:obj': {
      name: 'NuxtLink with object',
      body: '<NuxtLink :to="{ $1 }" $2>$3</NuxtLink>',
    },
    'v:n:link:name': {
      name: 'NuxtLink with name',
      body: '<NuxtLink :to="{ name: \'$1\'$2 }" $3>$4</NuxtLink>',
    },
    'v:n:link:path': {
      name: 'NuxtLink with path',
      body: '<NuxtLink :to="{ path: \'$1\'$2 }" $3>$4</NuxtLink>',
    },
    'v:n:loading': {
      name: 'NuxtLoadingIndicator',
      body: '<NuxtLoadingIndicator $1/>',
    },
    'v:n:layout': {
      name: 'NuxtLayout',
      body: '<NuxtLayout $1>$2</NuxtLayout>',
    },
    'v:n:layout:name': {
      name: 'NuxtLayout with name',
      body: '<NuxtLayout ${2|name,:name|}="$3">$4</NuxtLayout>',
    },
    'v:n:page': {
      name: 'NuxtPage',
      body: '<NuxtPage $1/>',
    },
    'v:n:page:static': {
      name: 'NuxtPage with static key',
      body: '<NuxtPage page-key="static" $1/>',
    },
    'v:n:client': {
      name: 'ClientOnly',
      body: '<ClientOnly $1>$2</ClientOnly>',
    },
    'v:n:client:fallbacks': {
      name: 'ClientOnly with fallback props',
      body:
        '<ClientOnly fallback-tag="${1:span}" fallback="${2:Loading...}">$3</ClientOnly>',
    },
    'v:n:client:fallback': {
      name: 'ClientOnly with fallback template',
      body: [
        '<ClientOnly>',
        '\t<template #fallback>',
        '\t\t$0',
        '\t</template>',
        '</ClientOnly>',
      ],
    },
    'v:n:Teleport': {
      name: 'Nuxt Teleport',
      body: '<Teleport to="$1">\n\t$0\n</Teleport>',
    },
  },
};
