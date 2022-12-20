// create a url variable to refer during fetch request
const url ="http://localhost:3000/films/";


// fetch request to access film objects
document.addEventListener("DOMContentLoaded", () => {   
    const fetchFirstFilm = () => {      fetch(url + id)    
    .then(response => response.json())    
    .then(data => { renderFirstFilm(data) })  
  }   
   fetchFirstFilm();
})
// declare variables for movie objects
const renderFirstFilm = (film) => {
    const poster = document.getElementById("poster") // using Id since all movie elements have specific unique Id's and I store them in descriptive variables. Also changed innerText for each variable to correspond to object's specific attribute
    poster.src = film.poster

    const title = document.getElementById("title")
    title.innerText = film.title

    const runtime = document.getElementById("runtime")
    runtime.innerText = `${film.runtime} MINUTES`
    
    const showtime = document.getElementById("showtime")
    showtime.innerText = film.showtime
    
    const description = document.getElementById("film-info")
    description.innerText = film.description


    const ticketSpan = document.getElementById("ticket-num")
    // tickets available would be film.capacity string minus film.tickets_sold
    const convertedCapacity = parseInt(film.capacity, 10) //converts the string film capacity to an integer
    ticketSpan.innerText = convertedCapacity-film.tickets_sold

}

// // # Deliverablw 2
// // add an advent listener to to buy ticket button  to facilitate ticket quantity changes

//     const button = document.querySelector(".ui.orange.button")
//     button.addEventListener("click", (e) => { 
//          if (ticketSpan.innerText <= 0){ // it gives the user the amount of tickets remaining
//             let buttonDiv = document.querySelector(".extra.content");    /
//             buttonDiv.innerHTML = '<button>Sold Out</button>'
//         }
//         else {
//             const tickets_sold = film.tickets_sold + 1
//             let obj = {tickets_sold} //this has to be key:value pair 
//                 updateTicketNum(obj)
//          }
//     })
//     const updateTicketNum = (obj) => { 
//         options = {
//             method: "PATCH",
//             headers: { 
//                'content-type': 'application/json'
//                'accept': 'application/json'
//             },
//     body: JSON.stringify(obj)
//         }
// fetch((url + id), options)
//     .then(response => response.json())
//     .then(data => {
//         renderFirstFilm(data)
//     })
// }
