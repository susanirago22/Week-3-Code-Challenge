document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        console.log('clicked');
    });
});
function film(){
    const returnFetch = fetch('http://localhost:8000/films/1d')
  .then((resp) => resp.json())
  .then((json) => renderfilm(json));
  return returnFetch;
}

function renderfilm(film) {
  const main = document.querySelector('main');
  film.forEach(film => {
    const h2 = document.createElement('h2');
    h2.innerHTML = film
    main.appendChild(h2);
  });
}



   
    