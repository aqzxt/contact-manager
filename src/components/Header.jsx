import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const { branding } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Branding default value if no value were given
Header.defaultProps = {
    branding: "My App"
}

// Enforce prop type
Header.propTypes = {
    branding: PropTypes.string.isRequired
}

const headingStyle = {
    backgroundColor: "lightgreen",
    borderRadius: "3px"
}

export default Header