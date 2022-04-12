import React, { Component } from 'react';

class Countdown extends Component {
    state = {
        count: 60
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        );
    }
}

export default Countdown;