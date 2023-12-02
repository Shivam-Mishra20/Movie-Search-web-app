const APIURL =///for showing trending /movie////
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";


const IMGPATH = "https://image.tmdb.org/t/p/w1280";/////image path for movie////


const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";/////searching movie on the base you entered in search box///



const moiveBox = document.querySelector("#movie-box")

///makeing async fn for geeting movie data ////

const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    ShowMovies(data)


}

///for showing top 20 movies////
getMovies(APIURL);

/////////makeing async fn for Showing  movie data ////




const ShowMovies = (data) => {
    moiveBox.innerHTML = ''


    // const box = `
    //         // <div class="box">
    //         //     <img src="${IMGPATH+result}" alt="" />
    //         //     <div class="overlay">
    //         //         <h2>Overview:</h2>
    //         //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
    //         //     </div>
    //         // </div>`
    data.results.forEach(
        (result) => {
            const imgpath= result.poster_path === null ? `img/image-missing.png`:IMGPATH +result.poster_path;
            console.log(data)

            const box = document.createElement('div')
            box.classList.add('box')
            box.innerHTML = `
            <img src="${imgpath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>


            `
            moiveBox.appendChild(box)



        }


    )

}

document.querySelector('#search').addEventListener('keyup',
(event)=>{
    if(event.target.value !=""){
        getMovies(SEARCHAPI+ event.target.value)
    }
    else{
        getMovies(APIURL)
    }

}
)