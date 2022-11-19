import { createElement, render } from "../utils";
const React = (() => {
    let hooks = [];
    let idx = 0;
    function workLoop() {
      idx = 0;
      render(hooks)();
      console.log('workloop')
      setTimeout(workLoop, 300);
    }
    setTimeout(workLoop, 300);
    function useState(initVal) {
      let state = hooks[idx] || initVal;
      let _idx = idx;
      let setState = (newVal) => {
        hooks[_idx] = newVal;
      };
      idx += 1;
      console.log('useState')
      console.log(idx)
      return [state, setState];
    }
    function useRef(val) {
      return useState({ current: val })[0];
    }
    function useEffect(cb, depArray) {
      const oldDeps = hooks[idx];
      let hasChanged = true;
      console.log('useEffect')
      console.log(oldDeps, depArray)
      if (oldDeps) {
        hasChanged = depArray.some(
          (dep, i) => !Object.is(dep, oldDeps[i])
        );
      }
      if (hasChanged) cb();
      hooks[idx] = depArray;
    }
    return {
      useState,
      render: render(hooks),
      useEffect,
      useRef,
      createElement
    };
})();
  
export default React