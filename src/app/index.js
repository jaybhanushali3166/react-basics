import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
const BrowserRouter = require("react-router-dom").BrowserRouter;

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    render() {
        return (
            // <Router history={browserHistory}>
            //     <Route path={"/"} component={Root}>
            //         <Route path={"/user"} component={User} />
            //         <Route path={"/home"} component={Home} />
            //     </Route>
            // </Router>
            <BrowserRouter>
                {/* this is not how you declare a parent <Route path="/" component={Root}/> */}
                <Root>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/user/:id" component={User} />
                </Root>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));