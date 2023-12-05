// create constants to get data from html using query selector
const search = document.querySelector(".searchInput");
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");

// create our base url and the api key
const baseURL = "http://www.omdbapi.com/";
const apiKey = "8127fd11";

// generate complete url and do a fetch request
function fetchDataFromJson() {
    // generte the complete url
    let searchData = search.value;
    let url = `${baseURL}?apikey=${apiKey}&s=${searchData}`;
    console.log(url);

    // create a fetch request and call other function
    fetch(url).then(response => response.json()).then(json => displayData(json));
}

// a function to display data to the page
function displayData(json) {
    console.log(json);

    const movieData = json.Search;
    // looping through each object of the array
    for (let i = 0; i < movieData.length; i++) {
        console.log(movieData[i]);

        // create tr and td elements for the body tag
        // <tr>
        //   <td>id</th>
        //   <td>poster</td>
        //   <td>name</td>
        //   <td>year</td>
        // </tr>
        let tableRow = document.createElement("tr"); // <tr></tr>
        let titleData = document.createElement("td"); // <td></td>
        let yearData = document.createElement("td"); // <td></td>
        let imdbIdData = document.createElement("td"); // <td></td>
        let posterData = document.createElement("td"); // <td></td>

        tableRow.setAttribute("class", "table-danger");

        // add data in all the td tags
        titleData.textContent = movieData[i].Title;
        yearData.textContent = movieData[i].Year;
        imdbIdData.textContent = movieData[i].imdbID;

        // show image in poster td
        let image = document.createElement("img"); // <img>
        image.setAttribute("src", movieData[i].Poster); // <img src="....">
        posterData.appendChild(image);

        // appending all the data to tr tags and adding tr to tbody tag
        tableRow.appendChild(imdbIdData);
        tableRow.appendChild(titleData);
        tableRow.appendChild(yearData);
        tableRow.appendChild(posterData);

        tableBody.appendChild(tableRow);
    }
}

// add event listener on the submit button to call fetchDataFromJson fuction
submitButton.addEventListener("click", fetchDataFromJson);