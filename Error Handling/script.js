/* Error Handling : Promise menggunakan
.then()
.catch()

Error Handling : Async Await menggunakan
try
catch()
*/

const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movie = await getMovie(inputKeyword.value);
    showUI(movie);
  } catch (err) {
    alert(err);
  }
});

function getMovie(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=65a00e78&s=" + keyword)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((res) => {
      if (res.Response === "False") {
        throw new Error(res.Error);
      }
      return res.Search;
    });
}

function showUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    showUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=65a00e78&i=" + imdbid)
    .then((res) => res.json())
    .then((m) => m);
}

function showUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-3 my-3">
    <div class="card">
    <img class="card-img-top" src="${m.Poster}" alt="" />
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <p class="card-text text-muted">${m.Year}</p>
        <a href="#" class="btn btn-primary modal-detail-button" 
        data-toggle="modal" data-target="#movieDetail" data-imdbid="${m.imdbID}">Show Detail</a>
        </div>
    </div>
    </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
    <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" alt="" />
    </div>
    <div class="col-md">
        <ul class="list-group">
        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
        <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
        <li class="list-group-item"><strong>Actor :</strong> ${m.Actors}</li>
        <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
        <li class="list-group-item"><strong>Plot :</strong> ${m.Plot}</li>
        </ul>
    </div>
    </div>
</div>`;
}
