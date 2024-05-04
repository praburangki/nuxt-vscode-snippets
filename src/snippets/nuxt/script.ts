import type { VSnippetDefinition } from '../../types.ts';

export const script: VSnippetDefinition = {
  meta: {
    title: 'Nuxt (script)',
  },
  snippets: {
    'v:n:fetch': {
      name: 'Nuxt useFetch',
      body: 'const { data: ${1:data} } = await useFetch(\'$2\'$3)',
    },
    'v:n:fetch:cb': {
      name: 'Nuxt useFetch with callback',
      body: 'const { data: ${1:data} } = await useFetch(() => \'$2\'$3)',
    },
    'v:n:fetch:lazy': {
      name: 'Nuxt useLazyFetch',
      body: 'const { pending, data: ${1:data} } = useLazyFetch(\'$2\'$3)',
    },
    'v:n:fetch:lazy:cb': {
      name: 'Nuxt useLazyFetch callback',
      body: 'const { pending, data: ${1:data} } = useLazyFetch(() => \'$2\'$3)',
    },
    'v:n:fetch:post': {
      name: 'Nuxt useFetch POST',
      body: [
        'const { data: ${1:data} } = await useFetch(\'$2\', {',
        '\tmethod: \'POST\',',
        '\tbody: ${3:body},$4',
        '})',
      ],
    },
    'v:n:asyncdata': {
      name: 'Nuxt useAsyncData',
      body:
        'const { data: ${1:data} } = await useAsyncData(\'${2:key}\', () => $$fetch(\'$3\')$4)',
    },
    'v:n:asyncdata:lazy': {
      name: 'Nuxt useLazyAsyncData',
      body:
        'const { pending, data: ${1:data} } = useLazyAsyncData(\'${2:key}\', () => $$fetch(\'$3\')$4)',
    },
    'v:n:app': {
      name: 'Nuxt useNuxtApp',
      body: 'const app = useNuxtApp()',
    },
    'v:n:appConfig': {
      name: 'Nuxt useAppConfig',
      body: 'const appConfig = useAppConfig()',
    },
    'v:n:runtimeConfig': {
      name: 'Nuxt useRuntimeConfig',
      body: 'const config = useRuntimeConfig()',
    },
    'v:n:cookie': {
      name: 'Nuxt useCookie',
      body: 'const ${1:cookie} = useCookie(\'${2:$1}\'$3)',
    },
    'v:n:cookie:opts': {
      name: 'Nuxt useCookie with options',
      body: 'const ${1:cookie} = useCookie(\'${2:$1}\', { $3 })',
    },
    'v:n:data': {
      name: 'Nuxt useNuxtData',
      body: 'const { data: ${2:$1} } = useNuxtData(\'${1:key}\')',
    },
    'v:n:error': {
      name: 'Nuxt useError',
      body: 'const ${1:error} = useError()',
    },
    'v:n:state': {
      name: 'Nuxt useState',
      body: 'const ${1:state} = useState(\'${2:$1}\'$3)',
    },
    'v:n:state:init': {
      name: 'Nuxt useState (init)',
      body: 'const ${1:state} = useState(\'${2:$1}\', () => $3)',
    },
    'v:n:head': {
      name: 'Nuxt useHead',
      body: [
        'useHead({',
        '\t$1',
        '})',
      ],
    },
    'v:n:head:title': {
      name: 'Nuxt useHead title',
      body: [
        'useHead({',
        '\ttitle: $1,$0',
        '})',
      ],
    },
    'v:n:pageMeta': {
      name: 'Nuxt definePageMeta',
      body: [
        'definePageMeta({',
        '\t$1',
        '})',
      ],
    },
    'v:n:pageMeta:title': {
      name: 'Nuxt definePageMeta title',
      body: [
        'definePageMeta({',
        '\ttitle: \'$1\',$0',
        '})',
      ],
    },
    'v:n:pageMeta:layout': {
      name: 'Nuxt definePageMeta layout',
      body: [
        'definePageMeta({',
        '\tlayout: \'$1\',$0',
        '})',
      ],
    },
    'v:n:pageMeta:middleware': {
      name: 'Nuxt definePageMeta middleware',
      body: [
        'definePageMeta({',
        '\tmiddleware: [\'$1\'$2],$0',
        '})',
      ],
    },
    'v:n:to': {
      name: 'Nuxt navigateTo',
      body: 'navigateTo(\'$1\'$2)',
    },
    'v:n:to:obj': {
      name: 'Nuxt navigateTo object',
      body: 'navigateTo({ $1 }$2)',
    },
    'v:n:to:replace': {
      name: 'Nuxt navigateTo replace',
      body: 'navigateTo(\'$1\', { replace: true })',
    },
    'v:n:to:external': {
      name: 'Nuxt navigateTo external',
      body: 'navigateTo(\'$1\', { external: true })',
    },
    'v:n:to:redirect': {
      name: 'Nuxt navigateTo redirect',
      body: 'navigateTo(\'$1\', { redirectCode: ${2|301,302,307|} })',
    },
    'v:n:to:name': {
      name: 'Nuxt navigateTo name',
      body: [
        'navigateTo({',
        '\tname: \'$1\',$0',
        '})',
      ],
    },
    'v:n:to:path': {
      name: 'Nuxt navigateTo path',
      body: [
        'navigateTo({',
        '\tpath: \'$1\',$0',
        '})',
      ],
    },
    'v:n:plugin': {
      name: 'Nuxt plugin',
      body: [
        'export default defineNuxtPlugin((nuxtApp) => {',
        '\t$1',
        '})',
      ],
    },
    'v:n:plugin:vue': {
      name: 'Nuxt plugin use vue package',
      body: [
        'export default defineNuxtPlugin((nuxtApp) => {',
        '\tnuxtApp.vueApp.use($1)',
        '})',
      ],
    },
    'v:n:middleware:route': {
      name: 'Nuxt route middleware',
      body: [
        'export default defineNuxtRouteMiddleware((to, from) => {',
        '\t$1',
        '})',
      ],
    },
    'v:n:middleware:server': {
      name: 'Nuxt server middleware',
      body: [
        'export default defineEventHandler((event) => {',
        '\t$1',
        '})',
      ],
    },
    'v:n:api': {
      name: 'Nuxt api route',
      body: [
        'export default defineEventHandler(${1:async }(event) => {',
        '\t$2',
        '\t',
        '\treturn {',
        '\t\t$3',
        '\t}',
        '})',
      ],
    },
    'v:n:plugin:server': {
      name: 'Nuxt server plugin',
      body: [
        'export default defineNitroPlugin((nitroApp) => {',
        '\t$1',
        '})',
      ],
    },
    'v:n:readBody': {
      name: 'Nuxt readBody',
      body: 'const ${1:body} = await readBody(event)',
    },
    'v:n:getQuery': {
      name: 'Nuxt getQuery',
      body: 'const { $1 } = getQuery(event)',
    },
    'v:n:getCookie': {
      name: 'Nuxt getCookie',
      body: 'getCookie(event, \'${1:cookie}\')',
    },
    'v:n:setCookie': {
      name: 'Nuxt setCookie',
      body: 'setCookie(event, \'${1:cookie}\', ${2:value})',
    },
  },
};
