const { reactive, computed } = Vue
const template = `
  <div>
  <slot></slot>
    {{ state.nowString }}
    <div>
    {{ computedDate }}
    </div>
  </div>
`
export default {
    template,
    setup() {
        const state = reactive({
            now: new Date(),
            nowString: computed(() => state.now.toTimeString().substr(0, 8))
        })
        const computedDate = computed(() => {
            return '我是计算属性' + state.nowString
        })
        window.setInterval(() => {
            state.now = new Date()
        }, 1000)
        return { state, computedDate }
    }
}