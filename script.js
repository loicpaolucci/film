

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d0853028")
	.then(response => response.json())
	.then(response => console.log(response))
	