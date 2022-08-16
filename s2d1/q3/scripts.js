const mov_contain = document.getElementById('movie_contain');

const getMovies = async () => {
    try {
        let input = document.getElementById('search-input').value;

        let res = await fetch(`http://www.omdbapi.com/?&apikey=546e9ff6&s=${input}`);
        let data = await res.json();
        return data?.Search;
    } catch (error) {
        console.log(error)
    }
}

const showMovies = (data) => {
    mov_contain.innerHTML = null;

    data?.map(mov => {
        let title = document.createElement('p');

        title.innerText = `${mov.Title} ${mov.Year}`;
        mov_contain.append(title);
    })
}

const main = async () => {
    let data = await getMovies();

    showMovies(data);
}

let timer;
const debouncing = () => {
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        main();
    },1000)
}