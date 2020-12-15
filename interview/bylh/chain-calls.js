class Person {
    constructor(name) {
        console.log(`Hi i am ${name}`)
        this.name = name
        this.queue = []
    }
    sleep(time) {
        this.queue.push(
            new Promise(resolve => {
                setTimeout(() => {
                    console.log('等待了10秒')
                    resolve()
                }, time)
            }))
        return this
    }
    eat(name) {
        Promise.all(this.queue).then(() => {
            console.log(`I am eating ${name}`)
        })
        return this
    }
}
new Person('Tony').eat('launch').sleep(10000).eat('dinner')