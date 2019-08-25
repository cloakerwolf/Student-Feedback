import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: ''
    }

    handleRadio = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.support === '') { }
        else{
        
        this.props.dispatch({
            type: 'ADD_SUPPORT',
            payload: this.state.support
        });
        this.props.history.push('/comments');
        }
    }



    render() {
        return (
            <>
                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputs" type="radio" name="support" value="1"  onChange={this.handleRadio}/>1
                    <input className="inputs" type="radio" name="support" value="2"  onChange={this.handleRadio}/>2
                    <input className="inputs" type="radio" name="support" value="3"  onChange={this.handleRadio}/>3
                    <input className="inputs" type="radio" name="support" value="4"  onChange={this.handleRadio}/>4
                    <input className="inputs" type="radio" name="support" value="5"  onChange={this.handleRadio}/>5
                <button className="btn btn-secondary btn-lg checkoutBtn" >Next</button>
                </form>
            </>


        )

    }
}




export default connect()(Support);