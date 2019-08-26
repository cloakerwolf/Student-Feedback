import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
                <form >
                    <input className="inputs" type="text" placeholder="Comments" onChange={this.handleChange} />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.handleSubmit} className="btn btn-secondary btn-lg checkoutBtn" >Next</Button>
                </form>
                {/* put the button outside the form so i can still hit return to enter the input or use the next button */}
                <Button variant="contained" color="secondary" className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleBack}>Back</Button>
            </>


        )

    }
}




export default connect()(Comments);