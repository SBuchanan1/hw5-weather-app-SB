var APIKey = "0a32018123374229255049a1be8c1b6a";
var queryURL = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var location = document.querySelector(".location")
var city = document.querySelector(".city")
var wind = document.querySelector(".wind")
var humidity = document.querySelector(".humidity")
var temperature = document.querySelector(".temperature")


button.addEventListener("click", function () {

    fetch(APIKey)
        .then(response => response.jason())
        .then(data => console.log(data))
    $.ajax({
        url: queryURL

    }).then(function (response) {
        console.log(response);
        $("location").text("Location placeholder")
        $(".city").text("City placeholder")
        $(".wind").text("Wind placeholder")
        $(".humidity").text("Humidity placeholder")
        $("temperature").text("Temperature placeholder")
