import React, { Component } from 'react'

export default class SubItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value || nextProps.onChange !== this.props.onChange
    }

    render() {
        let { value, onChange } = this.props
        return (
            <div>
                <input value={value} onClick={onChange} />
            </div>
        )
    }
}