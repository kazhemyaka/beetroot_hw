const API_KEY = "d3de045d";
const searchInput = document.getElementById("search-input");
const searchType = document.getElementById("search-type");
const searchBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");
const pagination = document.getElementById("pagination");
const movieDetails = document.getElementById("movie-details");

let currentPage = 1;
let totalPages = 1;

searchBtn.addEventListener("click", () => {
  const query = searchInput.value;
  const type = searchType.value;
  fetchMovies(query, type, currentPage);
});

function fetchMovies(query, type, page) {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        displayMovies(data.Search);
        displayPagination(data.totalResults, page);
      } else {
        movieList.innerHTML = "<p>Movie not found!</p>";
        pagination.innerHTML = "";
        movieDetails.innerHTML = "";
      }
    })
    .catch((error) => console.error(error));
}

function displayMovies(movies) {
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
          <h2>${movie.Title}</h2>
          ${movie.Poster === "N/A" ? "" : `<img src="${movie.Poster}" alt="${movie.Title}">`}
          <button class="details-btn" data-imdbid="${movie.imdbID}">Details</button>
          <hr>
        `;
    movieList.appendChild(movieElement);
  });

  const detailsBtns = document.querySelectorAll(".details-btn");
  detailsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const imdbID = btn.dataset.imdbid;
      fetchMovieDetails(imdbID);
    });
  });
}

function displayPagination(totalResults, currentPage) {
  pagination.innerHTML = "";
  totalPages = Math.ceil(totalResults / 10);

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      pageBtn.classList.add("page-btn");
      if (i === currentPage) {
        pageBtn.disabled = true;
      } else {
        pageBtn.addEventListener("click", () => {
          currentPage = i;
          const query = searchInput.value;
          const type = searchType.value;
          fetchMovies(query, type, currentPage);
        });
      }
      pagination.appendChild(pageBtn);
    }
  }
}

function fetchMovieDetails(imdbID) {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      movieDetails.innerHTML = `
            <h2>${data.Title}</h2>
            <p>Year: ${data.Year}</p>
            <p>Rated: ${data.Rated}</p>
            <p>Released: ${data.Released}</p>
            <p?Runtime: ${data.Runtime}</p>
            <p>Genre: ${data.Genre}</p>
            <p>Director: ${data.Director}</p>
            <p>Writer: ${data.Writer}</p>
            <p>Actors: ${data.Actors}</p>
            <p>Plot: ${data.Plot}</p>
            <p>Language: ${data.Language}</p>
            <p>Country: ${data.Country}</p>
            <p>IMDB Rating: ${data.imdbRating}</p>
          `;
    })
    .catch((error) => console.error(error));
}
