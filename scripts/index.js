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

    // looping through each object of the array
}

// add event listener on the submit button to call fetchDataFromJson fuction
submitButton.addEventListener("click", fetchDataFromJson);