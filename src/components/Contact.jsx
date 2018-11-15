import React, { Component } from "react";
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    }

    // No need for ".bind(this)" with arrow function
    onShowClick = () => {
        this.setState({
            // Toggle on if it's false, or true, otherwise
            showContactInfo: !this.state.showContactInfo
        })
    }

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;

        return (

            <div className="card card-body mb-3">
                <h4>{ contact.name } {" "}
                <i onClick={ this.onShowClick } className="fas fa-sort-down" style={{ cursor: "pointer" }} />
                <i className="fas fa-times" style={{ cursor: "pointer", color: "red", float: "right" }}></i>
                </h4>

                { showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">
                            Email: { contact.email }
                        </li>
                        <li className="list-group-item">
                            Phone: { contact.phone }
                        </li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

// Enforce prop type, otherwise, an error is console logged
Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
