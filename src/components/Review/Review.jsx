import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Button from '@material-ui/core/Button';


class Review extends Component {
    handleSubmit = () =>{
        let information = this.props.feedback;
        let info = {
            feeling: information.feeling,
            understanding: information.understanding,
            support: information.support,
            comments: information.comments
        };

        Axios.post('/feedback', info)
            .then(response =>{
                console.log('successful Post request to database', response);
                this.props.dispatch({type:'CLEAR_FEEDBACK'});
                this.props.history.push('/submitfeedback');
            })
            .catch(err => {
                console.log('error on Post to database', err);
                
            });
        
            
    }

    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/comments');
    }


    render() {
        return (
            <>
            {/* {JSON.stringify(this.props.feedback)} */} 
                <h1>Review Your Feedback</h1>
                <h3>Feelings: {this.props.feedback.feeling}</h3>
                <h3>Understanding: {this.props.feedback.understanding}</h3>
                <h3>Support: {this.props.feedback.support}</h3>
                <h3>Comments: {this.props.feedback.comments}</h3>
                <Button variant="contained" color="primary" className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleSubmit}>Next</Button>
                <br />
                <Button variant="contained" color="secondary" className="btn btn-secondary btn-lg checkoutBtn" onClick={this.handleBack}>Back</Button>
            </>


        )

    }
}



const mapReduxStateToProps = reduxStore => {
    return {
        feedback: reduxStore.inputReducer
    };
};


export default connect(mapReduxStateToProps)(Review);