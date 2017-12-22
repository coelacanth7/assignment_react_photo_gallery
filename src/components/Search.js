import React from "react";

const Search = ({ value, onChange, onSubmit }) => {
	//

	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor="searchField">Search the Photos</label>
				<input
					type="search"
					className="form-control"
					id="searchField"
					aria-describedby="search Photos"
					placeholder={value}
					value={value}
					onChange={onChange}
				/>
				<small id="Help" className="form-text text-muted">
					There's not too many photos.
				</small>
			</div>
		</form>
	);
};

export default Search;
