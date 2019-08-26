import React, { Component } from 'react';
import { connect } from 'react-redux';


class Content extends Component {
    state = {
        understanding: ''
    }

    handleRadio = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleBack = (event) =>{
        event.preventDefault();
        this.props.history.push('/');
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.understanding === '') { alert('ENTER A INPUT!') }
        else{
        
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state.understanding
        });
        this.props.history.push('/support');
        }
    }

    render() {
        return (
            <>
                <h1>How well are you understanding the content?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputs" type="radio" name="content" value="1"  onChange={this.handleRadio}/>1
                    <input className="inputs" type="radio" name="content" value="2"  onChange={this.handleRadio}/>2
                    <input className="inputs" type="radio" name="content" value="3"  onChange={this.handleRadio}/>3
                    <input className="inputs" type="radio" name="content" value="4"  onChange={this.handleRadio}/>4
                    <input className="inputs" type="radio" name="content" value="5"  onChange={this.handleRadio}/>5
                <br/>
                <button className="btn btn-secondary btn-lg checkoutBtn" >Next</button>
                </form>
                {/* put the button outside the form so i can still hit return to enter the input or use the next button */}
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleBack}>Back</button>
            </>


        )

    }
}




export default connect()(Content);