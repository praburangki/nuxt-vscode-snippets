import type { VSnippetVariant } from '../types.ts';

import { javascript } from './javascript/index.ts';
import { nuxt } from './nuxt/index.ts';
import { pinia } from './pinia/index.ts';
import { vue } from './vue/index.ts';
import { vueRouter } from './vue-router/index.ts';

export const variants: Array<VSnippetVariant> = [
  ...vue,
  ...nuxt,
  ...pinia,
  ...vueRouter,
  ...javascript,
];
