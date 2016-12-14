import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

export default class FileInput extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			file: []
		}
	}

	_onChange(){
	  // Assuming only image
	  var file = this.refs.file.files[0];
	  var reader = new FileReader();
	  var url = reader.readAsDataURL(file);

	   reader.onloadend = function (e) {
	      this.setState({
	          imgSrc: [reader.result]
	      })
	    }.bind(this)
	  console.log(url) // Would see a path?
	  // TODO: concat files
	}

	render(){
	 return(
	  <div>
	    <form>
	      <input 
	        ref="file" 
	        type="file" 
	        name="user[image]" 
	        multiple="true"
	        onChange={this._onChange}/>
	     </form>
	    {/* Only show first image, for now. */}
	    <img src={this.state.imgSrc} />
	  </div>
	 )
	}
}

FileInput.propTypes= {
	onChange: React.PropTypes.func.isRequired,
	multiple: React.PropTypes.bool,
	btnValue: React.PropTypes.string
}
