import React, { Component, PropTypes } from 'react'
import { render, findDOMNode } from 'react-dom'
import {PhotoSwipeGallery} from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css'

export default class PhotoSwipeTest1 extends React.Component {

	constructor(props) {
		super(props)
		this.state={
			isOpen: true,
			galleryItems: [
				{
					html: '<img class="pswp__img" src="http://lorempixel.com/1200/900/nightlife/1" style="transform: translate3d(-50%, -50%, 0px);">',
					// src: 'http://lorempixel.com/1200/900/nightlife/1',
					thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
					w: 1200,
					h: 900,
					title: 'Image 1'
				},
				{
					html: '<img class="pswp__img" src="http://lorempixel.com/1200/900/nightlife/2" style="transform: translate3d(-50%, -50%, 0px);">',
					// src: 'http://lorempixel.com/1200/900/nightlife/2',
					thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
					w: 1200,
					h: 900,
					title: 'Image 2'
				},
				{
					html: '<img class="pswp__img" src="http://lorempixel.com/1200/900/nightlife/3" style="transform: translate3d(-50%, -50%, 0px);">',
					// src: 'http://lorempixel.com/1200/900/nightlife/3',
					thumbnail: 'http://lorempixel.com/120/90/nightlife/3',
					w: 1200,
					h: 900,
					title: 'Image 3'
				},
				{
					html: '<img class="pswp__img" src="http://lorempixel.com/1200/900/nightlife/4" style="transform: translate3d(-50%, -50%, 0px);">',
					// src: 'http://lorempixel.com/1200/900/nightlife/4',
					thumbnail: 'http://lorempixel.com/120/90/nightlife/4',
					w: 1200,
					h: 900,
					title: 'Image 4'
				},
				{
					html: '<img class="pswp__img" src="http://tse2.mm.bing.net/th?id=OIP.Mcd3fb1fd2b8a01682f3cc588da712f44o1&pid=15.1" style="transform: translate3d(-50%, -50%, 0px);">',
					// src: `http://tse2.mm.bing.net/th?id=OIP.Mcd3fb1fd2b8a01682f3cc588da712f44o1&pid=15.1`,
				    thumbnail: `http://tse2.mm.bing.net/th?id=OIP.Mcd3fb1fd2b8a01682f3cc588da712f44o1&pid=15.1`,
				    w: 1200,
					h: 900,
					title: 'Image 5'
				},
				{
					html: '<img class="pswp__img" src="http://tse3.mm.bing.net/th?id=OIP.M5fa210428371a8e352a2d60c6305e089H2&pid=15.1" style="transform: translate3d(-50%, -50%, 0px);">',
					// src: `http://tse3.mm.bing.net/th?id=OIP.M5fa210428371a8e352a2d60c6305e089H2&pid=15.1`,
				    thumbnail: `http://tse3.mm.bing.net/th?id=OIP.M5fa210428371a8e352a2d60c6305e089H2&pid=15.1`,
				    w: 1200,
					h: 900,
					title: 'Image 6'
				}
			],
			options: {
				closeOnScroll: false,
				maxSpreadZoom: 10
			}
		}
	}

	getThumbnailContent(item) {
		return (
			<img src={item.thumbnail} height={90}/>
		)
	}

	mouseUsed() {
		console.log("mouseUsed")
	}

	resizeHandle() {
		console.log("resizeHandle")
		const container = findDOMNode(this)
		console.log(container)
	}

	parseVerticalMargin() {
		console.log("parseVerticalMargin")
	}

	render() {
		let self = this
		return ( 
			<div className='layout-page'>
				<main className='layout-main'>
					<div className='container'>
						<h2>PhotoSwipeGallery</h2>
						<hr/>
						<PhotoSwipeGallery
							items={this.state.galleryItems}
							thumbnailContent={this.getThumbnailContent}
							mouseUsed={this.mouseUsed}/>
					</div>
				</main>
			</div>
		)
	}
}

// function run() {
//	 ReactDOM.render( < App / > , document.getElementById('app'));
// }

// if (window.addEventListener) {
//	 window.addEventListener('DOMContentLoaded', run);
// } else {
//	 window.attachEvent('onload', run);
// }