import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <div className="container">
                    <Contact name="Bruce Wayne" email="bruce@wayneenterprises.com" phone="666-666-666" />
                    <Contact name="Selina Kile" email="selina@wayneenterprises.com" phone="999-999-999" />
                </div>
            </div>
        );
    }
}

export default App;
