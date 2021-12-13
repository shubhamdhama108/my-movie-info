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



//  function myFunction(){
    // let form=document.getElementById('searchForm');
    // form.addEventListener('submit',(e)=>{
    //     // e.preventDefault;
    //    let searchText= document.getElementById('searchText').value;
    //     // console.log(searchText);
    //     getMovies(searchText);
        
    // });
// }

// function getMovies(searchText){
//     console.log(searchText);

// }
// var text;
// myfunction();
// console.log(text);

// function myfunction() {
//     document.getElementById('searchForm').addEventListener('submit',(e)=>{
//         text=document.getElementById('searchText').value;
//         console.log(text);
//         // e.preventDefault;
//     });

// }



    
    



// var input = document.getElementById('searchText');
// // console.log(input);
// console.log("hello");
// window.onload=handleinput;

// function handleKey(e) {
//  if(e.key=='Enter'){
//      const text=e.target.value;
//      console.log(text);
//  }
    
// }

// function handleinput() {
    
// input.addEventListener('keyup',handleKey);
// }


