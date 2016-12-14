import { combineReducers } from 'redux'
import * as Actions from '../action/AllAction'

const defaultState = {
	area: {
		loading: false,
		initialized: false,
		data:[],
		error: {}
	},
	testState: {
		loading: false,
		data: {},
		error: {}
	}
}


function allReducer(state = defaultState, action) {
	// console.log(action)
	switch(action.type) {
		case Actions.TEST_ACTION:
			return Object.assign({}, state, {
				testState: {
					loading: false,
					data: action.text,
					error: {}
				}
			})
		case Actions.COMM_FETCH_PROVINCE:
		case Actions.COMM_FETCH_PROVINCE_SUCCESS:
		case Actions.COMM_FETCH_PROVINCE_FAIL:
			return Object.assign({}, state, {
				area: areaReducer(state.area, action)
			})
		default:
			return state
	}
}

function areaReducer(state, action) {
	switch(action.type) {
		case Actions.COMM_FETCH_PROVINCE:
			return Object.assign({}, state, {
				loading: true,
				initialized: false,
				data:[],
				error: {}
			})
		case Actions.COMM_FETCH_PROVINCE_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				initialized: true,
				data: action.data,
				error: {}
			})
		case Actions.COMM_FETCH_PROVINCE_FAIL:
			return Object.assign({}, state, {
				loading: false,
				initialized: false,
				data: [],
				error: action.error
			})
		default:
			return state
	}
}

const rplApp = combineReducers({
	allReducer
})

export default rplApp