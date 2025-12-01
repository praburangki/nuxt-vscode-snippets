<br>

<p align="center">
<img src="https://raw.githubusercontent.com/praburangki/nuxt-vscode-snippets/main/images/logo.png" style="width:100px;" />
</p>

<h1 align="center">Vue and Nuxt Snippets for VSCode</h1>

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/praburangki.nuxt-snippets?color=blue)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/praburangki.nuxt-snippets?color=success)
![GitHub](https://img.shields.io/github/license/ExEr7um/vue3-vscode-snippets)
![Vue Version](https://img.shields.io/badge/vue-3-%234FC08D?logo=vuedotjs)

## Installation

- You can do it by finding `Vue & Nuxt Snippets` by `praburangki` in VS Code marketplace and clicking install.
- Or you can follow [this link](https://marketplace.visualstudio.com/items?itemName=praburangki.nuxt-snippets) and click install.

## Snippet syntax

### Tabstops
- `$1`, `$2`, `$3` specify cursor locations, in order in which tabstops will be visited
- `$0` denotes the final cursor position
- Multiple occurrences of the same tabstop are linked and updated in sync

### Placeholders
- Tabstops with default values → `${1:name}` 

### Choices
- Tabstops with multiple values → `${1|one,two,three|}`. 
- Truncated in documentation, for easier viewing → `${1|one,...|}`. 


## Snippets

<!-- START:docgen -->
### Vue SFC
`.vue` files
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:base</code></td>
<td>Vue SFC</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

```

</td>
</tr>

<tr>
<td><code>v:base:full</code></td>
<td>Vue SFC with style | postcss</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="postcss" scoped>
  
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:full:css</code></td>
<td>Vue SFC with style | css</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="css" scoped>
  
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:full:scss</code></td>
<td>Vue SFC with style | scss</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="scss" scoped>
  
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:full:less</code></td>
<td>Vue SFC with style | less</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="less" scoped>
  
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:script</code></td>
<td>Vue script setup | ts</td>
<td>

```html
<script lang="ts" setup>
$0
</script>

```

</td>
</tr>

<tr>
<td><code>v:base:template</code></td>
<td>Vue template</td>
<td>

```html
<template>
  $0
</template>

```

</td>
</tr>

<tr>
<td><code>v:base:style</code></td>
<td>Vue scoped style | postcss</td>
<td>

```html
<style lang="postcss" scoped>
$0
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:style:lang</code></td>
<td>Vue style with language option</td>
<td>

```html
<style lang="${1|css,postcss,...|}"${2|scoped,|}>
$0
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:style:css</code></td>
<td>Vue scoped style | css</td>
<td>

```html
<style lang="css" scoped>
$0
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:style:scss</code></td>
<td>scoped style | scss</td>
<td>

```html
<style lang="scss" scoped>
$0
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:style:less</code></td>
<td>scoped style | less</td>
<td>

```html
<style lang="less" scoped>
$0
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:style:module</code></td>
<td>Vue style with CSS modules</td>
<td>

```html
<style module$1>
$0
</style>

```

</td>
</tr>

<tr>
<td><code>v:base:style:src</code></td>
<td>Vue scoped style with src</td>
<td>

```html
<style scoped src="$1">
$0
</style>

```

</td>
</tr>
</table>


### Template

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:slot</code></td>
<td>slot</td>
<td>

```html
<slot$1>$0</slot>
```

</td>
</tr>

<tr>
<td><code>v:slot:named</code></td>
<td>named slot</td>
<td>

```html
<slot name="${1:default}">
  $0
</slot>
```

</td>
</tr>

<tr>
<td><code>v:template:named</code></td>
<td>named template</td>
<td>

```html
<template #${1:default}>
  $0
</template>
```

</td>
</tr>

<tr>
<td><code>v:component</code></td>
<td>Vue component</td>
<td>

```html
<component :is="$1">$0</component>
```

</td>
</tr>

<tr>
<td><code>v:keep-alive</code></td>
<td>Vue KeepAlive</td>
<td>

```html
<keep-alive $1>
  $0
</keep-alive>
```

</td>
</tr>

<tr>
<td><code>v:teleport</code></td>
<td>Vue teleport</td>
<td>

```html
<teleport to="$1">
  $0
</teleport>
```

</td>
</tr>

<tr>
<td><code>v:transition</code></td>
<td>Vue Transition</td>
<td>

```html
<transition $1>
  $0
</transition>
```

</td>
</tr>

<tr>
<td><code>v:transition:name</code></td>
<td>Vue Transition with name</td>
<td>

```html
<transition name="$1" $2>
  $0
</transition>
```

</td>
</tr>

<tr>
<td><code>v:transition:type</code></td>
<td>Vue Transition with type</td>
<td>

```html
<transition type="${1|transition,animation|}" $2>
  $0
</transition>
```

</td>
</tr>

<tr>
<td><code>v:transition:appear</code></td>
<td>Vue Transition with appear</td>
<td>

```html
<transition appear $1>
  $0
</transition>
```

</td>
</tr>

<tr>
<td><code>v:transition-group</code></td>
<td>Vue TransitionGroup</td>
<td>

```html
<transition-group name="$1" as="${2|ul,div,...|}" $3>
  $0
</transition-group>
```

</td>
</tr>

<tr>
<td><code>v:suspense</code></td>
<td>Vue Suspense</td>
<td>

```html
<suspense>
  $0
</suspense>
```

</td>
</tr>

<tr>
<td><code>v:suspense:fallback</code></td>
<td>Vue Suspense with fallback</td>
<td>

```html
<suspense>
  $0
  <template #fallback>
    $1
  </template>
</suspense>
```

</td>
</tr>

<tr>
<td><code>v:text</code></td>
<td>v-text</td>
<td>

```html
v-text="$1"
```

</td>
</tr>

<tr>
<td><code>v:html</code></td>
<td>v-html</td>
<td>

```html
v-html="$1"
```

</td>
</tr>

<tr>
<td><code>v:show</code></td>
<td>v-show</td>
<td>

```html
v-show="$1"
```

</td>
</tr>

<tr>
<td><code>v:if</code></td>
<td>v-if</td>
<td>

```html
v-if="$1"
```

</td>
</tr>

<tr>
<td><code>v:eif</code></td>
<td>v-else-if</td>
<td>

```html
v-else-if="$1"
```

</td>
</tr>

<tr>
<td><code>v:else</code></td>
<td>v-else</td>
<td>

```html
v-else
```

</td>
</tr>

<tr>
<td><code>v:for</code></td>
<td>v-for</td>
<td>

```html
v-for="${2:item} in ${1:items}" :key="$2$3"
```

</td>
</tr>

<tr>
<td><code>v:fori</code></td>
<td>v-for (indexed)</td>
<td>

```html
v-for="(${2:item}, ${3:i}) in ${1:items}" :key="${4:$3}"
```

</td>
</tr>

<tr>
<td><code>v:forr</code></td>
<td>v-for range</td>
<td>

```html
v-for="${1:n} in ${2:5}" :key="$1"
```

</td>
</tr>

<tr>
<td><code>v:emit</code></td>
<td>emit</td>
<td>

```html
emit('$1'$2)
```

</td>
</tr>

<tr>
<td><code>v:emit:pass</code></td>
<td>Vue pass emit</td>
<td>

```html
@${1|click,input,...|}="\$emit('${2:$1}', \$event)"
```

</td>
</tr>

<tr>
<td><code>v:on</code></td>
<td>v-on</td>
<td>

```html
v-on="${1:emits}"
```

</td>
</tr>

<tr>
<td><code>v:on:event</code></td>
<td>event handler</td>
<td>

```html
@$1="$2"
```

</td>
</tr>

<tr>
<td><code>v:on:click</code></td>
<td>click handler</td>
<td>

```html
@click="${1:onClick}"
```

</td>
</tr>

<tr>
<td><code>v:on:input</code></td>
<td>input handler</td>
<td>

```html
@input="${1:onInput}"
```

</td>
</tr>

<tr>
<td><code>v:on:update</code></td>
<td>update handler</td>
<td>

```html
@update="${1:onUpdate}"
```

</td>
</tr>

<tr>
<td><code>v:on:change</code></td>
<td>change handler</td>
<td>

```html
@change="${1:onChange}"
```

</td>
</tr>

<tr>
<td><code>v:on:blur</code></td>
<td>blur handler</td>
<td>

```html
@blur="${1:onBlur}"
```

</td>
</tr>

<tr>
<td><code>v:on:focus</code></td>
<td>focus handler</td>
<td>

```html
@focus="${1:onFocus}"
```

</td>
</tr>

<tr>
<td><code>v:on:submit</code></td>
<td>submit handler</td>
<td>

```html
@submit${1:.prevent}="${2:onSubmit}"
```

</td>
</tr>

<tr>
<td><code>v:bind</code></td>
<td>v-bind</td>
<td>

```html
v-bind="$1"
```

</td>
</tr>

<tr>
<td><code>v:bind:attrs</code></td>
<td>v-bind attrs</td>
<td>

```html
v-bind="\$attrs"
```

</td>
</tr>

<tr>
<td><code>v:bind:props</code></td>
<td>v-bind props</td>
<td>

```html
v-bind="\$props"
```

</td>
</tr>

<tr>
<td><code>v:bind:full</code></td>
<td>v-bind props and attrs</td>
<td>

```html
v-bind="[\$props, \$attrs]"
```

</td>
</tr>

<tr>
<td><code>v:model</code></td>
<td>v-model</td>
<td>

```html
v-model="$1"
```

</td>
</tr>

<tr>
<td><code>v:model:number</code></td>
<td>v-model.number</td>
<td>

```html
v-model.number="$1"
```

</td>
</tr>

<tr>
<td><code>v:model:trim</code></td>
<td>v-model.trim</td>
<td>

```html
v-model.trim="$1"
```

</td>
</tr>

<tr>
<td><code>v:model:custom</code></td>
<td>custom v-model</td>
<td>

```html
v-model:${1:custom}="$2"
```

</td>
</tr>

<tr>
<td><code>v:v-slot</code></td>
<td>scoped slot</td>
<td>

```html
v-slot="{$1}"
```

</td>
</tr>

<tr>
<td><code>v:pre</code></td>
<td>v-pre</td>
<td>

```html
v-pre="$1"
```

</td>
</tr>

<tr>
<td><code>v:once</code></td>
<td>v-once</td>
<td>

```html
v-once
```

</td>
</tr>

<tr>
<td><code>v:memo</code></td>
<td>v-memo</td>
<td>

```html
v-memo="[$1]"
```

</td>
</tr>

<tr>
<td><code>v:cloak</code></td>
<td>v-cloak</td>
<td>

```html
v-cloak
```

</td>
</tr>

<tr>
<td><code>v:key</code></td>
<td>Vue key</td>
<td>

```html
:key="$1"
```

</td>
</tr>

<tr>
<td><code>v:ref</code></td>
<td>Vue ref</td>
<td>

```html
ref="$1"
```

</td>
</tr>

<tr>
<td><code>v:name</code></td>
<td>name property</td>
<td>

```html
${1|name,:name|}="$2"
```

</td>
</tr>

<tr>
<td><code>v:is</code></td>
<td>is property</td>
<td>

```html
${1|is,:is|}="$2"
```

</td>
</tr>

<tr>
<td><code>v:b</code></td>
<td>bind attribute</td>
<td>

```html
:${1:prop}="${2:$1}"
```

</td>
</tr>

<tr>
<td><code>v:a</code></td>
<td>attribute</td>
<td>

```html
${1:prop}="$2"
```

</td>
</tr>

<tr>
<td><code>v:class</code></td>
<td>Vue classes</td>
<td>

```html
:class="$1"
```

</td>
</tr>

<tr>
<td><code>v:class:list</code></td>
<td>Vue classes list</td>
<td>

```html
:class="[$1]"
```

</td>
</tr>

<tr>
<td><code>v:class:cond</code></td>
<td>Vue conditional classes</td>
<td>

```html
:class="{ $1: $2 }"
```

</td>
</tr>

<tr>
<td><code>v:style</code></td>
<td>Vue inline style</td>
<td>

```html
:style="{ $1: $2 }"
```

</td>
</tr>

<tr>
<td><code>v:style:list</code></td>
<td>Vue inline style list</td>
<td>

```html
:style="[$1]"
```

</td>
</tr>

<tr>
<td><code>v:v</code></td>
<td>Vue </td>
<td>

```html
{{ $1 }}
```

</td>
</tr>

<tr>
<td><code>v:vt</code></td>
<td>Vue i18n translation</td>
<td>

```html
{{ $t('$1') }}
```

</td>
</tr>

<tr>
<td><code>v:if:slot</code></td>
<td>v-if slot defined</td>
<td>

```html
v-if="\$slots.${1:default}"
```

</td>
</tr>

<tr>
<td><code>v:if:slot-prop</code></td>
<td>v-if slot or prop defined</td>
<td>

```html
v-if="\$slots.${1:label} || ${2:$1}"
```

</td>
</tr>

<tr>
<td><code>v:for:template</code></td>
<td>v-for in template</td>
<td>

```html
<${1|template,div,...|} v-for="${3:item} in ${2:items}" :key="$3$4">
  $0
</$1>
```

</td>
</tr>

<tr>
<td><code>v:fori:template</code></td>
<td>v-for (indexed) in template</td>
<td>

```html
<${1|template,div,...|} v-for="(${3:item}, ${4:i}) in ${2:items}" :key="${5:$4}">
  $0
</$1>
```

</td>
</tr>

<tr>
<td><code>v:if:template</code></td>
<td>v-if in template</td>
<td>

```html
<${1|template,div,...|} v-if="$2">
  $0
</$1>
```

</td>
</tr>

<tr>
<td><code>v:tif</code></td>
<td>template with v-if</td>
<td>

```html
<template v-if="$2">
  $0
</template>
```

</td>
</tr>
</table>


### Script
Script setup and composables
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:ref</code></td>
<td>Vue ref</td>
<td>

```javascript
const ${1:name} = ref($2)
```

</td>
</tr>

<tr>
<td><code>v:ref:ts</code></td>
<td>Vue ref (typed)</td>
<td>

```javascript
const ${1:name} = ref<$2>($3)
```

</td>
</tr>

<tr>
<td><code>v:computed</code></td>
<td>Vue computed</td>
<td>

```javascript
const ${1:name} = computed(() => $2)
```

</td>
</tr>

<tr>
<td><code>v:computed:ts</code></td>
<td>Vue computed (typed)</td>
<td>

```javascript
const ${1:name} = computed<$2>(() => $3)
```

</td>
</tr>

<tr>
<td><code>v:computed:gs</code></td>
<td>Vue computed (get/set)</td>
<td>

```javascript
const ${1:name} = computed({
  get: () => ${2},
  set: (${3:value}: ${4:string}) => {
    ${5}
  },
})
```

</td>
</tr>

<tr>
<td><code>v:reactive</code></td>
<td>Vue reactive</td>
<td>

```javascript
const ${1:name} = reactive({$2})
```

</td>
</tr>

<tr>
<td><code>v:reactive:ts</code></td>
<td>Vue reactive (typed)</td>
<td>

```javascript
const ${1:name}: ${2:type} = reactive({$3})
```

</td>
</tr>

<tr>
<td><code>v:shallowRef</code></td>
<td>Vue shallowRef</td>
<td>

```javascript
const ${1:name} = shallowRef($2)
```

</td>
</tr>

<tr>
<td><code>v:toRef</code></td>
<td>Vue toRef</td>
<td>

```javascript
toRef(${1:props}, '$2')
```

</td>
</tr>

<tr>
<td><code>v:toRefs</code></td>
<td>Vue toRefs</td>
<td>

```javascript
toRefs(${1:props})
```

</td>
</tr>

<tr>
<td><code>v:unref</code></td>
<td>Vue unref</td>
<td>

```javascript
unref($1)
```

</td>
</tr>

<tr>
<td><code>v:readonly</code></td>
<td>Vue readonly</td>
<td>

```javascript
readonly(${1:object})
```

</td>
</tr>

<tr>
<td><code>v:ref:elem</code></td>
<td>Vue element ref</td>
<td>

```javascript
const ${1:elem} = ref<${2|HTMLInputElement,HTMLInputElement,...|} | null>(null)
```

</td>
</tr>

<tr>
<td><code>v:watchEffect</code></td>
<td>Vue watchEffect</td>
<td>

```javascript
watchEffect(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:watch</code></td>
<td>Vue watch source</td>
<td>

```javascript
watch(${1:source}, (${2:val}) => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:watch:inline</code></td>
<td>Vue watch inline</td>
<td>

```javascript
watch(${1:source}, ${2:fn})
```

</td>
</tr>

<tr>
<td><code>v:watch:getter</code></td>
<td>Vue watch getter</td>
<td>

```javascript
watch(
  () => ${1:source},
  (${2:val}) => {
    $0
})
```

</td>
</tr>

<tr>
<td><code>v:watch:multiple</code></td>
<td>Vue watch multiple</td>
<td>

```javascript
watch(
  [${1:source1}, ${2:source2}]
  ([$1, $2]) => {
    $0
  }
)
```

</td>
</tr>

<tr>
<td><code>v:watch:immediate</code></td>
<td>Vue watch immediate</td>
<td>

```javascript
watch(
  ${1:source},
  (${2:val}) => {
    $0
  },
  { immediate: true }
)
```

</td>
</tr>

<tr>
<td><code>v:watch:deep</code></td>
<td>Vue watch deep</td>
<td>

```javascript
watch(
  ${1:source},
  (${2:val}) => {
    $0
  },
  { deep: true }
)
```

</td>
</tr>

<tr>
<td><code>v:props</code></td>
<td>Vue defineProps</td>
<td>

```javascript
${1:const props = }defineProps<${2:Props}>()
```

</td>
</tr>

<tr>
<td><code>v:props:defaults</code></td>
<td>Vue defineProps with defaults</td>
<td>

```javascript
${1:const props = }withDefaults(defineProps<${2:Props}>(), {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:emits</code></td>
<td>Vue defineEmits</td>
<td>

```javascript
${1:const emit = }defineEmits<{
  ${2:click}: [${3:payload}: ${4:string}],$5
}>()
```

</td>
</tr>

<tr>
<td><code>v:model</code></td>
<td>Vue defineModel</td>
<td>

```javascript
const ${1:modelValue} = defineModel<${2:string}>($3)
```

</td>
</tr>

<tr>
<td><code>v:emit</code></td>
<td>Vue emit event</td>
<td>

```javascript
emit('$1'$2)
```

</td>
</tr>

<tr>
<td><code>v:expose</code></td>
<td>Vue defineExpose</td>
<td>

```javascript
defineExpose({
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:onMounted:async</code></td>
<td>Vue onMounted</td>
<td>

```javascript
onMounted(async () => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onBeforeMount</code></td>
<td>Vue onBeforeMount</td>
<td>

```javascript
onBeforeMount(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onUnmounted</code></td>
<td>Vue onUnmounted</td>
<td>

```javascript
onUnmounted(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onBeforeUnmount</code></td>
<td>Vue onBeforeUnmount</td>
<td>

```javascript
onBeforeUnmount(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onUpdated</code></td>
<td>Vue onUpdated</td>
<td>

```javascript
onUpdated(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onBeforeUpdate</code></td>
<td>Vue onBeforeUpdate</td>
<td>

```javascript
onBeforeUpdate(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onErrorCaptured</code></td>
<td>Vue onErrorCaptured</td>
<td>

```javascript
onErrorCaptured(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onActivated</code></td>
<td>Vue onActivated</td>
<td>

```javascript
onActivated(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:onDeactivated</code></td>
<td>Vue onDeactivated</td>
<td>

```javascript
onDeactivated(() => {
  $0
})
```

</td>
</tr>

<tr>
<td><code>v:provide</code></td>
<td>Vue provide</td>
<td>

```javascript
provide(${1:key}, ${2:value})
```

</td>
</tr>

<tr>
<td><code>v:provide:ts</code></td>
<td>Vue provide (typed)</td>
<td>

```javascript
provide<${1:string}>(${2:key}, ${3:value})
```

</td>
</tr>

<tr>
<td><code>v:inject</code></td>
<td>Vue inject</td>
<td>

```javascript
const ${1:value} = inject(${2:key})
```

</td>
</tr>

<tr>
<td><code>v:inject:ts</code></td>
<td>Vue inject (typed)</td>
<td>

```javascript
const ${1:value} = inject<${2:string}>(${3:key})
```

</td>
</tr>

<tr>
<td><code>v:inject:default</code></td>
<td>Vue inject with default</td>
<td>

```javascript
const ${1:value}  = inject(${2:key}, ${3:defaultValue})
```

</td>
</tr>

<tr>
<td><code>v:inject:key</code></td>
<td>Vue injection key</td>
<td>

```javascript
const ${1:key}: InjectionKey<${3:string}> = Symbol('$2')
```

</td>
</tr>

<tr>
<td><code>v:slots</code></td>
<td>Vue useSlots</td>
<td>

```javascript
const slots = useSlots()
```

</td>
</tr>

<tr>
<td><code>v:attrs</code></td>
<td>Vue useAttrs</td>
<td>

```javascript
const attrs = useAttrs()
```

</td>
</tr>

<tr>
<td><code>v:import</code></td>
<td>Import from vue</td>
<td>

```javascript
import { $1 } from 'vue'
```

</td>
</tr>
</table>

### Code snippets
Useful vue snippets and helpers
<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:composable</code></td>
<td>Vue define composable</td>
<td>

```javascript
export function use${1/(.*)/${1:/kebabcase}/}() {
  $0
  
  return {
    
  }
}

```

</td>
</tr>

<tr>
<td><code>v:composable:file</code></td>
<td>Vue define composable in file</td>
<td>

```javascript
export function ${TM_FILENAME_BASE/^(.*)$/${1:/kebabcase}/}() {
  $0
  
  return {
    
  }
}

```

</td>
</tr>

<tr>
<td><code>v:use</code></td>
<td>Use composable</td>
<td>

```javascript
const ${2:$1} = use${1/(.*)/${1:/capitalize}/}($3)
```

</td>
</tr>

<tr>
<td><code>v:used</code></td>
<td>Use composable with destructuring</td>
<td>

```javascript
const { $2 } = use${1/(.*)/${1:/capitalize}/}($3)
```

</td>
</tr>

<tr>
<td><code>v:has-slot</code></td>
<td>Vue check for slots</td>
<td>

```javascript
const slots = useSlots()
function hasSlot(name: string) {
  return !!slots[name]
}
```

</td>
</tr>
</table>


### Nuxt (script)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:n:fetch</code></td>
<td>Nuxt useFetch</td>
<td>

```javascript
const { data: ${1:data} } = await useFetch('$2'$3)
```

</td>
</tr>

<tr>
<td><code>v:n:fetch:cb</code></td>
<td>Nuxt useFetch with callback</td>
<td>

```javascript
const { data: ${1:data} } = await useFetch(() => '$2'$3)
```

</td>
</tr>

<tr>
<td><code>v:n:fetch:lazy</code></td>
<td>Nuxt useLazyFetch</td>
<td>

```javascript
const { pending, data: ${1:data} } = useLazyFetch('$2'$3)
```

</td>
</tr>

<tr>
<td><code>v:n:fetch:lazy:cb</code></td>
<td>Nuxt useLazyFetch callback</td>
<td>

```javascript
const { pending, data: ${1:data} } = useLazyFetch(() => '$2'$3)
```

</td>
</tr>

<tr>
<td><code>v:n:fetch:post</code></td>
<td>Nuxt useFetch POST</td>
<td>

```javascript
const { data: ${1:data} } = await useFetch('$2', {
  method: 'POST',
  body: ${3:body},$4
})
```

</td>
</tr>

<tr>
<td><code>v:n:asyncdata</code></td>
<td>Nuxt useAsyncData</td>
<td>

```javascript
const { data: ${1:data} } = await useAsyncData('${2:key}', () => $fetch('$3')$4)
```

</td>
</tr>

<tr>
<td><code>v:n:asyncdata:lazy</code></td>
<td>Nuxt useLazyAsyncData</td>
<td>

```javascript
const { pending, data: ${1:data} } = useLazyAsyncData('${2:key}', () => $fetch('$3')$4)
```

</td>
</tr>

<tr>
<td><code>v:n:app</code></td>
<td>Nuxt useNuxtApp</td>
<td>

```javascript
const app = useNuxtApp()
```

</td>
</tr>

<tr>
<td><code>v:n:appConfig</code></td>
<td>Nuxt useAppConfig</td>
<td>

```javascript
const appConfig = useAppConfig()
```

</td>
</tr>

<tr>
<td><code>v:n:runtimeConfig</code></td>
<td>Nuxt useRuntimeConfig</td>
<td>

```javascript
const config = useRuntimeConfig()
```

</td>
</tr>

<tr>
<td><code>v:n:cookie</code></td>
<td>Nuxt useCookie</td>
<td>

```javascript
const ${1:cookie} = useCookie('${2:$1}'$3)
```

</td>
</tr>

<tr>
<td><code>v:n:cookie:opts</code></td>
<td>Nuxt useCookie with options</td>
<td>

```javascript
const ${1:cookie} = useCookie('${2:$1}', { $3 })
```

</td>
</tr>

<tr>
<td><code>v:n:data</code></td>
<td>Nuxt useNuxtData</td>
<td>

```javascript
const { data: ${2:$1} } = useNuxtData('${1:key}')
```

</td>
</tr>

<tr>
<td><code>v:n:error</code></td>
<td>Nuxt useError</td>
<td>

```javascript
const ${1:error} = useError()
```

</td>
</tr>

<tr>
<td><code>v:n:state</code></td>
<td>Nuxt useState</td>
<td>

```javascript
const ${1:state} = useState('${2:$1}'$3)
```

</td>
</tr>

<tr>
<td><code>v:n:state:init</code></td>
<td>Nuxt useState (init)</td>
<td>

```javascript
const ${1:state} = useState('${2:$1}', () => $3)
```

</td>
</tr>

<tr>
<td><code>v:n:head</code></td>
<td>Nuxt useHead</td>
<td>

```javascript
useHead({
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:n:head:title</code></td>
<td>Nuxt useHead title</td>
<td>

```javascript
useHead({
  title: $1,$0
})
```

</td>
</tr>

<tr>
<td><code>v:n:pageMeta</code></td>
<td>Nuxt definePageMeta</td>
<td>

```javascript
definePageMeta({
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:n:pageMeta:title</code></td>
<td>Nuxt definePageMeta title</td>
<td>

```javascript
definePageMeta({
  title: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>v:n:pageMeta:layout</code></td>
<td>Nuxt definePageMeta layout</td>
<td>

```javascript
definePageMeta({
  layout: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>v:n:pageMeta:middleware</code></td>
<td>Nuxt definePageMeta middleware</td>
<td>

```javascript
definePageMeta({
  middleware: ['$1'$2],$0
})
```

</td>
</tr>

<tr>
<td><code>v:n:to</code></td>
<td>Nuxt navigateTo</td>
<td>

```javascript
navigateTo('$1'$2)
```

</td>
</tr>

<tr>
<td><code>v:n:to:obj</code></td>
<td>Nuxt navigateTo object</td>
<td>

```javascript
navigateTo({ $1 }$2)
```

</td>
</tr>

<tr>
<td><code>v:n:to:replace</code></td>
<td>Nuxt navigateTo replace</td>
<td>

```javascript
navigateTo('$1', { replace: true })
```

</td>
</tr>

<tr>
<td><code>v:n:to:external</code></td>
<td>Nuxt navigateTo external</td>
<td>

```javascript
navigateTo('$1', { external: true })
```

</td>
</tr>

<tr>
<td><code>v:n:to:redirect</code></td>
<td>Nuxt navigateTo redirect</td>
<td>

```javascript
navigateTo('$1', { redirectCode: ${2|301,302,...|} })
```

</td>
</tr>

<tr>
<td><code>v:n:to:name</code></td>
<td>Nuxt navigateTo name</td>
<td>

```javascript
navigateTo({
  name: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>v:n:to:path</code></td>
<td>Nuxt navigateTo path</td>
<td>

```javascript
navigateTo({
  path: '$1',$0
})
```

</td>
</tr>

<tr>
<td><code>v:n:plugin</code></td>
<td>Nuxt plugin</td>
<td>

```javascript
export default defineNuxtPlugin((nuxtApp) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:n:plugin:vue</code></td>
<td>Nuxt plugin use vue package</td>
<td>

```javascript
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use($1)
})
```

</td>
</tr>

<tr>
<td><code>v:n:middleware:route</code></td>
<td>Nuxt route middleware</td>
<td>

```javascript
export default defineNuxtRouteMiddleware((to, from) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:n:middleware:server</code></td>
<td>Nuxt server middleware</td>
<td>

```javascript
export default defineEventHandler((event) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:n:api</code></td>
<td>Nuxt api route</td>
<td>

```javascript
export default defineEventHandler(${1:async }(event) => {
  $2
  
  return {
    $3
  }
})
```

</td>
</tr>

<tr>
<td><code>v:n:plugin:server</code></td>
<td>Nuxt server plugin</td>
<td>

```javascript
export default defineNitroPlugin((nitroApp) => {
  $1
})
```

</td>
</tr>

<tr>
<td><code>v:n:readBody</code></td>
<td>Nuxt readBody</td>
<td>

```javascript
const ${1:body} = await readBody(event)
```

</td>
</tr>

<tr>
<td><code>v:n:getQuery</code></td>
<td>Nuxt getQuery</td>
<td>

```javascript
const { $1 } = getQuery(event)
```

</td>
</tr>

<tr>
<td><code>v:n:getCookie</code></td>
<td>Nuxt getCookie</td>
<td>

```javascript
getCookie(event, '${1:cookie}')
```

</td>
</tr>

<tr>
<td><code>v:n:setCookie</code></td>
<td>Nuxt setCookie</td>
<td>

```javascript
setCookie(event, '${1:cookie}', ${2:value})
```

</td>
</tr>
</table>


### Nuxt (template)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:n:link</code></td>
<td>NuxtLink</td>
<td>

```html
<NuxtLink ${1|to,:to|}="$2">$3</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:link:blank</code></td>
<td>NuxtLink with target _blank</td>
<td>

```html
<NuxtLink ${1|to,:to|}="$2" target="_blank" $3>$4</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:link:external</code></td>
<td>NuxtLink with target external</td>
<td>

```html
<NuxtLink ${1|to,:to|}="$2" external target="${3|_blank,_self|}" $4>$5</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:link:param</code></td>
<td>NuxtLink with param</td>
<td>

```html
<NuxtLink :to="`$1${${2:id}}$3`" $4>$5</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:link:obj</code></td>
<td>NuxtLink with object</td>
<td>

```html
<NuxtLink :to="{ $1 }" $2>$3</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:link:name</code></td>
<td>NuxtLink with name</td>
<td>

```html
<NuxtLink :to="{ name: '$1'$2 }" $3>$4</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:link:path</code></td>
<td>NuxtLink with path</td>
<td>

```html
<NuxtLink :to="{ path: '$1'$2 }" $3>$4</NuxtLink>
```

</td>
</tr>

<tr>
<td><code>v:n:loading</code></td>
<td>NuxtLoadingIndicator</td>
<td>

```html
<NuxtLoadingIndicator $1/>
```

</td>
</tr>

<tr>
<td><code>v:n:layout</code></td>
<td>NuxtLayout</td>
<td>

```html
<NuxtLayout $1>$2</NuxtLayout>
```

</td>
</tr>

<tr>
<td><code>v:n:layout:name</code></td>
<td>NuxtLayout with name</td>
<td>

```html
<NuxtLayout ${2|name,:name|}="$3">$4</NuxtLayout>
```

</td>
</tr>

<tr>
<td><code>v:n:page</code></td>
<td>NuxtPage</td>
<td>

```html
<NuxtPage $1/>
```

</td>
</tr>

<tr>
<td><code>v:n:page:static</code></td>
<td>NuxtPage with static key</td>
<td>

```html
<NuxtPage page-key="static" $1/>
```

</td>
</tr>

<tr>
<td><code>v:n:client</code></td>
<td>ClientOnly</td>
<td>

```html
<ClientOnly $1>$2</ClientOnly>
```

</td>
</tr>

<tr>
<td><code>v:n:client:fallbacks</code></td>
<td>ClientOnly with fallback props</td>
<td>

```html
<ClientOnly fallback-tag="${1:span}" fallback="${2:Loading...}">$3</ClientOnly>
```

</td>
</tr>

<tr>
<td><code>v:n:client:fallback</code></td>
<td>ClientOnly with fallback template</td>
<td>

```html
<ClientOnly>
  <template #fallback>
    $0
  </template>
</ClientOnly>
```

</td>
</tr>

<tr>
<td><code>v:n:Teleport</code></td>
<td>Nuxt Teleport</td>
<td>

```html
<Teleport to="$1">
  $0
</Teleport>
```

</td>
</tr>
</table>


### Pinia

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>pstore</code></td>
<td>Setup Pinia store</td>
<td>

```javascript
import { defineStore } from 'pinia'

export const use${TM_FILENAME_BASE/^(.*)$/${1:/kebabcase}/}Store = defineStore('$TM_FILENAME_BASE', () => {
  $0
  
  return {
   
  }
})

```

</td>
</tr>

<tr>
<td><code>pstore:options</code></td>
<td>Setup Pinia store (Options)</td>
<td>

```javascript
import { defineStore } from 'pinia'

export const use${TM_FILENAME_BASE/^(.*)$/${1:/kebabcase}/}Store = defineStore('$TM_FILENAME_BASE', {
 state: () => ({
   $0
 }),
 getters: {},
 actions: {},
})

```

</td>
</tr>

<tr>
<td><code>vuseStore</code> / <code>vus</code></td>
<td>Use store</td>
<td>

```javascript
const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()
```

</td>
</tr>
</table>


### Vue Router (script)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:router</code></td>
<td>Vue router</td>
<td>

```javascript
const ${1:router} = useRouter()
```

</td>
</tr>

<tr>
<td><code>v:route</code></td>
<td>Vue route</td>
<td>

```javascript
const ${1:route} = useRoute()
```

</td>
</tr>

<tr>
<td><code>v:router:create</code></td>
<td>Create Vue router</td>
<td>

```javascript
const router = createRouter({
  history: createWebHashHistory(),
  routes: ${1:routes},
  scrollBehavior(to, from, savedPosition) {
    $2
  }
})
```

</td>
</tr>
</table>


### Vue Router (template)

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>v:to</code></td>
<td>Vue Router to</td>
<td>

```html
${1|to,:to|}="$2"
```

</td>
</tr>

<tr>
<td><code>v:to:param</code></td>
<td>Vue Router :to with param</td>
<td>

```html
:to="`$1${${2:id}}$3`"
```

</td>
</tr>

<tr>
<td><code>v:to:obj</code></td>
<td>Vue Router :to object</td>
<td>

```html
:to="{ $1 }"
```

</td>
</tr>

<tr>
<td><code>v:to:name</code></td>
<td>Vue Router :to name</td>
<td>

```html
:to="{ name: '$1',$2 }"
```

</td>
</tr>

<tr>
<td><code>v:to:path</code></td>
<td>Vue Router :to path</td>
<td>

```html
:to="{ path: '$1',$2 }"
```

</td>
</tr>

<tr>
<td><code>v:view</code></td>
<td>RouterView</td>
<td>

```html
<RouterView>
  $0
</RouterView>
```

</td>
</tr>

<tr>
<td><code>v:link</code></td>
<td>RouterLink</td>
<td>

```html
<RouterLink ${1|to,:to|}="$2">$3</RouterLink>
```

</td>
</tr>

<tr>
<td><code>v:link:param</code></td>
<td>RouterLink with param</td>
<td>

```html
<RouterLink :to="`$1${${2:id}}$3`">$4</RouterLink>
```

</td>
</tr>

<tr>
<td><code>v:link:obj</code></td>
<td>RouterLink with object</td>
<td>

```html
<RouterLink :to="{ $1 }">$2</RouterLink>
```

</td>
</tr>

<tr>
<td><code>v:link:name</code></td>
<td>RouterLink with name</td>
<td>

```html
<RouterLink :to="{ name: '$1'$2 }">$3</RouterLink>
```

</td>
</tr>

<tr>
<td><code>v:link:path</code></td>
<td>RouterLink with path</td>
<td>

```html
<RouterLink :to="{ path: '$1'$2 }">$3</RouterLink>
```

</td>
</tr>
</table>


### Javascript

<table width="100%">

<tr>
<td>Prefix</td>
<td>Name</td>
<td>Body</td>
</tr>

<tr>
<td><code>imp</code></td>
<td>import</td>
<td>

```javascript
import ${2:moduleName} from '${1:module}';$0
```

</td>
</tr>

<tr>
<td><code>imn</code></td>
<td>importNoModuleName</td>
<td>

```javascript
import '${1:module}';$0
```

</td>
</tr>

<tr>
<td><code>imd</code></td>
<td>importDestructing</td>
<td>

```javascript
import { $2 } from '${1:module}';$0
```

</td>
</tr>

<tr>
<td><code>ime</code></td>
<td>importEverything</td>
<td>

```javascript
import * as ${2:alias} from '${1:module}';$0
```

</td>
</tr>

<tr>
<td><code>ima</code></td>
<td>importAs</td>
<td>

```javascript
import { ${2:originalName} as ${3:alias} } from '${1:module}';$0
```

</td>
</tr>

<tr>
<td><code>rqr</code></td>
<td>require</td>
<td>

```javascript
require('${1:package}');
```

</td>
</tr>

<tr>
<td><code>req</code></td>
<td>requireToConst</td>
<td>

```javascript
const ${1:packageName} = require('${1:package}');$0
```

</td>
</tr>

<tr>
<td><code>mde</code></td>
<td>moduleExports</td>
<td>

```javascript
module.exports = {
  $0
};

```

</td>
</tr>

<tr>
<td><code>arr:methods</code></td>
<td>array methods</td>
<td>

```javascript
${1:array}.${2|map,filter,...|}((${3:element}) => {
  $0
});
```

</td>
</tr>
</table>

<!-- END:docgen -->
