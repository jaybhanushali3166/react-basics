import React from "react";
import { render } from "react-dom";

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        var user = {
            name: "Jayyy",
            age: 23,
            hobbies: ["Reading"]
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Jay"} user={user} initialAge={23} />
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, window.document.getElementById("app"))