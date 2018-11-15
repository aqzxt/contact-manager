import React, { Component } from 'react';
import Contact from './Contact';

import { Consumer } from '../context';

class Contacts extends Component {
        
    render() {
        return (

            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (

                        <React.Fragment> 
                        {/* Set props to each contact component */}
                            {contacts.map(item => (
                                <Contact 
                                    key={item.id}
                                    // "contact" is a (deconstructed) prop, taken from Contact component
                                    contact={item}
                                />
                            ))}
                        </React.Fragment>

                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;