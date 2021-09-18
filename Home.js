function home() {
    window.location.href = "Home.html";
}

function login() {
    window.location.href = "Login.html";
}

function signUp() {
    window.location.href = "SignUp.html";
}


function slideshow() {
    
    var arr = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3028/1033028-h-f99689c557b0", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2886/892886-h"];

    let div = document.getElementById("homepage")

    let img = document.createElement("img");

    let prev = document.createElement("p");
    let next = document.createElement("a");
    prev.textContent = "<";
    next.textContent = ">"

    let i = 0;

    img.src = arr[0];

    div.append(img, prev, next);
    
    setInterval(function () {
        
        if (i == arr.length) {
            i = 0;
        }
        
        img.src = arr[i];

        i++;

    },3000)
}

slideshow();

    

    let homePage = document.getElementById("homepage");
const movies = [
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183",
        title:"Loki",
        rating:"9.0",
        date:"9 June 2021",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
        title:"Tanhaji",
        rating:"8.5",
        date:"25 June 2020",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3029/1033029-v-bd928a1dd530",
        title:"Collar Bomb",
        rating:"7.5",
        date:"15 July 2021",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        title:"Chhichhore",
        rating:"9.5",
        date:"25 June 2019",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v",
        title:"Total Dhamaal",
        rating:"8.0",
        date:"25 June 2019",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6828/556828-v",
        title:"Super 30",
        rating:"9.0",
        date:"25 June 2019",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v",
        title:"Mission Mangal",
        rating:"8.5",
        date:"25 June 2019",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v",
        title:"Arjun Reddy",
        rating:"7.5",
        date:"17 Dec 2018",
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3085/723085-v",
        title:"Dil Bechara",
        rating:"7.0",
        date:"25 Jan 2021",
    }
]

if (localStorage.getItem("movies") == null) {
    localStorage.setItem("movies", JSON.stringify(movies));
}


function showMovies(d){
    
    let movies = d

    let movies_div = document.getElementById("movies");
    movies_div.innerHTML = null

    movies.forEach(function (el) {
        
        let div = document.createElement("div")

        let p_title = document.createElement("div");
        p_title.innerHTML = el.title;
        
        let p_rating = document.createElement("div");
        p_rating.innerHTML = "IMDB: " + el.rating + "⭐";

        let img = document.createElement("img");
        img.src = el.img;

        let p_date = document.createElement("div");
        p_date.innerHTML = el.date;

        div.append(img, p_title, p_rating, p_date);

        movies_div.append(div);
    })

}

showMovies(JSON.parse(localStorage.getItem("movies")));

function sortLH() {
    
    let movies = JSON.parse(localStorage.getItem("movies"));

    movies = movies.sort(function (a, b) {
        return a.rating - b.rating
    })

    showMovies(movies);

}

function sortHL() {
    
    let movies = JSON.parse(localStorage.getItem("movies"));

    movies = movies.sort(function (a, b) {
        return b.rating - a.rating
    })

    showMovies(movies);

}
