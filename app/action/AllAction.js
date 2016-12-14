import * as HttpProps from '../middleware/HttpProps'
const API_ROOT_DEV = "http://192.168.0.171:9080"

export const TEST_ACTION = "TEST_ACTION"
export function testAction() {
	return {
		type: TEST_ACTION,
		text: 'hello world'
	}
}


export const COMM_FETCH_PROVINCE = "COMM_FETCH_PROVINCE"
export const COMM_FETCH_PROVINCE_SUCCESS = "COMM_FETCH_PROVINCE_SUCCESS"
export const COMM_FETCH_PROVINCE_FAIL = "COMM_FETCH_PROVINCE_FAIL"
export function loadProvince() {
	return {
		[HttpProps.REMOTE_API_CALL]: {
			types: [COMM_FETCH_PROVINCE, COMM_FETCH_PROVINCE_SUCCESS, COMM_FETCH_PROVINCE_FAIL],
			endpoint: 'bdc/division/provinces'
		}
	}
}
