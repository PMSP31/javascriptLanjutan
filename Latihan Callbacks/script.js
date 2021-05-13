// Show result dari value yang dimasukan dalam search
$(".search-button").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=65a00e78&s=" + $(".input-keyword").val(),
    success: (result) => {
      const movies = result.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // Show Modal Detail
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=65a00e78&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

$.ajax({
  url: "http://www.omdbapi.com/?apikey=65a00e78&s=avengers",
  success: (result) => {
    const movies = result.Search;
    let cards = "";
    movies.forEach((m) => {
      cards += showCards(m);
    });
    $(".movie-container").html(cards);

    // Show Modal Detail
    $(".modal-detail-button").on("click", function () {
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=65a00e78&i=" + $(this).data("imdbid"),
        success: (m) => {
          const movieDetail = showMovieDetail(m);
          $(".modal-body").html(movieDetail);
        },
        error: (e) => {
          console.log(e.responseText);
        },
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

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
