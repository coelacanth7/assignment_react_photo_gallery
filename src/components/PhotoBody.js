import React from "react";
import PictureCard from "./PictureCard";

const PhotoBody = ({ photos }) => {
	const pics = photos.map((pic, index) => {
		const picObj = {};
		picObj.caption = pic.caption ? pic.caption.text : "";
		picObj.comments = pic.comments.data.length;
		picObj.img = pic.images.standard_resolution.url;
		picObj.link = pic.link;
		picObj.likes = pic.likes.count;
		picObj.tags = pic.tags.join(", ");
		picObj.username = pic.user.username;
		picObj.filter = pic.filter;
		picObj.date = new Date(pic.created_time * 1000).toDateString();

		return <PictureCard picObj={picObj} pic={pic} key={index} />;
	});

	return <div className="row">{pics}</div>;
};

export default PhotoBody;
