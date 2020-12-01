const { reactive, computed } = Vue
const template = `
  <header class="bylh-header">
    <div class="left">
      <slot></slot>
    </div>
    <div class="middle">
    </div>
    <div class="right">
      Current time: <b>{{ state.nowString }}</b>
    </div>
  </header>
`
export default {
    template,
    setup() {
        const state = reactive({
            now: new Date(),
            nowString: computed(() => state.now.toTimeString().substr(0, 8))
        })
        window.setInterval(() => {
            state.now = new Date()
        }, 1000)
        return { state }
    }
}