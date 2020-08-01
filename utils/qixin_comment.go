package main

import (
	"crypto/tls"
	"fmt"
	"io/ioutil"
	"math/rand"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type Role struct {
	Name string
	Code string
	Comment string
}
func main() {
	// Read entire file content, giving us little control but
	// making it very simple. No need to close the file.
	//content, err := ioutil.ReadFile("content.js")
	//if err != nil {
	//	fmt.Println("read file error")
	//}

	// Convert []byte to string and print to screen
	//text := string(content)
	// fmt.Println(text)
	ch1 := make(chan string)
	n := 5 // 每个角色刷多少条
	list := []Role{
		{
			Name: "吴金峰",
			Code:    "94f2d8bc41ee81a7f03673836dfb7e79",
			Comment: "1596252851379",
		},
		{
			Name: "李岩",
			Code:    "aad10254e0c7a71484aeb7af5108cbf9",
			Comment: "1596271442656",
		},
	}


	textArray := []string{"加油", "冲冲冲", "优秀", "不多说，再来1000层", "666"}

	for ri := 0; ri < len(list); ri++ {
		for i := 0; i < n; i++ {
			r := rand.New(rand.NewSource(time.Now().UnixNano()))
			go postComment(ch1, textArray[r.Intn(len(textArray))], list[ri].Code)
		}

		for i := 0; i < n; i++ {
			str := <-ch1
			fmt.Println(str)
		}
		fmt.Println("执行结束")
	}

}

func postComment(ch chan string, text string, code string) {
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}

	timeout := 5 * time.Second //超时时间5s
	client := &http.Client{
		Transport: tr,
		Timeout: timeout,
	}
	commentUrl := "https://open.work.weixin.qq.com/wwopen/colleague/comment" // ?_=1596252851379可有可无， code是比较关键的
	data := url.Values{}
	data.Set("content", text)
	data.Set("anony", "false")
	data.Set("code", code)

	request, err := http.NewRequest("POST", commentUrl, strings.NewReader(data.Encode()))
	if err != nil {
		fmt.Println("request err", err.Error())
		return
	}
	// 设置请求头
	request.Header.Add("Host", "open.work.weixin.qq.com")
	request.Header.Add("Accept", "application/json")
	request.Header.Add("X-Requested-With", "XMLHttpRequest")
	request.Header.Add("X-Proxyman-Repeated-ID", "350BBDC1")
	request.Header.Add("If-None-Match", `W/"129-12c9f690"`)
	request.Header.Add("Accept-Language", "zh-cn")
	request.Header.Add("Accept-Encoding", "gzip, deflate, br")
	request.Header.Add("Origin", "https://open.work.weixin.qq.com")
	request.Header.Add("Referer", "https://open.work.weixin.qq.com/wwopen/colleague/detail?code=94f2d8bc41ee81a7f03673836dfb7e79&version=3.0.26.2273&platform=mac")


	request.Header.Add("Connection", "keep-alive")

	request.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	//request.Header.Add("Content-Length", strconv.Itoa(len(data.Encode())))
	request.Header.Add("Cookie", `wwrtx.ref=direct; wwrtx.sid=kpYUMouUliY1s3j73irXGOSmk7e6oiv1lHvcEFXYmKxMnqPimMN4GPgVlTz2yDdA; wwrtx.vst=cgqFrS8OPJEx0sBEQjxyKw4a7uGMdosyJykBjicfaym-k8IApJRRnvC1kVtteHTZSrv2-IGAgj-Ek7bY3gPnI9U3im4FjHBFM1k25DdfyHO246A41bi-SOkXyrr8uUvrl_jJCjBhzly4wCUNtlIkQdpyHLpdj3uCLDnUac-CDdaIiSMUK8rMJg-B_8YY3fgxcY0eShRKXXy0G62oqYG-SA0VrxiiN38cAC3mRUizrMNL6A3OoamJLRrFqsGim6UCvnh8vwDefJNhXj0TUEkLVQ; wwapp.cst=87133586A1AE4F78820BC82DD88298C52212A97175A4CCDCBC63BD973CD87A230ADD213E74CA06F96C85DEC8BE8D21CB; wwapp.deviceid=5741cc2a-10d7-4059-b4f9-0517318cf5bc; wwapp.st=62ED842C575ECD84C08D3F33EFBA553B1E943F9DEB2875269E0A867AAD926892DB7681026057D23F7E25EB9DF4A1F41ECC15B9B0695A497DFADD8605AC50E8BF897D02622AA088997F05A19F206B2CFEDF29F8BB7EB115E87918A8300F1A48AA89B37EF2FB20883DFE8B9658AF718F107A5B9DEBD9DDC47990424E81E8F76C5BEEA284AD2773A6AE25FCF6EE0F159BAD; wwapp.vid=1688851114346123; wwrtx.i18n_lan=zh`)
	request.Header.Add("User-Agent", ` Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) wxwork/3.0.26 (MicroMessenger/6.2) WeChat/2.0.4`)

	res, err := client.Do(request)
	if err != nil {
		fmt.Println("请求失败", err.Error())
		return
	}
	defer res.Body.Close()
	c, _ := ioutil.ReadAll(res.Body)
	fmt.Println(string(c))
	ch <- text
}

