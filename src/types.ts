export interface VscSnippet {
  prefix: Array<string> | string;
  body: Array<string> | string;
  description?: string;
}
export type VscSnippetDict = Record<string, VscSnippet>;

export type VSnippet = {
  alt?: Array<string>;
  name: string;
} & Omit<VscSnippet, 'prefix'>;
export type VSnippetDict = Record<string, VSnippet>;

export interface SnippetMeta {
  title: string;
  description?: string;
  lang?: string;
}

export interface SnippetDefinition<T> {
  meta: SnippetMeta;
  snippets: T;
}
export type VSnippetDefinition = SnippetDefinition<VSnippetDict>;
export type VscSnippetDefinition = SnippetDefinition<VscSnippetDict>;

export interface SnippetVariant<T> {
  label?: string;
  description?: string;
  fileName: string;
  snippetDefinitions: Array<T>;
}

export type VSnippetVariant = SnippetVariant<VSnippetDefinition>;
export type VscSnippetVariant = SnippetVariant<VscSnippetDefinition>;
