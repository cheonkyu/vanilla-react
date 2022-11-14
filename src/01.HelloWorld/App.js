import { createElement, render } from "../utils";
const React = { createElement, render }
const element = <div><h1> HelloWorld </h1></div>
/*
// 위 코드는 다음과 같다.
const vm = React.createElement
const element = vm("div", null, vm("h1", null, " HelloWorld "));
 */

const container = document.getElementById('root')
render([])(element, container)