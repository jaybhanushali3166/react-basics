import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLinkName
        }
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }
    onChangeHandle(event) {
        this.setState({
            homeLink: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>In Home Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}>Older!</button>
                <hr />
                <button className="btn btn-primary" onClick={this.props.greet}>Fire event from parent</button>
                <hr />
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onChangeHandle(event)}></input>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    homeLink: React.PropTypes.string,
    initialLinkName: React.PropTypes.string,
}