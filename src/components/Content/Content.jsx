import React, { Component } from 'react';


class Content extends Component {
    render() {
        return (
            <>
                <h1>Content</h1>
                <div>
                    <input id="content1" type="radio" name="content" value="1" class="contentInput" />1
                    <input id="content2" type="radio" name="content" value="2" class="contentInput" />2
                    <input id="content3" type="radio" name="content" value="3" class="contentInput" />3
                    <input id="content4" type="radio" name="content" value="4" class="contentInput" />4
                    <input id="content5" type="radio" name="content" value="5" class="contentInput" />5
                <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/support')}>Next</button>
                </div>
            </>


        )

    }
}




export default Content;