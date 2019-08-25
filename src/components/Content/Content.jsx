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

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.understanding === '') { }
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
                <button className="btn btn-secondary btn-lg checkoutBtn" >Next</button>
                </form>
            </>


        )

    }
}




export default connect()(Content);