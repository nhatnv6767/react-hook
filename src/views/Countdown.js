import React, { Component, useState, useEffect } from 'react';

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
                this.props.onTimesup();
            }
        }
    }
    render() {
        return (
            <div>
                {this.state.count} class
            </div>
        );
    }
}


const NewCountDown = () => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            return
        }
        let timer = setInterval(() => {
            // setCount này chỉ chạy 1 lần
            // lý do là useEffect
            // nó sẽ hiểu như biến count trong này là tham chiếu
            // nên lúc nào nó cũng sẽ hiểu biến count always by 55
            setCount(count - 1)
        }, 1000);
        // nên phải truyền vào 1 cái dependence
        // mỗi lần biến count thay đổi nó sẽ chạy vào đây
        return () => {
            // hook sẽ hiểu là mỗi lần useEffect được chạy
            // thì nó sẽ chạy đống code ở trên, sau đó nhảy vào chạy ở đây
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{count} hooks</div>
    )
}

export { Countdown, NewCountDown };

