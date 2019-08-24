import React, { Component } from 'react';


class Review extends Component {
    render() {
        return (
            <>
                <h1>Review</h1>
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/submitfeedback')}>Next</button>
            </>


        )

    }
}




export default Review;