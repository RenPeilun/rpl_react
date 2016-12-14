import React from "react"
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

import AllPage from './container/AllPage'
import rplApp from './reducer/AllReducer'
import remoteApi from './middleware/RemoteAPICall'

const createStoreWithMiddleware = applyMiddleware(
  remoteApi,
)(createStore)

const store = createStoreWithMiddleware(rplApp)

render(
	<Provider store={store}>
		<AllPage/>
	</Provider>, 
	document.getElementById("content")
)
