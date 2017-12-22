import React from "react";
import PhotoBody from "./PhotoBody";
import Search from "./Search";
import Photos from "../data/photos.js";
import MyPhotos from "../data/coelacanth7.js";
import { searchPhotos } from "../helpers/helpers.js";
const photos = Photos.data;
const myPhotos = MyPhotos.user.media.nodes;

class MainApp extends React.Component {
	constructor() {
		super();
		this.state = {
			myPhotos: myPhotos,
			search: ""
		};
	}

	onChangeInput = e => {
		this.setState({
			search: e.target.value
			// myPhotos: searchPhotos(this.state.myPhotos, this.state.search)
		});
	};

	submitHandler(e) {
		// prevent user from pressing enter
		// https://stackoverflow.com/questions/43750335/react-prevent-form-submission-when-enter-is-pressed-inside-input
		e.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<h1>hey</h1>
				<Search
					value={this.state.search}
					onChange={this.onChangeInput}
					onSubmit={this.submitHandler}
				/>
				<PhotoBody myPhotos={this.state.myPhotos} search={this.state.search} />
			</div>
		);
	}
}

export default MainApp;
