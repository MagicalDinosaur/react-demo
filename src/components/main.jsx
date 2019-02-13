import React from 'react'
import '../style/main.scss'
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: 'duhonghui'
        };
    }
    // 生命周期函数
    // 输出DOM后会执行 componentDidMount
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <nav>
                    <a href="#/reduxdemo">点击进入 ReduxDemo</a>
                </nav>
                <pre>
                    <code>
                        今天的时间是：{this.state.date.toLocaleTimeString()}
                    </code>
                </pre>
            </div>
        )
    }
}