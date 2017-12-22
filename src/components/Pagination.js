import React from "react";

const Pagination = ({ numPhotos, currentPage, onChange }) => {
	const numPages = numPhotos / 6;
	const pages = [];
	for (var i = 1; i <= numPages; i++) {
		pages.push(
			<option value={i} key={i}>
				{i}
			</option>
		);
	}
	return (
		<select className="form-control" onChange={onChange}>
			{pages}
		</select>
	);
};

export default Pagination;
