import React from './React'
import Item from './Item'
const getImageUrl = (i) => `https://source.unsplash.com/random/200x200?sig=${i}`
const _items = [
    { id: 1, label: "foo" },
    { id: 2, label: "bar" },
];
export default function() {
    const [items, setItems] = React.useState(_items)
    const [data, setData] = React.useState('test')
    React.useEffect(() => {
        console.log('useEffect야~~', data)
    }, [data])

    const onClick = (e) => {
        setItems([...items, { label: data }])
    }
    return (
        <div>
            <input value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={onClick}>등록</button>
            {items.map((item, i) => <Item label={item.label} imageUrl={getImageUrl(i)} />)}
        </div>
    )
}