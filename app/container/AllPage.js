import React from "react"
import { render } from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../action/AllAction'
import AllComponent from '../component/AllComponent'

class AllPage extends React.Component {

	componentWillMount() {
		// this.props.testAction()
		this.props.loadProvince()
	}

	render() {
		let self = this

		// console.log(this.props)

		return (
			<AllComponent {...this.props}/>
		)
			
	}
}

function mapStateToProps(state) {
  return {
  	state: state.allReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AllActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPage)
