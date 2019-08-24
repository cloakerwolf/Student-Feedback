import React, { Component } from 'react';


class Support extends Component {
    render() {
        return (
            <>
                <h1>Support</h1>
                <div>
                    <input id="support1" type="radio" name="support" value="1" class="supportInput" />1
                    <input id="content2" type="radio" name="support" value="2" class="supportInput" />2
                    <input id="support3" type="radio" name="support" value="3" class="supportInput" />3
                    <input id="support4" type="radio" name="support" value="4" class="supportInput" />4
                    <input id="support5" type="radio" name="support" value="5" class="supportInput" />5
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/comments')}>Next</button>
                </div>
            </>


        )

    }
}




export default Support;