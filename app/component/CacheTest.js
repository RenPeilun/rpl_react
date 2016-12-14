import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Cascader } from 'antd'
import * as BaseDataStore from '../store/cache/BaseDataStore'

const AddressStoreObj = new BaseDataStore.AddressStore()

export default class CacheTest extends React.Component {

	constructor(props) {
		super(props)
		this.state={

		}
	}

	componentWillMount() {
		// BaseDataStore.loadAddressStore((raw, rawInObj) => {
		// 					self.rawAddress = raw
		// 					self.addressInObj = rawInObj
		// 				})
	}

	render() {

		let self = this

		console.log(AddressStoreObj)

		// BaseDataStore.loadSponsors()


		return(
			<div>
				
			</div>
		)
	}
}