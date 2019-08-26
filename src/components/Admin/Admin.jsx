import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        console.log('in GET FEEDBACK function');
        axios.get('/feedback')
             .then((response) => {
                console.log('in getFeedback:', response);
                this.props.dispatch({
                    type: 'GET_FEEDBACK',
                    payload: response.data
                })
            }).catch((error) => {
                console.log('in getFeedback ERROR:', error);
            })
    }




    render() {
        let info = this.props.feedback.map(single => {
            return(
                <tr key={single.id}>
                    <td>{single.feeling}</td>
                    <td>{single.understanding}</td>
                    <td>{single.support}</td>
                    <td>{single.comments}</td>
                </tr>
            )
        })



        return (
            <>
                <h1>Admin</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info}
                    </tbody>
                </table>


                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/')}>Leave New Feedback</button>
                {/* {JSON.stringify(this.props.feedback)} */}
            </>


        )

    }
}

const mapReduxStateToProps = reduxStore => {
    return {
        feedback: reduxStore.GetReducer
    };
};


export default connect(mapReduxStateToProps)(Admin);