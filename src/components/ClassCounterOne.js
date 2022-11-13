import React, {Component} from 'react';

class ClassCounterOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`;
    }
    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} Times`;
    }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return(
            <>
                <div>Class Counter One</div>
                <p>Counter {this.state.count}</p>
                <button onClick={this.incrementCount}>Counter</button>
            </>
        )
    }
}

export default ClassCounterOne;
