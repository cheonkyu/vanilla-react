import React from './React'
const container = document.getElementById('root')

const items = [
    { id: 1, username: "foo" },
    { id: 2, username: "bar" },
];

setTimeout(()=> {
    items.push({ id: 3, username: "haha" })
    console.log('items 갱신')
    console.log(items)
    console.log('렌더링이 안된다??')
    // React.forceUpdate() 
    // 값이 변동했을 때 리렌더링 해야함
}, 2000)

const App = () => {
    return (
        <div>
            {items.map(item => <h1>{item.username}</h1>)}
        </div>
    )
}

React.render(<App />, container)