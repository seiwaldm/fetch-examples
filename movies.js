const url = "http://10.20.1.224:3000/movies/";

// GET-Anfrage
async function getMovies() {
    const res = await fetch("http://10.20.1.224:3000/movies");
    const data = res.json();
    return data;
}

// POST-Anfrage
async function createMovie(movie) {
    const res = await fetch("http://10.20.1.224:3000/movies", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(movie)
    });
    const data = await res.json();
    console.log(data);
}

// DELETE-Anfrage
async function deleteMovie(id) {
    const res = await fetch(url + id, {
        method: "DELETE"
    });
    console.log(res);
}

// PUT-Anfrage
async function putMovie(id) {
    const res = await fetch(url + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(correctedData)
    });
}

// PATCH-Anfrage - ergänzt Einträge
async function patchMovie(id) {
    const res = await fetch(url + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patchData)
    });
    console.log(res);
}

// Hilfsfunktion zur Erzeugung einer neuen ID:
function generateID() {
    return new Date().toISOString().replace(/[\D]/g, "");
}

// Hilfsmethode zum Feststellen, ob ein Film mit gegebenem Titel existiert:
async function movieExists(searchTitle) {
    const movieList = await getMovies();
    // return movieList.filter(movie => movie.title === title);
    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].title === searchTitle)
            return true;
    }
    return false;
}

const newMovie = {
    id: generateID(),
    title: "Moon Knight",
    year: 2022,
    cast: [],
    uploader: "Seiwald"
};

const patchData = {
    year: 2022,
    genres: "Comedy",
    title: "Brooklyn 99",
    uploader: "Seiwald"
};

const correctedData = {
    title: "A new movie",
    genres: "Drama",
    cast: ["Migei", "Seppei", "Pazei", "Manei", "Seli"],
    uploader: "Chef"
}
// console.log(newMovie);
// deleteMovie("20220321085158527");
// createMovie(newMovie);
// patchMovie("20220321090523524");
// putMovie("20220321090523524")

console.log(new )