import _ from 'lodash'
import printMe from './print'
// TODO to-clear
// import './style.css'
// import Icon from './icon.png';
// import Data from './data.xml';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // element.classList.add('hello') // 添加类名hello
    // 将图像添加到我们现有的 div。
    // let myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);
    // console.log(Data);
    return element;
}

document.body.appendChild(component());