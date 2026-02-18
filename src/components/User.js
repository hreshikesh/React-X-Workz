import React from "react";
class User extends React.Component {
    constructor() {
        super();
        console.log("child constructor")
    }

    componentDidMount() {
        console.log("child componentDidMount")
    }

    componentDidUpdate() {
        console.log("child componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("child componentWillUnmount")
    }

    
    render() {
        const {userName, phone} = this.props;
        return (
            <div>
                <h3>User Component</h3>
                <h4>Name:{userName}</h4>
                <h4>Contact Number:{phone}</h4>
            </div>
        )
    }
}
export default User;