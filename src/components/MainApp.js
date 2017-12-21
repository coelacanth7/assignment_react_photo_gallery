import React from "react";
import PhotoBody from "./PhotoBody";
import Photos from "../data/photos.js";
import MyPhotos from "../data/coelacanth7.js";
const photos = Photos.data;
const myPhotos = MyPhotos.user.media.nodes;

const MainApp = () => {
	return (
		<div className="container">
			<h1>hey</h1>
			{<PhotoBody myPhotos={myPhotos} />}
		</div>
	);
};

export default MainApp;
