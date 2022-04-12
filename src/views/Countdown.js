import React, { Component } from 'react';

class Countdown extends Component {
    state = {
        count: 10
    }


    componentDidMount() {
        // setTimeout(() => {
        //     console.log('me')
        // }, 1000);

        // this là 1 object mà tham chiếu trực tiếp vào component của ta
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })

        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        // tức là sau khi có sự thay đổi
        if (prevState.count !== this.state.count && this.state.count === 0) {
            // clear timer
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
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