import React from './React'
import Item from './Item'
export default function() {
    const items = [
        { id: 1, username: "foo" },
        { id: 2, username: "bar" },
    ];
    
    // setTimeout(()=> {
    //     items.push({ id: 3, username: "haha" })
    //     console.log('items 갱신')
    //     console.log(items)
    //     console.log('렌더링이 안된다??')
    //     // React.forceUpdate() 
    //     // 값이 변동했을 때 리렌더링 해야함
    // }, 2000)
    
    return (
        <div>
            {items.map(item => <Item username={item.username} />)}
            {/* 11
            <h1>{input}</h1>
            <input value={input} onChange={(val) => setInput(val.target.value)} /> */}
        </div>
    )
}