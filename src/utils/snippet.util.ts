import type { VSnippetDict, VscSnippetDict } from '../types.ts';

import { ensureDirSync } from '../deps.ts';
import { addSymbol } from './core.util.ts';

export function convertToVscSnippet(snippets: VSnippetDict) {
  return Object.entries(snippets)
    .reduce((acc, [prefix, { name, body, alt }]) => {
      const prefixes = [prefix];
      if (alt?.length) {
        prefixes.push(...alt);
      }
      acc[addSymbol(name)] = { prefix: prefixes, body };
      return acc;
    }, {} as VscSnippetDict);
}

export function groupSnippets(dicts: Array<VscSnippetDict>) {
  return dicts.reduce((acc, curr) => ({
    ...acc,
    ...curr,
  }));
}

export function generateSnippets(name: string, data: VscSnippetDict) {
  const path = './dist';
  const fileName = `${name}.code-snippets`;
  try {
    ensureDirSync(path);
    const file = `${path}/${fileName}`;

    Deno.writeTextFileSync(
      file,
      JSON.stringify(data, null, 2),
    );

    console.log(`✅ ${fileName}`);
  } catch (error) {
    console.log(`❌ ${fileName}`);
    console.error(error);
  }
}
