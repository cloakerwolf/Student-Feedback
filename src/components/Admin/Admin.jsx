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
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



class Admin extends Component {
    //When the component is started it makes sure this.getFeedback runs
    componentDidMount() {
        this.getFeedback();
    }
    
    //GET Data From Database Then send it to the Redux
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

    //Delete a row from the Database and the Dom
    handleDelete = (id) => {
        axios.delete(`/feedback/${id}`)
        .then(response => {
            console.log('in delete axios:', response);
            this.getFeedback();
        })
        .catch(error =>{
            console.log('in delete axios:',error);
            
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
                    <TableCell><Button onClick={() => this.handleDelete(single.id)} variant="contained" color="secondary">Delete<DeleteIcon /> </Button></TableCell>
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

                <Button variant="contained" color="primary" className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/')}>Leave New Feedback</Button>
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