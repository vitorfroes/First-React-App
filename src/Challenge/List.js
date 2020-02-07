import React, { Component } from 'react'
import Card from './Card'

class List extends Component {        
    render() {
        return (
            <div>                
                {this.props.profiles.map(prof => <Card {...prof} key={prof.name} />)}
            </div>
        );
    }
};

export default List;