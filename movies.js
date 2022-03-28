const host = "http://localhost:3000";
document.querySelector("#addMovie").addEventListener("click", createMovie)


// GET-Anfrage
async function getMovies() {
    const res = await fetch("http://10.20.1.224:3000/movies");
    const data = res.json();
    return data;
}

// POST-Anfrage
async function createMovie(e) {

    e.preventDefault();

    //erstelle ein neues Film-Objekt mit den Daten aus dem html-Formular:
    const movie = {
        id: generateID(),
        title: document.querySelector("#title").value,
        year: document.querySelector("#year").value,
        uploader: document.querySelector("#uploader").value,
        ip: document.querySelector("#ip").value,
    }

    const res = await fetch(host + "/movieList", {
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
    return new Date().toISOString().replace(/[\D]/g, "") + Math.random();
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


