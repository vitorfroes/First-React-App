import React, { Component } from 'react'

class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Lista de Compras para {this.props.name} </h1>

                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
};

export default ShoppingList;