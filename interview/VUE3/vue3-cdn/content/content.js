const { reactive, computed } = Vue
import BylhDate from '../components/BylhDate.js'
const template = `
  <div class="bylh-content">
    <bylh-date>
    <div>我是slot:::</div>
    </bylh-date>
  </div>
`
export default {
    template,
    components: {
        BylhDate
    },
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