import React from "react";

const PictureCard = ({ picObj }) => {
	const {
		comments,
		img,
		link,
		likes,
		tags,
		username,
		filter,
		date,
		caption
	} = picObj;

	return (
		<div className="col-sm-4">
			<div className="card">
				<a href={link}>
					<img className="card-img-top" src={img} alt="Card image cap" />
				</a>
				<div className="card-body">
					<h4 className="card-title">
						<a href={`https://www.instagram.com/${{ username }}`}>{username}</a>
					</h4>
					<p className="card-text">{caption}</p>
					<p>{tags}</p>
					<p>{filter}</p>
					<p>{date}</p>
					<p>{likes} likes</p>
					<p>{comments} comments</p>
				</div>
			</div>
		</div>
	);
};

export default PictureCard;
