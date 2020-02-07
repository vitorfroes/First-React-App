import React, { Component } from 'react'

class App extends Component {
    componentDidMount() {
        console.log("Montei");
    }

    state = { number: 0 }

    increment = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrement = () => {
        this.setState({
            number: this.state.number - 1   
        });
    }

    render() {
        return <div> <button onClick={this.decrement}>-</button> {this.state.number} <button onClick={this.increment}>+</button> </div>
    }
};

export default App;