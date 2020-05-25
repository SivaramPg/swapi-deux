const characterUrls = new Array(100)
	.fill(0)
	.map((_, i) => `https://swapi.dev/api/people/${i}/`);

export default characterUrls;
