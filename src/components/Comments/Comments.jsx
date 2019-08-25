import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state.comments 
        });
        this.props.history.push('/review');
    }

    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/support');
    }


    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputs" type="text" placeholder="Comments" onChange={this.handleChange} />
                    <br />
                    <button className="btn btn-secondary btn-lg checkoutBtn" >Next</button>
                </form>
                {/* put the button outside the form so i can still hit return to enter the input or use the next button */}
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleBack}>Back</button>
            </>


        )

    }
}




export default connect()(Comments);