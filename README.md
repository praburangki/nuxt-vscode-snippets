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

- You can do it by finding `Vue Snippets` by `praburangki` in VS Code marketplace and clicking install.
- Or you can follow [that link](https://marketplace.visualstudio.com/items?itemName=praburangki.nuxt-snippets) and click install.

## Snippets

### For `.vue` files

#### Single File Component

| Snippet         | Purpose                                                            |
|-----------------|------------------------------------------------------------------------|
| `v:base`          | Single file component with Typescript, Script setup and template |
| `v:base:script`   | Single file component with Typescript and Script setup                                             |
| `v:base:template` | Single file component template only                                                    |
| `v:base:style`    | Single file component for `style` tag with PostCSS and scoped                                        |

#### Elements & Directives

| Snippet         | Purpose                                                            |
|-----------------|------------------------------------------------------------------------|
| `v:slot` | Slot element |
| `v:keepAlive` | Keep alive element |
| `v:component`         | Component element             |
|`v:text` | Directive `v-text` |
|`v:html` | Directive `v-html` |
|`v:show` | Directive `v-show` |
|`v:if` | Directive `v-if` |
|`v:else` | Directive `v-else` |
|`v:else-if` | Directive `v-else-if` |
|`v:for-non-key` | Directive `v-for` without `key` |
|`v:for` | Directive `v-for` with `key` |
|`v:on` | Event handler |
|`v:bind` | Bind attribute |
|`v:model` | Directive `v-model` |
|`v:model:custom` | Directive custom `v-model` |
|`v:slotName` | Slot name attribute |
|`v:key` | Bind key attribute |
|`v:ref` | Ref attribute |
| `v:routerLink` | Router link element |
| `v:to` | Router `to` props |

#### Transitions
| Snippet         | Purpose                                                            |
|-----------------|------------------------------------------------------------------------|
| `v:transition`        | Transition element            |
| `v:transitionGroup`   | Transition group element      |
| `v:enterFromClass`    | Enter from class attribute    |
| `v:enterActiveClass`  | Enter active class attributeE |
| `v:enterToClass`      | Enter to class attribute      |
| `v:leaveFromClass`    | Leave from class attribute    |
| `v:appearFromClass`   | Appear from class attribute   |
| `v:appearActiveClass` | Appear active class attribute |
| `v:appearToClass`     | Appear to class attribute     |
| `v:leaveFromClass`    | Leave from class attribute    |
| `v:leaveActiveClass`  | Leave active class attribute  |
| `v:leaveToClass`      | Leave to class attribute      |
| `v:beforeEnterEvent` | Before enter event |
| `v:beforeLeaveEvent` | Before leave event |
| `v:enterEvent` | Enter event |
| `v:leaveEvent` | Leave event |
| `v:appearEvent` | Appear event |
| `v:afterEnterEvent` | After enter event |
| `v:afterLeaveEvent` | After leave event |
| `v:afterAppearEvent` | After appear event |
| `v:enterCancelledEvent` | Enter cancelled event |
| `v:leaveCancelledEvent` | Leave cancelled event |
| `v:appearCancelledEvent` | Appear cancelled event |

### For JavaScript or Typescript files (or within script setup tag)

#### Vue

Make sure to import the functions from `vue` package.

| Snippet         | Purpose                                                            |
|-----------------|------------------------------------------------------------------------|
| `v:defineProps` | Declare props |
| `v:defineProps:withDefaults` | Declare props with defaults |
| `v:defineEmits` | Declare emits |
| `v:defineExpose` | Declare expose |
| `v:useSlots` | Declare slots |
| `v:useAttrs` | Declare attributes |
| `v:h` | Render function |
| `v:defineComponent` | Define component |
| `v:defineAsyncComponent` | Define async component |
| `v:nextTick` | Next tick |
| `v:nextTick:await` | Next tick with await |
| `v:onBeforeMount` | Lifecycle onBeforeMount |
| `v:onMounted` | Lifecycle onMounted |
| `v:onBeforeUpdate` | Lifecycle onBeforeUpdate |
| `v:onUpdated` | Lifecycle onUpdated |
| `v:onBeforeUnmount` | Lifecycle onBeforeUnmount |
| `v:onUnmounted` | Lifecycle onUnmounted |
| `v:onErrorCaptured` | Lifecycle onErrorCaptured |
| `v:onRenderTracked` | Lifecycle onRenderTracked |
| `v:onRenderTriggered` | Lifecycle onRenderTriggered |
| `v:provide` | Define provide |
| `v:inject` | Define inject |
| `v:inject:key` | Declare inject with Symbol |
| `v:getCurrentInstance` | Get current instance |
| `v:reactive` | Define `reactive` |
| `v:readonly` | Define `readonly` |
| `v:isProxy` | Method `isProxy` |
| `v:isReactive` | Method `isReactive` |
| `v:isReadonly` | Method `isReadonly` |
| `v:toRaw` | Method `toRaw` |
| `v:markRaw` | Define `markRaw` |
| `v:shallowReactive` | Define `shallowReactive` |
| `v:shallowReadonly` | Define `shallowReadonly` |
| `v:ref` | Define `ref` |
| `v:unref` | Define `unref` |
| `v:toRef` | Define `toRef` |
| `v:toRefs` | Define `toRefs` |
| `v:isRef` | Method `isRef` |
| `v:customRef` | Define custom ref |
| `v:shallowRef` | Define `shallowRef` |
| `v:triggerRef` | Method `triggerRef` |
| `v:computed` | Define `computed` |
| `v:computedGetSet` | Define `computed` with getter and setter |
| `v:watchEffect` | Method `watchEffect` |
| `v:watch` | Method `watch` |
| `v:watch:inline` | Method `watch` inline |
| `v:watch:cb` | Method `watch` using a callback |

#### Nuxt

| Snippet         | Purpose                                                            |
|-----------------|------------------------------------------------------------------------|
| `v:useAppConfig` | Composable for useAppConfig |
| `v:useAsyncData` | Composable for useAsyncData |
| `v:useCookie` | Composable for useCookie |
| `v:useError` | Composable for useError |

More snippets will be added in the future.

#### Javascript
| Snippet         | Purpose                                                            |
|-----------------|------------------------------------------------------------------------|
| `imp` | Import module |
| `imn` | Import without name |
| `imd` | Import with destructing|
| `ime` | Import wildcard |
| `ima` | Import alias |
| `rqr` | Require |
| `req` | Require with `const` |
| `mde` | Module exports |
| `env` | Export variable |
| `fun` | Declare `function` |
| `fun:export` | Declare `export function` |
| `iife` | Immediately Invoked Function Expression |
| `cons` | Define `const` |
| `cons:type` | Define `const` with type |
| `let` | Define `let` |
| `let:type` | Define `let` with type |
| `dob` | Define object destructing |
| `dar` | Define array destructing |
| `sti` | Define `setInterval` |
| `sto` | Define `setTimeout` |
| `thenc` | Define `then` & `catch` |
| `arr:methods` | Define array methods |
| `arr:reduce` | Array reduce method |

