import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import {PhotoSwipeGallery} from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css'

export default class PhotoSwipeTest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	buildGalleryOptions() {
		return {
			shareEl: false,
			tapToClose: true,
			maxSpreadZoom: 10,
			shareButtons: [
			    {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
			    {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
			    {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'},
			    {id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			]
		}
	}

	getThumbnailContent(item) {
		return (
		    <img src={item.thumbnail} height={90}/>
		)
	}

	render(){
		let self = this

		let items = [
				{
					src: `http://tse2.mm.bing.net/th?id=OIP.Mcd3fb1fd2b8a01682f3cc588da712f44o1&pid=15.1`,
				    thumbnail: `http://tse2.mm.bing.net/th?id=OIP.Mcd3fb1fd2b8a01682f3cc588da712f44o1&pid=15.1`
				},
				{
					src: `http://tse3.mm.bing.net/th?id=OIP.M5fa210428371a8e352a2d60c6305e089H2&pid=15.1`,
				    thumbnail: `http://tse3.mm.bing.net/th?id=OIP.M5fa210428371a8e352a2d60c6305e089H2&pid=15.1`
				}
		]

		return (
			<div>
				<PhotoSwipeGallery items={items} 
									options={this.buildGalleryOptions()} 
									thumbnailContent={this.getThumbnailContent}
									className="disease-img"/>
			</div>
		)
	}
}
