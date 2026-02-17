import React from "react";
import User from "./User";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            count:0,
            increment:100,
            decrement:1,
        }
        console.log("This is a parent class constructor") 
    }

    handleIncrement = () => {
        this.setState({count:this.state.count+this.state.increment})
    }

    handleDecrement = () => {
        this.setState({count:this.state.count-this.state.decrement})
    }

    render(){
        return(
            <div>
                <h1>Contact Us</h1>
                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleIncrement}>Increment(100)</button>
                <button onClick={this.handleDecrement} style={{marginLeft:10}}>Decrement(1)</button>

                <div>
                    <h1>User Component</h1>
                    <User userName={"HrishiKesh"} phone={7827654321} />    
                </div>
            </div>
        )
    }

}
export default Contact;