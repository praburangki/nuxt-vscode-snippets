import type { VSnippetDefinition } from '../../types.ts';

export const script: VSnippetDefinition = {
  meta: {
    title: 'Javascript',
  },
  snippets: {
    'imp': {
      name: 'import',
      body: 'import ${2:moduleName} from \'${1:module}\';$0',
    },
    'imn': {
      name: 'importNoModuleName',
      body: 'import \'${1:module}\';$0',
    },
    'imd': {
      name: 'importDestructing',
      body: 'import { $2 } from \'${1:module}\';$0',
    },
    'ime': {
      name: 'importEverything',
      body: 'import * as ${2:alias} from \'${1:module}\';$0',
    },
    'ima': {
      name: 'importAs',
      body: 'import { ${2:originalName} as ${3:alias} } from \'${1:module}\';$0',
    },
    'rqr': {
      name: 'require',
      body: 'require(\'${1:package}\');',
    },
    'req': {
      name: 'requireToConst',
      body: 'const ${1:packageName} = require(\'${1:package}\');$0',
    },
    'mde': {
      name: 'moduleExports',
      body: 'module.exports = {\n\t$0\n};\n',
    },
    'arr:methods': {
      name: 'array methods',
      body: [
        '${1:array}.${2|map,filter,find,findIndex,every,some,reduce|}((${3:element}) => {',
        '\t$0',
        '});',
      ],
    },
  },
};
