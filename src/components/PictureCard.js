import React from "react";

const PictureCard = ({ photos }) => {
	return (
		<div className="col-sm-4">
			<pre>{photos}</pre>
		</div>
	);
};

export default PictureCard;
