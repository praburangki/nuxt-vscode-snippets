import type { VSnippetDefinition } from '../../types.ts';

export const template: VSnippetDefinition = {
  meta: {
    title: 'Template',
    lang: 'html',
  },
  snippets: {
    'v:slot': {
      name: 'slot',
      body: '<slot$1>$0</slot>',
    },
    'v:slot:named': {
      name: 'named slot',
      body: [
        '<slot name="${1:default}">',
        '\t$0',
        '</slot>',
      ],
    },
    'v:template:named': {
      name: 'named template',
      body: [
        '<template #${1:default}>',
        '\t$0',
        '</template>',
      ],
    },
    'v:component': {
      name: 'Vue component',
      body: '<component :is="$1">$0</component>',
    },
    'v:keep-alive': {
      name: 'Vue KeepAlive',
      body: [
        '<keep-alive $1>\n\t$0\n</keep-alive>',
      ],
    },
    'v:teleport': {
      name: 'Vue teleport',
      body: '<teleport to="$1">\n\t$0\n</teleport>',
    },
    'v:transition': {
      name: 'Vue Transition',
      body: '<transition $1>\n\t$0\n</transition>',
    },
    'v:transition:name': {
      name: 'Vue Transition with name',
      body: '<transition name="$1" $2>\n\t$0\n</transition>',
    },
    'v:transition:type': {
      name: 'Vue Transition with type',
      body:
        '<transition type="${1|transition,animation|}" $2>\n\t$0\n</transition>',
    },
    'v:transition:appear': {
      name: 'Vue Transition with appear',
      body: '<transition appear $1>\n\t$0\n</transition>',
    },
    'v:transition-group': {
      name: 'Vue TransitionGroup',
      body:
        '<transition-group name="$1" as="${2|ul,div,section|}" $3>\n\t$0\n</transition-group>',
    },
    'v:suspense': {
      name: 'Vue Suspense',
      body: '<suspense>\n\t$0\n</suspense>',
    },
    'v:suspense:fallback': {
      name: 'Vue Suspense with fallback',
      body: [
        '<suspense>',
        '\t$0',
        '\t<template #fallback>',
        '\t\t$1',
        '\t</template>',
        '</suspense>',
      ],
    },
    'v:text': {
      name: 'v-text',
      body: 'v-text="$1"',
    },
    'v:html': {
      name: 'v-html',
      body: 'v-html="$1"',
    },
    'v:show': {
      name: 'v-show',
      body: 'v-show="$1"',
    },
    'v:if': {
      name: 'v-if',
      body: 'v-if="$1"',
    },
    'v:eif': {
      name: 'v-else-if',
      body: 'v-else-if="$1"',
    },
    'v:else': {
      name: 'v-else',
      body: 'v-else',
    },
    'v:for': {
      name: 'v-for',
      body: 'v-for="${2:item} in ${1:items}" :key="$2$3"',
    },
    'v:fori': {
      name: 'v-for (indexed)',
      body: 'v-for="(${2:item}, ${3:i}) in ${1:items}" :key="${4:$3}"',
    },
    'v:forr': {
      name: 'v-for range',
      body: 'v-for="${1:n} in ${2:5}" :key="$1"',
    },
    'v:emit': {
      name: 'emit',
      body: 'emit(\'$1\'$2)',
    },
    'v:emit:pass': {
      name: 'Vue pass emit',
      body:
        '@${1|click,input,change,focus,blur|}="\\$emit(\'${2:$1}\', \\$event)"',
    },
    'v:on': {
      name: 'v-on',
      body: 'v-on="${1:emits}"',
    },
    'v:on:event': {
      name: 'event handler',
      body: '@$1="$2"',
    },
    'v:on:click': {
      name: 'click handler',
      body: '@click="${1:onClick}"',
    },
    'v:on:input': {
      name: 'input handler',
      body: '@input="${1:onInput}"',
    },
    'v:on:update': {
      name: 'update handler',
      body: '@update="${1:onUpdate}"',
    },
    'v:on:change': {
      name: 'change handler',
      body: '@change="${1:onChange}"',
    },
    'v:on:blur': {
      name: 'blur handler',
      body: '@blur="${1:onBlur}"',
    },
    'v:on:focus': {
      name: 'focus handler',
      body: '@focus="${1:onFocus}"',
    },
    'v:on:submit': {
      name: 'submit handler',
      body: '@submit${1:.prevent}="${2:onSubmit}"',
    },
    'v:bind': {
      name: 'v-bind',
      body: 'v-bind="$1"',
    },
    'v:bind:attrs': {
      name: 'v-bind attrs',
      body: 'v-bind="\\$attrs"',
    },
    'v:bind:props': {
      name: 'v-bind props',
      body: 'v-bind="\\$props"',
    },
    'v:bind:full': {
      name: 'v-bind props and attrs',
      body: 'v-bind="[\\$props, \\$attrs]"',
    },
    'v:model': {
      name: 'v-model',
      body: 'v-model="$1"',
    },
    'v:model:number': {
      name: 'v-model.number',
      body: 'v-model.number="$1"',
    },
    'v:model:trim': {
      name: 'v-model.trim',
      body: 'v-model.trim="$1"',
    },
    'v:model:custom': {
      name: 'custom v-model',
      body: 'v-model:${1:custom}="$2"',
    },
    'v:v-slot': {
      name: 'scoped slot',
      body: 'v-slot="{$1}"',
    },
    'v:pre': {
      name: 'v-pre',
      body: 'v-pre="$1"',
    },
    'v:once': {
      name: 'v-once',
      body: 'v-once',
    },
    'v:memo': {
      name: 'v-memo',
      body: 'v-memo="[$1]"',
    },
    'v:cloak': {
      name: 'v-cloak',
      body: 'v-cloak',
    },
    'v:key': {
      name: 'Vue key',
      body: ':key="$1"',
    },
    'v:ref': {
      name: 'Vue ref',
      body: 'ref="$1"',
    },
    'v:name': {
      name: 'name property',
      body: '${1|name,:name|}="$2"',
    },
    'v:is': {
      name: 'is property',
      body: '${1|is,:is|}="$2"',
    },
    'v:b': {
      name: 'bind attribute',
      body: ':${1:prop}="${2:$1}"',
    },
    'v:a': {
      name: 'attribute',
      body: '${1:prop}="$2"',
    },
    'v:class': {
      name: 'Vue classes',
      body: ':class="$1"',
    },
    'v:class:list': {
      name: 'Vue classes list',
      body: ':class="[$1]"',
    },
    'v:class:cond': {
      name: 'Vue conditional classes',
      body: ':class="{ $1: $2 }"',
    },
    'v:style': {
      name: 'Vue inline style',
      body: ':style="{ $1: $2 }"',
    },
    'v:style:list': {
      name: 'Vue inline style list',
      body: ':style="[$1]"',
    },
    'v:v': {
      name: 'Vue ',
      body: '{{ $1 }}',
    },
    'v:vt': {
      name: 'Vue i18n translation',
      body: '{{ $t(\'$1\') }}',
    },
    'v:if:slot': {
      name: 'v-if slot defined',
      body: 'v-if="\\$slots.${1:default}"',
    },
    'v:if:slot-prop': {
      name: 'v-if slot or prop defined',
      body: 'v-if="\\$slots.${1:label} || ${2:$1}"',
    },
    'v:for:template': {
      name: 'v-for in template',
      body: [
        '<${1|template,div,li|} v-for="${3:item} in ${2:items}" :key="$3$4">',
        '\t$0',
        '</$1>',
      ],
    },
    'v:fori:template': {
      name: 'v-for (indexed) in template',
      body: [
        '<${1|template,div,li|} v-for="(${3:item}, ${4:i}) in ${2:items}" :key="${5:$4}">',
        '\t$0',
        '</$1>',
      ],
    },
    'v:if:template': {
      name: 'v-if in template',
      body: [
        '<${1|template,div,p,ul,section|} v-if="$2">',
        '\t$0',
        '</$1>',
      ],
    },
    'v:tif': {
      name: 'template with v-if',
      body: [
        '<template v-if="$2">',
        '\t$0',
        '</template>',
      ],
    },
  },
};
