import React, { Component } from 'react';


class Feeling extends Component {
    render() {
        return (
            <>
                <h1>How Are You Feeling Today?</h1>
                <div>
                    <input id="feeling1" type="radio" name="feeling" value="1" class="feelingInput"/>1
                    <input id="feeling2" type="radio" name="feeling" value="2" class="feelingInput"/>2
                    <input id="feeling3" type="radio" name="feeling" value="3" class="feelingInput" />3
                    <input id="feeling4" type="radio" name="feeling" value="4" class="feelingInput" />4
                    <input id="feeling5" type="radio" name="feeling" value="5" class="feelingInput" />5
                    <button className="btn btn-secondary btn-lg checkoutBtn" onClick={() => this.props.history.push('/content')}>Next</button>
                </div>
            </>


        )

    }
}




export default Feeling;