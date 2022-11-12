import { createElement, render } from "./utils";
const React = { createElement, render }
const element = <div><h1> test11 </h1></div>
const container = document.getElementById('root')
render([])(element, container)