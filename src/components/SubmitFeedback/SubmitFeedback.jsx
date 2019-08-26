import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class SubmitFeedback extends Component {
    render() {
        return (
            <>
                <h1>Thank You!</h1>
                <Button variant="contained" color="primary" className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/')}>Leave New Feedback</Button>
                <Button variant="contained" color="primary" className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/Admin')}>Admin</Button>
            </>


        )

    }
}




export default SubmitFeedback;