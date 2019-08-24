import React, { Component } from 'react';


class Comments extends Component {
    render() {
        return (
            <>
                <h1>Comments</h1>
                <div>
                    
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/review')}>Next</button>
                </div>
            </>


        )

    }
}




export default Comments;