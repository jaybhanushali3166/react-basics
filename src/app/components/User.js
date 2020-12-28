import React from "react";
import { useParams } from "react-router-dom";

export class User extends React.Component {
    constructor(props) {
        super(props)
    }
    onNavigateHome() {
        this.props.history.push("/home")
    }
    render() {
        const { match: { params } } = this.props;
        return (
            <div>
                <h3>The User page</h3>
                <p>User ID: {params.id} </p>
                <button onClick={this.onNavigateHome.bind(this)} className="btn btn-primary">Go Home!</button>
            </div>
        )
    }
}
