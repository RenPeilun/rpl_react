import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Line } from 'react-chartjs'

const LineChart = Line

export default class ChartTest extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render(){
		let self = this

		let chartData = {
	        datasets: [{
	            label: 'Scatter Dataset',
	            data: [1,2,3,4,5,6]
	        }]
	    }

	    let chartOptions = {
	        scales: {
	            xAxes: [{
	                type: 'linear',
	                position: 'bottom'
	            }]
	        }
	    }


		return (
			<LineChart data={chartData} width="600" height="250"/>
		)
	}
}
