package main

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"os/exec"
	"regexp"
	"strings"
)

func main() {
	// Read entire file content, giving us little control but
	// making it very simple. No need to close the file.
	content, err := ioutil.ReadFile("nontimeout.js")
	if err != nil {
		fmt.Println("read file error")
	}

	// Convert []byte to string and print to screen
	text := string(content)
	// fmt.Println(text)
	ch1 := make(chan string)
	n := 10

	for i := 0; i < n; i++ {
		// go runNodePipe(ch1, text)
		go runNodePipe(ch1, text)
	}

	count := 0
	for i := 0; i < n; i++ {
		str := <-ch1
		if strings.HasPrefix(str, "hahh") {
			count ++
		}
		fmt.Println(str)
	}
	fmt.Println("执行结束", count, n - count)
}

func runNodePipe(ch chan string, text string) {
	echoCmd := exec.Command("echo", text)
	nodeCmd := exec.Command("node")
	//make a pipe
	reader, writer := io.Pipe()
	buf := new(bytes.Buffer)

	//set the output of "echo" command to pipe writer
	echoCmd.Stdout = writer
	//set the input of the "node" command pipe reader

	nodeCmd.Stdin = reader

	//cache the output of "node" to memory
	nodeCmd.Stdout = buf

	//start to execute "echo" command
	echoCmd.Start()

	//start to execute "node" command
	nodeCmd.Start()

	//waiting for "echo" command complete and close the writer
	echoCmd.Wait()
	writer.Close()

	//waiting for the "node" command complete and close the reader
	nodeCmd.Wait()
	reader.Close()
	//copy the buf to the standard output
	// io.Copy(os.Stdout, buf)
	s := buf.String()
	// 换行用空格代替
	// s = strings.Replace(s, "\n", "", -1)
	reg := regexp.MustCompile(`\r?\n`)
	s = reg.ReplaceAllString(buf.String(), " ")
	ch <- s
}

func runNode(ch chan string, text string) {
	if len(text) == 0 {
		return
	}
	args := []string{"nontimeout.js"}
	process := exec.Command("node", args...)

	// 方案二
	// cmd := `echo "console.log('hello')" | node`
	// process := exec.Command("bash", "-c", cmd)
	stdin, err := process.StdinPipe()
	if err != nil {
		fmt.Println(err)
	}
	defer stdin.Close()
	buf := new(bytes.Buffer) // THIS STORES THE NODEJS OUTPUT
	process.Stdout = buf
	process.Stderr = os.Stderr

	if err = process.Start(); err != nil {
		fmt.Println("An error occured: ", err)
	}

	process.Wait()
	// fmt.Println("Generated string:\n", buf)
	// reg := regexp.MustCompile("")
	s := buf.String()
	// 换行用空格代替
	s = strings.Replace(s, "\n", " ", -1)
	// fmt.Printf("%s\n", s)
	ch <- s
}