import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {

    // Object "action": key "type" ALL CAPS string
    switch (action.type) {
        case 'DELETE_CONTACT':

            return {
                // Spread operator ...
                ...state,
                contacts: state.contacts.filter(
                    item => item.id !== action.payload
                )
            };
        default:
            return state;
    }
}


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
        ],
        // "dispatch" can be called anywhere, because "Consumer" takes the entire state
        dispatch: action => this.setState(
            state => reducer(state, action)
        )
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