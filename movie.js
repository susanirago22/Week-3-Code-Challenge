document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        console.log('clicked');
    });
});
function firstMovie(){

   
    fetch('http://localhost:8000/films/1')
    .then(res => res.json())
    .then(data => 
        {   
            console.log(data)
            const movie = document.querySelector('.movie');
            movie.innerHTML = 
            `

            <div class="movie-details">
              <ul id="details">
                <li>Run Time: ${data.runtime} </li>
                <li>Show Time: ${data.showtime}</li>
              </ul>
            </div>
            `
        })
    }