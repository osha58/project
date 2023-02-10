let Api
// api url
const api_url = "https://api.themoviedb.org/3/trending/all/day?api_key=8f3931dafaf5cdcb2f5e09b52fbd5604";
  
// Defining async function
async function getapi() {
    
    // Storing response
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8f3931dafaf5cdcb2f5e09b52fbd5604`);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
    Api=data.results
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('#movies').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = ``
    // Loop to access all rows 
    for( let i=0 ; i<Api.length; i++){
        container+= `
        <div class="col-md-3">
        <div class="movie position-relative shadow-lg rounded">
            <div class="rate position-absolute end-0 top-0">
                <span>${Api[i].vote_average}</span>
            </div>
            <img class=" card-img-top w-100" src="https://image.tmdb.org/t/p/w500/${Api[i].poster_path}" alt="">
        </div>
    </div>`
    };
    // Setting innerHTML as tab variable
    document.getElementById("showData").innerHTML = tab;
}
