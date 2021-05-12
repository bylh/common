(async () => {
    Notification.requestPermission(function (status) {
        // 这将使我们能在 Chrome/Safari 中使用 Notification.permission
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
      });
    function postData(url, data) {
        // Default options are marked with *
        return fetch(url, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, same-origin, *omit
          headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
          },
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // *client, no-referrer
        })
        .then(response => response.json()) // parses response to JSON
    }
    const condition = {"id":"","qq":"","idcard":"","mobile":"","name":"","page":1,"limit":20,"keyword":"","graduate_time":2022,"station":["106"],"speciality":"","education":["2","3"],"school":"","tag_id":[],"rank":[],"recruit_city":[],"flow_status":["0"],"channel":[],"last_update":"","idepts":[],"is_mine":0,"is_full":0,"is_deploy":null,"work_city":["2"],"recruit_project":[],"isUnRead":0,"orderBy":"update_time","score_type":""}
    let current = []
    let fetchCount = 0
    let time = 5000
    setInterval(async () => {
        time = Math.floor(Math.random()*10000)
        let list = (await postData('http://campus.oa.com/campusCenterApi/v1/resume/search', condition)).data.list
        fetchCount ++
        console.log(fetchCount, 'list[0]', list[0])
        if (!current || current.length === 0) {
            current = list
        }
        if (current && current.length && current[0].id !== list[0].id) {
            current = list
            const n = new Notification(list[0].name + '---' + list[0].school, {body: "收到新简历啦！！！"}); // 显示通知
            n.onclick = () => {
                window.open(`http://campus.oa.com/#/resumeview?rid=${list[0].rid}`)
                n.close()
            }
            window.open(`http://campus.oa.com/#/resumeview?rid=${list[0].rid}`)
            // alert(JSON.stringify(list[0]))
        }
    }, time)
})()