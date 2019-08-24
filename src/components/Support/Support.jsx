import React, { Component } from 'react';


class Support extends Component {
    render() {
        return (
            <>
                <h1>Support</h1>
                <div>
                    <input className="inputs" type="radio" name="support" value="1" class="supportInput" />1
                    <input className="inputs" type="radio" name="support" value="2" class="supportInput" />2
                    <input className="inputs" type="radio" name="support" value="3" class="supportInput" />3
                    <input className="inputs" type="radio" name="support" value="4" class="supportInput" />4
                    <input className="inputs" type="radio" name="support" value="5" class="supportInput" />5
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/comments')}>Next</button>
                </div>
            </>


        )

    }
}




export default Support;