import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'

var Test1 = React.createClass({
	getInitialState: function() {
		return {userInput: ''};
	},
	handleChange: function(e) {
		this.setState({userInput: e.target.value});
	},
	clearAndFocusInput: function(e) {
		// Clear the input
		this.setState({userInput: ''}, function() {
			// This code executes after the component is re-rendered
			findDOMNode(this.refs.theInput).focus()  // Boom! Focused!
		});
	},
	render: function() {
		return (
			<div>
				<div onClick={this.clearAndFocusInput}>
					Click to Focus and Reset
				</div>
				<input
					ref="theInput"
					value={this.state.userInput}
					onChange={this.handleChange}
				/>
				</div>
			);
		}
});

export default Test1