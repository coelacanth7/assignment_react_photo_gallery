import React from "react";

const PictureCard = ({ picObj }) => {
	const { caption, comments, img, link, likes, username, date } = picObj;

	return (
		<div className="col-md-4">
			<div className="card">
				<a href={`https://www.instagram.com/p/${link}`}>
					<img className="card-img-top" src={img} alt="Card image cap" />
				</a>
				<div className="card-body">
					<h4 className="card-title">
						<a href={`https://www.instagram.com/${username}`}>{username}</a>
					</h4>
					<p className="card-text">{caption}</p>
					<p>{date}</p>
					<p>{likes} likes</p>
					<p>{comments} comments</p>
				</div>
			</div>
		</div>
	);
};

export default PictureCard;
