import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



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
            return (
                <TableRow key={single.id}>
                    <TableCell>{single.feeling}</TableCell>
                    <TableCell>{single.understanding}</TableCell>
                    <TableCell>{single.support}</TableCell>
                    <TableCell>{single.comments}</TableCell>
                </TableRow>
            )
        })



        return (
            <>
                <h1>Admin</h1>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Understanding</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {info}
                        </TableBody>
                    </Table>
                </Paper>

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