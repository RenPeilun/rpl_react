import React, { Component } from 'react'
import Perf from 'react-addons-perf'
import SubItem from './SubItem'

class TestRender extends Component {
    constructor(props) {
        super(props)
        this.inputHandler = this.inputHandler.bind(this)
        this.state = {
            value: 'hello'
        }
    }

    componentDidUpdate() {
        Perf.stop()
        Perf.printInclusive()
        Perf.printWasted()
    }

    resetValue() {
        Perf.start()
        this.setState({ value: 'hello' })
    }

    inputHandler() {
        // ...
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.resetValue.bind(this)}>Click Me</button>
                <SubItem onChange={this.inputHandler} 
                        value={this.state.value}/>
            </div>
        );
    }
}

export default TestRender