import React from './React'
export default function(props) {
    return (
        <div>
            <h1>{props.label}</h1>
            <img src={props.imageUrl} alt={props.label} />
        </div>
    )
}