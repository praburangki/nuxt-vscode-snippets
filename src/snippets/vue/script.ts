import type { VSnippetDefinition } from '../../types.ts';

export const script: VSnippetDefinition = {
  meta: {
    title: 'Script',
    description: 'Script setup and composables',
    lang: 'javascript',
  },
  snippets: {
    'v:ref': {
      name: 'Vue ref',
      body: 'const ${1:name} = ref($2)',
    },
    'v:ref:ts': {
      name: 'Vue ref (typed)',
      body: 'const ${1:name} = ref<$2>($3)',
    },
    'v:computed': {
      name: 'Vue computed',
      body: 'const ${1:name} = computed(() => $2)',
    },
    'v:computed:ts': {
      name: 'Vue computed (typed)',
      body: 'const ${1:name} = computed<$2>(() => $3)',
    },
    'v:computed:gs': {
      name: 'Vue computed (get/set)',
      body: [
        'const ${1:name} = computed({',
        '\tget: () => ${2},',
        '\tset: (${3:value}: ${4:string}) => {',
        '\t\t${5}',
        '\t},',
        '})',
      ],
    },
    'v:reactive': {
      name: 'Vue reactive',
      body: 'const ${1:name} = reactive({$2})',
    },
    'v:reactive:ts': {
      name: 'Vue reactive (typed)',
      body: 'const ${1:name}: ${2:type} = reactive({$3})',
    },
    'v:shallowRef': {
      name: 'Vue shallowRef',
      body: 'const ${1:name} = shallowRef($2)',
    },
    'v:toRef': {
      name: 'Vue toRef',
      body: 'toRef(${1:props}, \'$2\')',
    },
    'v:toRefs': {
      name: 'Vue toRefs',
      body: 'toRefs(${1:props})',
    },
    'v:unref': {
      name: 'Vue unref',
      body: 'unref($1)',
    },
    'v:readonly': {
      name: 'Vue readonly',
      body: 'readonly(${1:object})',
    },
    'v:ref:elem': {
      name: 'Vue element ref',
      body:
        'const ${1:elem} = ref<${2|HTMLInputElement,HTMLInputElement,HTMLDivElement,HTMLFormElement|} | null>(null)',
    },
    'v:watchEffect': {
      name: 'Vue watchEffect',
      body: [
        'watchEffect(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:watch': {
      name: 'Vue watch source',
      body: [
        'watch(${1:source}, (${2:val}) => {',
        '\t$0',
        '})',
      ],
    },
    'v:watch:inline': {
      name: 'Vue watch inline',
      body: 'watch(${1:source}, ${2:fn})',
    },
    'v:watch:getter': {
      name: 'Vue watch getter',
      body: [
        'watch(',
        '\t() => ${1:source},',
        '\t(${2:val}) => {',
        '\t\t$0',
        '})',
      ],
    },
    'v:watch:multiple': {
      name: 'Vue watch multiple',
      body: [
        'watch(',
        '\t[${1:source1}, ${2:source2}]',
        '\t([$1, $2]) => {',
        '\t\t$0',
        '\t}',
        ')',
      ],
    },
    'v:watch:immediate': {
      name: 'Vue watch immediate',
      body: [
        'watch(',
        '\t${1:source},',
        '\t(${2:val}) => {',
        '\t\t$0',
        '\t},',
        '\t{ immediate: true }',
        ')',
      ],
    },
    'v:watch:deep': {
      name: 'Vue watch deep',
      body: [
        'watch(',
        '\t${1:source},',
        '\t(${2:val}) => {',
        '\t\t$0',
        '\t},',
        '\t{ deep: true }',
        ')',
      ],
    },
    'v:props': {
      name: 'Vue defineProps',
      body: '${1:const props = }defineProps<${2:Props}>()',
    },
    'v:props:defaults': {
      name: 'Vue defineProps with defaults',
      body: [
        '${1:const props = }withDefaults(defineProps<${2:Props}>(), {',
        '\t$0',
        '})',
      ],
    },
    'v:emits': {
      name: 'Vue defineEmits',
      body: [
        '${1:const emit = }defineEmits<{',
        '\t${2:click}: [${3:payload}: ${4:string}],$5',
        '}>()',
      ],
    },
    'v:model': {
      name: 'Vue defineModel',
      body: 'const ${1:modelValue} = defineModel<${2:string}>($3)',
    },
    'v:emit': {
      name: 'Vue emit event',
      body: 'emit(\'$1\'$2)',
    },
    'v:expose': {
      name: 'Vue defineExpose',
      body: [
        'defineExpose({',
        '\t$1',
        '})',
      ],
    },
    'v:onMounted': {
      name: 'Vue onMounted',
      body: [
        'onMounted(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onMounted:async': {
      name: 'Vue onMounted',
      body: [
        'onMounted(async () => {',
        '\t$0',
        '})',
      ],
    },
    'v:onBeforeMount': {
      name: 'Vue onBeforeMount',
      body: [
        'onBeforeMount(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onUnmounted': {
      name: 'Vue onUnmounted',
      body: [
        'onUnmounted(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onBeforeUnmount': {
      name: 'Vue onBeforeUnmount',
      body: [
        'onBeforeUnmount(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onUpdated': {
      name: 'Vue onUpdated',
      body: [
        'onUpdated(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onBeforeUpdate': {
      name: 'Vue onBeforeUpdate',
      body: [
        'onBeforeUpdate(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onErrorCaptured': {
      name: 'Vue onErrorCaptured',
      body: [
        'onErrorCaptured(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onActivated': {
      name: 'Vue onActivated',
      body: [
        'onActivated(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:onDeactivated': {
      name: 'Vue onDeactivated',
      body: [
        'onDeactivated(() => {',
        '\t$0',
        '})',
      ],
    },
    'v:provide': {
      name: 'Vue provide',
      body: 'provide(${1:key}, ${2:value})',
    },
    'v:provide:ts': {
      name: 'Vue provide (typed)',
      body: 'provide<${1:string}>(${2:key}, ${3:value})',
    },
    'v:inject': {
      name: 'Vue inject',
      body: 'const ${1:value} = inject(${2:key})',
    },
    'v:inject:ts': {
      name: 'Vue inject (typed)',
      body: 'const ${1:value} = inject<${2:string}>(${3:key})',
    },
    'v:inject:default': {
      name: 'Vue inject with default',
      body: 'const ${1:value}  = inject(${2:key}, ${3:defaultValue})',
    },
    'v:inject:key': {
      name: 'Vue injection key',
      body: 'const ${1:key}: InjectionKey<${3:string}> = Symbol(\'$2\')',
    },
    'v:slots': {
      name: 'Vue useSlots',
      body: 'const slots = useSlots()',
    },
    'v:attrs': {
      name: 'Vue useAttrs',
      body: 'const attrs = useAttrs()',
    },
    'v:import': {
      name: 'Import from vue',
      body: 'import { $1 } from \'vue\'',
    },
  },
};
