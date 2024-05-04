import type { VscSnippetDefinition, VscSnippetVariant } from '../types.ts';

import { replaceInFile } from '../deps.ts';
import {
  parseMultiline,
  replaceSymbol,
  replaceTabs,
} from '../utils/core.util.ts';
import {
  $col,
  $colCode,
  $colCodeBlock,
  $row,
  $table,
  htmlComment,
  joinByDoubleNewLine,
  joinByNewLine,
} from './table-html.ts';

interface SnippetRow {
  prefix: Array<string>;
  name: string;
  body: Array<string> | string;
}

function truncateOptions(str: string) {
  const regex = /\|([^|]+)\|/g;
  return str.replace(regex, (_match, p1) => {
    const [first, second, third] = p1.split(',').map((o: string) => o.trim());
    if (!third) {
      return `|${first},${second}|`;
    } else {
      return `|${first},${second},...|`;
    }
  });
}

function snippetRow({ prefix, name, body }: SnippetRow, lang?: string) {
  const cols = joinByNewLine([
    $colCode(prefix),
    $col(name),
    $colCodeBlock(truncateOptions(replaceTabs(parseMultiline(body))), lang),
  ]);

  return $row(cols);
}

function generateSnippetTable(items: Array<SnippetRow>, lang?: string) {
  const headings = ['Prefix', 'Name', 'Body'];
  const rows = items.map((item) => snippetRow(item, lang));

  return $table(headings, rows);
}

function generateSnippetSection({ meta, snippets }: VscSnippetDefinition) {
  const title = `### ${meta.title}`;
  const description = meta.description ?? '';
  const table = generateSnippetTable(
    Object.entries(snippets).map(([name, { body, prefix, description }]) => {
      return {
        name: replaceSymbol(name),
        body,
        prefix: Array.isArray(prefix) ? prefix : [prefix],
        description,
      };
    }),
    meta.lang,
  );

  return joinByNewLine([title, description, table, '']);
}

// there are no strict sections in this projects, maybe in the future divided by Vue, Nuxt, etc.
function generateVariantSection(variant: VscSnippetVariant) {
  const sections = variant.snippetDefinitions.map(generateSnippetSection);

  return joinByNewLine(sections);
}

export function generateDocs(variants: Array<VscSnippetVariant>) {
  return joinByDoubleNewLine(variants.map(generateVariantSection));
}

const docsGenId = 'docgen';
const docsGen = {
  start: htmlComment(`START:${docsGenId}`),
  end: htmlComment(`END:${docsGenId}`),
};

function docsBlock(s: string) {
  return joinByNewLine([docsGen.start, s, docsGen.end]);
}

export async function populateDocsBlock(input: string) {
  const regex = new RegExp(
    `${docsGen.start}[\\s\\S]*?${docsGen.end}`,
    'g',
  );

  const file = './README.md';
  const options = {
    files: file,
    from: regex,
    to: docsBlock(input),
  };

  try {
    const results = await replaceInFile(options);
    const readmeResult = results.find((r) => r.file === file);

    if (readmeResult?.hasChanged) {
      console.log('✅ README updated');
    } else {
      console.log('👍 README already up to date');
    }
  } catch (error) {
    console.error('Error while updating README:', error);
  }
}
