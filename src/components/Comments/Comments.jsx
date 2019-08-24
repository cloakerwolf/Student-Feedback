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
            payload: this.state
        });
        this.props.history.push('/review');
    }




    render() {
        return (
            <>
                <h1>Any comments you want to leave?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputs" type="text" placeholder="Comments" onChange={this.handleChange} />
                    <button className="btn btn-secondary btn-lg checkoutBtn" >Next</button>
                </form>
            </>


        )

    }
}




export default connect()(Comments);