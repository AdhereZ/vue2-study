import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
import type { GlobalAPI } from 'types/global-api'

// vue入口, new Vue
function Vue(options) {
  if (__DEV__ && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

//@ts-expect-error Vue has function type
initMixin(Vue)  // $set、$delete、$watch
//@ts-expect-error Vue has function type
stateMixin(Vue)  // $on、$once、$off、$emit
//@ts-expect-error Vue has function type
eventsMixin(Vue)  // _update、$forceUpdate、$destroy
//@ts-expect-error Vue has function type
lifecycleMixin(Vue)  // $nextTick、_render、以及多个内部调用的方法
//@ts-expect-error Vue has function type
renderMixin(Vue)

export default Vue as unknown as GlobalAPI
