import React, { Component } from 'react';
import {connect} from 'react-redux';



class Feeling extends Component {
    state = {
        feeling: ''
    }

    //store the radio value in state feeling
    handleRadio = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    //if handle submit is on the form so i can enter value then hit enter or hit the next button
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.feeling === '') { alert('ENTER A INPUT!') }
        else {
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state.feeling
        });
        this.props.history.push('/content');
        }
    }

    render() {
        return (
            <>
                <h1>How Are You Feeling Today?</h1>
                <form  onSubmit={this.handleSubmit}>
                    <input className="inputs" type="radio" name="feeling" value="1"  onChange={this.handleRadio}/>1
                    <input className="inputs" type="radio" name="feeling" value="2"  onChange={this.handleRadio}/>2
                    <input className="inputs" type="radio" name="feeling" value="3"  onChange={this.handleRadio}/>3
                    <input className="inputs" type="radio" name="feeling" value="4"  onChange={this.handleRadio}/>4
                    <input className="inputs" type="radio" name="feeling" value="5"  onChange={this.handleRadio}/>5
                    <br />
                    <button className="btn btn-secondary btn-lg checkoutBtn" >Next</button>
                </form>
            </>


        )

    }
}




export default connect()(Feeling);