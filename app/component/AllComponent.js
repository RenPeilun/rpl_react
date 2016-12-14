import React from "react"
import { render } from 'react-dom'
import { DatePicker } from 'antd'

// all the test component
import FileInput from './FileInput'
import AddressPicker from './AddressPicker'
import CacheTest from './CacheTest'
import Test from './Test'
import Test1 from './Test1'
import PhotoSwipeTest from './PhotoSwipeTest'
import PhotoSwipeTest1 from './PhotoSwipeTest1'
import ChartTest from './ChartTest'

// all the test style
import '../style/normalize.scss'
import '../style/animation.scss'

export default class AllComponent extends React.Component {

	handleFileInput(files) {
		console.log(files)
	}

	change(name) {
		name = 'renpeilun'
	}

	render() {
		let self = this
		return (
			<div>
				{/*<PhotoSwipeTest1/>*/}
				{/*<ChartTest/>*/}
				{/*<PhotoSwipeTest/>*/}				
				<Test/>
				{/*<CacheTest/>*/}
				{/*<AddressPicker/>*/}
				{/*<DatePicker />
				<FileInput onChange={this.handleFileInput.bind(self)} multiple={false}/>*/}
			</div>
		)
	}
}

