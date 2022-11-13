import { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    clickCounter() {
        this.setState({
            count : this.state.count + 1
        });
    }
    render() {
        return(
            <div>
                <h1>Class Counter</h1>
                <p>{this.state.count}</p>
                <button onClick={() => this.clickCounter()}>Counter</button>
            </div>
        )
    }
}
export default ClassCounter;