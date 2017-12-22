import React from "react";
import PictureCard from "./PictureCard";
import Pagination from "./Pagination";
import { searchPhotos } from "../helpers/helpers.js";

class PhotoBody extends React.Component {
	constructor() {
		super();
		this.state = {
			page: 1
		};
	}

	onChangePage = e => {
		this.setState({
			page: e.target.value
		});
	};

	render() {
		const Pics = searchPhotos(this.props.myPhotos, this.props.search);
		var myPics;

		if (Pics) {
			myPics = Pics.map((pic, index) => {
				const picObj = {};
				picObj.caption = pic.caption ? pic.caption : "";
				picObj.comments = pic.comments.count;
				picObj.img = pic.display_src;
				picObj.link = pic.code;
				picObj.likes = pic.likes.count;
				picObj.username = pic.username;
				picObj.date = new Date(pic.date * 1000).toDateString();

				return <PictureCard picObj={picObj} key={index} />;
			});
		} else {
			myPics = "no pics";
		}

		return (
			<div className="row">
				<Pagination
					numPhotos={myPics.length}
					currentPage={this.state.page}
					onChange={this.onChangePage}
				/>
				<br className="mb-5" />
				{myPics.slice(this.state.page * 6 - 6, this.state.page * 6)}
			</div>
		);
	}
}

export default PhotoBody;
