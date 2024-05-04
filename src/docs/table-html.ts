export function joinInline(s: Array<string>) {
  return s.join('');
}
export function joinByNewLine(s: Array<string>) {
  return s.join('\n');
}
export function joinByDoubleNewLine(s: Array<string>) {
  return s.join('\n\n');
}
export function indent(s: string, size = 2) {
  return `${' '.repeat(size)}${s}`;
}
export function escapeBackticks(s: string) {
  return s.replace(/`/g, '\`');
}

export function htmlComment(s: string) {
  return `<!-- ${s} -->`;
}
export function code(s: string) {
  return `<code>${s}</code>`;
}

export function codeBlock(s: string, lang = 'javascript') {
  return joinByNewLine([
    `${escapeBackticks(`\`\`\`${lang}`)}`,
    s,
    `${escapeBackticks('```')}`,
  ]);
}

export function $row(s: string) {
  return joinByNewLine(['', '<tr>', s, '</tr>']);
}

export function $col(s: string) {
  return `<td>${s}</td>`;
}
export function $colCode(s: Array<string> | string) {
  if (Array.isArray(s)) {
    return joinInline(['<td>', s.map(code).join(' / '), '</td>']);
  }
  return joinInline(['<td>', code(s), '</td>']);
}

export function $colCodeBlock(s: string, lang?: string) {
  return joinByDoubleNewLine(['<td>', codeBlock(s, lang), '</td>']);
}

export function $headerRow(headers: Array<string>) {
  const cols = joinByNewLine(headers.map($col));
  return $row(cols);
}

export function $table(headings: Array<string>, rows: Array<string>) {
  return joinByNewLine([
    '<table width="100%">',
    $headerRow(headings),
    joinByNewLine(rows),
    '</table>',
  ]);
}
