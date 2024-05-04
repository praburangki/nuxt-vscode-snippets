const SYMBOL = '🟢';

export function replaceSymbol(str: string) {
  return str.replace(` ${SYMBOL}`, '');
}

export function addSymbol(str: string) {
  return `${str} ${SYMBOL}`;
}

export function parseMultiline(s: Array<string> | string) {
  return Array.isArray(s) ? s.join('\n') : s;
}

export const replaceTabs = (s: string) => s.replace(/\t/g, '  ');
