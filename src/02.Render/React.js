import { createElement, render } from "../utils";
const React = (() => {
  const hooks = []
  function workLoop() {
    render(hooks)();
    console.log('workLoop')
    setTimeout(workLoop, 300);
  }
  setTimeout(workLoop, 300);

  return {
    createElement,
    render: render(hooks),
    forceUpdate: () => { 
      hooks.push({});
      render(hooks)
    }
  }
})();

export default React