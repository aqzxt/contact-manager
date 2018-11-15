import React, { Component } from 'react';

const Context = React.createContext();


// Global state

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Bruce Wayne",
                email: "bruce@wayneenterprises.com",
                phone: "666-666-666"
            },
            {
                id: 2,
                name: "Selina Kile",
                email: "selina@wayneenterprises.com",
                phone: "999-999-999"
            },
            {
                id: 3,
                name: "Joker",
                email: "joker@jokerstudios.com",
                phone: "000-000-000"
            }
        ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;