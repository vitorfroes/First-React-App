import React, { Component } from 'react'

class Form extends Component {
    state = {
        userName: "",
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let resp = await fetch(`https://api.github.com/users/${this.state.userName}`, {mode: 'cors'});

        console.log(resp.body);

        this.props.onSubmit(resp.data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="GitHub Username"
                    onChange={event => this.setState({ userName: event.target.value })}
                    value={this.userName}
                    required></input>
                <button >Add card</button>
            </form>
        );
    }
};

export default Form;