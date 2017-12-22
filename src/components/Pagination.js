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
		<form>
			<div className="form-group">
				<label htmlFor="pageNumSelect">Select a page</label>
				<select className="form-control" id="pageNumSelect" onChange={onChange}>
					{pages}
				</select>
			</div>
		</form>
	);
};

export default Pagination;
