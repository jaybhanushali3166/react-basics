import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge
        }
        this.age = props.initialAge
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
        console.log("age", this.state.age);
    }
    render() {
        return (
            <div>
                <p>In Home Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <button onClick={() => this.onMakeOlder()}>Older!</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object
}