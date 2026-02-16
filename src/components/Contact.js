import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            count:0,
            increment:100,
            decrement:1,
        }

        
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
            </div>
        )
    }

}
export default Contact;