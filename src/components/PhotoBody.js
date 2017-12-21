import React from "react";
import PictureCard from "./PictureCard";

const PhotoBody = ({ photos }) => {
	const pics = photos.map((pic, ind) => {
		return <PictureCard pic={pic} key={ind} />;
	});

	return <div className="row">{pics}</div>;
};

export default PhotoBody;
