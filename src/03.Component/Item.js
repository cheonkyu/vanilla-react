import React from './React'
export default function(props) {
    return (
        <div>
            <h1>{props.username}</h1>
            <input value={props.username} />
        </div>
    )
}