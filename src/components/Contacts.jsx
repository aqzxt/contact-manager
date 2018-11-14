import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        // contacts array of objects
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
        const { contacts } = this.state;

        return (
            // Loop through contacts array, set props to each contact component
            <div>
                {contacts.map(c => (
                    <Contact 
                        key={c.id}
                        // contact is a (deconstructed) prop, taken from the imported Contact component
                        contact={c}
                    />
                ))}
                
            </div>
        )
    }
}

export default Contacts