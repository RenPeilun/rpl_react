import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Cascader } from 'antd'

export default class AddressPicker extends React.Component {

	onChange(value) {
	  console.log(value);
	}

	render(){

		let self = this

		const options = [{
		  value: 'zhejiang',
		  label: '浙江',
		  children: [{
		    value: 'hangzhou',
		    label: '杭州',
		    children: [{
		      value: 'xihu',
		      label: '西湖',
		    }],
		  }],
		}, {
		  value: 'jiangsu',
		  label: '江苏',
		  children: [{
		    value: 'nanjing',
		    label: '南京',
		    disabled: true,
		    children: [{
		      value: 'zhonghuamen',
		      label: '中华门',
		    }],
		  }],
		}];

		return(
			<Cascader options={options} onChange={this.onChange.bind(self)} placeholder="请选择地区" />
		)
	}
}
