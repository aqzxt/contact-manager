import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <Contact name="Bruce Wayne" email="bruce@wayneenterprises.com" phone="666-666-666" />
                <Contact name="Selina Kile" email="selina@wayneenterprises.com" phone="999-999-999" />
            </div>
        );
    }
}

export default App;
