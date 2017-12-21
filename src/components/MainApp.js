import React from "react";
import PhotoBody from "./PhotoBody";
import Photos from "../data/photos.js";
const photos = Photos.data;

const MainApp = () => {
	return (
		<div className="container">
			<h1>hey</h1>
			<PhotoBody photos={photos} />
		</div>
	);
};

export default MainApp;
