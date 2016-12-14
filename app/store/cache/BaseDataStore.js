import * as CacheManager from './CacheManager'
import * as HttpProps from '../../middleware/HttpProps'
import 'whatwg-fetch'

const DZJ_ADDRESS_RAW = 'DZJ_ADDRESS_RAW'
const DZJ_ADDRESS_IN_OBJ = 'DZJ_ADDRESS_IN_OBJ'

export class AddressStore {
	constructor() {
		let self = this
		self.rawAddress = CacheManager.getAsObject(DZJ_ADDRESS_RAW)
		self.addressInObj = CacheManager.getAsObject(DZJ_ADDRESS_IN_OBJ)
		self.rawAddress || loadAddressStore((raw, rawInObj) => {
												self.rawAddress = raw
												self.addressInObj = rawInObj
											})
	}

	addressByDistrictCode(districtCode) {
		if(districtCode && districtCode !== 0) {
			let provinceCode = Math.floor(districtCode/10000) * 10000
			let cityCode = Math.floor(districtCode/100) * 100
			let provinceName = this.addressInObj[provinceCode].name
			let cityName = this.addressInObj[provinceCode].subDivisions[cityCode].name
			let districtName = this.addressInObj[provinceCode].subDivisions[cityCode].subDivisions[districtCode].name
			return `${provinceName}${cityName}${districtName}`
		} else {
			return ''
		}
	}

	getAddressInObj() {
		return this.addressInObj
	}

	getRawAddress() {
		return this.rawAddress
	}
}

export function loadAddressStore(callback) {
	fetch(`${HttpProps.API_ROOT}/bdc/division/provinces`)
	.then(HttpProps.validateStatus)
	.then(HttpProps.parseJSON)
	.then(result => {
		let addressInObj = transform(result.data)
		CacheManager.set(DZJ_ADDRESS_RAW, JSON.stringify(result.data))
		CacheManager.set(DZJ_ADDRESS_IN_OBJ, JSON.stringify(addressInObj))
		callback && callback(result.data, addressInObj)
	})
	.catch(err => {
		console.error(err)
	})
}

function transform(rawAddress) {
	let transformed = [...rawAddress]
	transformed = transformed.reduce((obj, curItem) => {
		curItem = Object.assign({}, curItem, {
			subDivisions: curItem.subDivisions && curItem.subDivisions.reduce((obj, subDivision) => {
				subDivision = Object.assign({}, subDivision, {
					subDivisions: subDivision.subDivisions && subDivision.subDivisions.reduce((obj, subDivision) => {
						return Object.assign({}, obj, {
							[subDivision.code]: subDivision
						})
					}, {})
				})

				return Object.assign({}, obj, {
					[subDivision.code]: subDivision
				})
			}, {})
		})

		return Object.assign({}, obj, {
			[curItem.code] : curItem
		})
	}, {})
	return transformed
}



const DZJ_SPONSORS_RAW = 'DZJ_SPONSORS_RAW'
const DZJ_SPONSORS_IN_OBJ = 'DZJ_SPONSORS_IN_OBJ'

export class SponsorsStore {
	constructor() {
		let self = this
		self.rawAddress = CacheManager.getAsObject(DZJ_ADDRESS_RAW)
		self.addressInObj = CacheManager.getAsObject(DZJ_ADDRESS_IN_OBJ)
		self.rawAddress || loadAddressStore((raw, rawInObj) => {
												self.rawAddress = raw
												self.addressInObj = rawInObj
											})
	}
}

export function loadSponsors(callback) {
	fetch(`${HttpProps.API_ROOT}/bdc/users/academicianList`)
	.then(HttpProps.validateStatus)
	.then(HttpProps.parseJSON)
	.then(result => {
		console.log(result)
	})
}
