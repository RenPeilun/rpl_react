import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Cascader } from 'antd'

export default class Test extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render(){
		let self = this
		// this.refs.rpl.getDOMNode()

		// console.log(this.refs.rpl)

		// const node = findDOMNode(this.refs.rpl)
		// console.log(node)
		// if(node){
		// 	const textWidth = node.offsetWidth
		// 	console.log(textWidth)
		// 	console.log(this.refs.rpl.offsetWidth)
		// }

		// console.log(document)


		return (
			<div className="star" ref="rpl">
				<div className="star-yellow"/>
				<div className="star-gray"/>
			</div>
		)
	}
}

// const Test = React.createClass({
// 	getInitialState() {

// 	},
// 	render() {
// 		return (
// 			<div>123123</div>
// 		)
// 	}
// })

// var Test = React.createClass({
// 	getInitialState: function(){
// 		return {

// 		}
// 	},
// 	render: function(){
// 		return (
// 			<div>123123</div>
// 		)
// 	}
// })
