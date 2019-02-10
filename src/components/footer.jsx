import React from 'react';
import '../style/footer.scss'

export default class Footer extends React.Component {
    state = {
        name: 'duhonghui'
    }

    componentWillMount() {
        console.log('执行');
        console.log(this.store)
    }

    render() {
        return (
            <footer className="foot">
                <span>@{this.state.name}</span>
                <span>  这是一个footer</span>
            </footer>
        )
    }
}

