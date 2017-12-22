export function searchPhotos(photoArr, searchParams) {
	if (searchParams === "") {
		return photoArr;
	}

	var regex = new RegExp(`${searchParams}`, "ig");

	var returnArr = [];

	for (var i = 0; i < photoArr.length; i++) {
		if (regex.test(photoArr[i].caption) || regex.test(photoArr[i].username)) {
			returnArr.push(photoArr[i]);
		}
	}

	return returnArr;
}
