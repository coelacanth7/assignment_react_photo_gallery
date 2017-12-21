import React from "react";
import PictureCard from "./PictureCard";

const PhotoBody = ({ myPhotos }) => {
	const myPics = myPhotos.map((pic, index) => {
		const picObj = {};
		picObj.caption = pic.caption ? pic.caption : "";
		picObj.comments = pic.comments.count;
		picObj.img = pic.display_src;
		picObj.link = pic.code;
		picObj.likes = pic.likes.count;
		picObj.username = "coelacanth7";
		picObj.date = new Date(pic.date * 1000).toDateString();

		return <PictureCard picObj={picObj} key={index} />;
	});

	return <div className="row">{myPics}</div>;
};

export default PhotoBody;
