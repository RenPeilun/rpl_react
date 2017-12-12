import React, { Component } from 'react'
import Perf from 'react-addons-perf'
// import './App.css'
import ListItem from './ListItem'

function arrayGenerator(length) {
    return Array.apply(null, { length: length }).map(Number.call, Number)
}

class ArrayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            multiplier: 1
        }
    }

    componentWillMount() {
        window.performance.mark('ArrayList')
    }

    componentDidMount() {
        console.log(window.performance.now('ArrayList'))
    }

    // componentDidUpdate() {
    //     Perf.stop()
    //     Perf.printInclusive()
    //     Perf.printWasted()
    // }

    resetMultiplier() {
        // Perf.start()
        this.setState({ multiplier: 2 })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.resetMultiplier.bind(this)}>Click Me</button>
                <ul>
                    {
                        arrayGenerator(5000).map(i => {
                            return <ListItem key={i} text={i} />
                        })
                    }
                    {
                        arrayGenerator(5000).map(i => {
                            return <ListItem key={i} text={i + this.state.multiplier} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ArrayList