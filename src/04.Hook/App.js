import React from './React'
import Container from './Container'
const container = document.getElementById('root')

const App = () => {
    return (
        <div>
            <Container />
        </div>
    )
}

React.render(<App />, container)