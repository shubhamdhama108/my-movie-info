// $(document).ready(()=>{
//     $('#searchForm').on('submit',(e)=>{
//         let searchText=$('#searchText').val();
//         getMovies(searchText);
//         e.preventDefault();
//     });
// });

window.onload=()=>{
    let form=document.getElementById('searchForm');
    form.addEventListener('submit',(e)=>{
       let searchText= document.getElementById('searchText').value;
        // console.log(searchText);
        getMovies(searchText);
        e.preventDefault();

        
    });
};

function getMovies(searchText){
    axios.get(' http://www.omdbapi.com?s='+searchText+'&apikey=e0e160d')
    .then((response)=>{
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        movies.forEach(iterate);
        function iterate(movie){
            output+=`
            <div class="col-md-3">
            <div class="well text-center">
            <img src="${movie.Poster}">
            <h5>${movie.Title}</h5>
            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
            </div>
            `;
        }
        // $('#movies').html(output);
        document.getElementById('movies').innerHTML=output;
    })
    .catch((err)=>{
        console.log(err);
    })
}

function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location='movie.html';
    return false;
}

// (' http://www.omdbapi.com?s='+movieId+'&apikey=e0e160d')

function getMovie(){
    let movieId= sessionStorage.getItem('movieId');
    axios.get('http://www.omdbapi.com?i='+movieId+'&apikey=thewdb')
    .then((response)=>{
        console.log(response);
        let movie = response.data;

        let output =`
          <div class="row">
            <div class="col-md-4">
               <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-md-8">
                <h2>${movie.Title}</h2>
                <ul class="list-group">
                   <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
                   <li class="list-group-item"><strong>Released:</strong>${movie.Released}</li>
                   <li class="list-group-item"><strong>Rated:</strong>${movie.Rated}</li>
                   <li class="list-group-item"><strong>IMDB:</strong>${movie.IMDB}</li>
                   <li class="list-group-item"><strong>Director:</strong>${movie.Director}</li>
                   <li class="list-group-item"><strong>Writer:</strong>${movie.Writer}</li>
                   <li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>
                </ul>
            </div>
          </div>  
          <div class="row">
        <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go back to search</a>
        </div>
    </div>

        `;

        $('#movie').html(output);
       
    })
    .catch((err)=>{
        console.log(err);
    })
}



