import React, { Component } from 'react';


class Admin extends Component {
    render() {
        return (
            <>
                <h1>Admin</h1>
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/')}>Leave New Feedback</button>
            </>


        )

    }
}




export default Admin;