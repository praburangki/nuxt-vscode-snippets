import type { VSnippetDefinition } from '../../types.ts';

export const sfc: VSnippetDefinition = {
  meta: {
    title: 'Vue SFC',
    description: '`.vue` files',
    lang: 'html',
  },
  snippets: {
    'v:base': {
      name: 'Vue SFC',
      body: [
        '<script lang="ts" setup>',
        '$0',
        '</script>',
        '',
        '<template>',
        '\t$1',
        '</template>',
        '',
      ],
    },
    'v:base:full': {
      name: 'Vue SFC with style | postcss',
      body: [
        '<script lang="ts" setup>',
        '$0',
        '</script>',
        '',
        '<template>',
        '\t$1',
        '</template>',
        '',
        '<style lang="postcss" scoped>',
        '\t',
        '</style>',
        '',
      ],
    },
    'v:base:full:css': {
      name: 'Vue SFC with style | css',
      body: [
        '<script lang="ts" setup>',
        '$0',
        '</script>',
        '',
        '<template>',
        '\t$1',
        '</template>',
        '',
        '<style lang="css" scoped>',
        '\t',
        '</style>',
        '',
      ],
    },
    'v:base:full:scss': {
      name: 'Vue SFC with style | scss',
      body: [
        '<script lang="ts" setup>',
        '$0',
        '</script>',
        '',
        '<template>',
        '\t$1',
        '</template>',
        '',
        '<style lang="scss" scoped>',
        '\t',
        '</style>',
        '',
      ],
    },
    'v:base:full:less': {
      name: 'Vue SFC with style | less',
      body: [
        '<script lang="ts" setup>',
        '$0',
        '</script>',
        '',
        '<template>',
        '\t$1',
        '</template>',
        '',
        '<style lang="less" scoped>',
        '\t',
        '</style>',
        '',
      ],
    },
    'v:base:script': {
      name: 'Vue script setup | ts',
      body: [
        '<script lang="ts" setup>',
        '$0',
        '</script>',
        '',
      ],
    },
    'v:base:template': {
      name: 'Vue template',
      body: [
        '<template>',
        '\t$0',
        '</template>',
        '',
      ],
    },
    'v:base:style': {
      name: 'Vue scoped style | postcss',
      body: [
        '<style lang="postcss" scoped>',
        '$0',
        '</style>',
        '',
      ],
    },
    'v:base:style:lang': {
      name: 'Vue style with language option',
      body: [
        '<style lang="${1|css,postcss,scss,less|}"${2| scoped, |}>',
        '$0',
        '</style>',
        '',
      ],
    },
    'v:base:style:css': {
      name: 'Vue scoped style | css',
      body: [
        '<style lang="css" scoped>',
        '$0',
        '</style>',
        '',
      ],
    },
    'v:base:style:scss': {
      name: 'scoped style | scss',
      body: [
        '<style lang="scss" scoped>',
        '$0',
        '</style>',
        '',
      ],
    },
    'v:base:style:less': {
      name: 'scoped style | less',
      body: [
        '<style lang="less" scoped>',
        '$0',
        '</style>',
        '',
      ],
    },
    'v:base:style:module': {
      name: 'Vue style with CSS modules',
      body: [
        '<style module$1>',
        '$0',
        '</style>',
        '',
      ],
    },
    'v:base:style:src': {
      name: 'Vue scoped style with src',
      body: [
        '<style scoped src="$1">',
        '$0',
        '</style>',
        '',
      ],
    },
  },
};
