const urlApi = "https://dog.ceo/api/breeds/image/random/10";
var resultApi = [];
var string = '';

fetch(urlApi)
    .then(response => response.json())
    .then(function (data) {
        resultApi = data.message;
    });

setTimeout(function getPhotos() {
    resultApi.forEach(sendToHtml);
}, 1000);

function sendToHtml() {
    for (let i = 0; i < resultApi.length; i++) {
        if (i == 0) {
            string = "<div class='item active'><img src=" + resultApi[i] + " class='photos' style='width:750px; height:750px;' alt='0'></div>";
        } else
            string += "<div class='item'><img src=" + resultApi[i] + " class='photos' style='width:750px; height:750px;' alt='0'></div>";
    }
    document.getElementById('inputCarousel').innerHTML = string;
}


var refresh = document.querySelector("#buttonRefresh");
refresh.addEventListener("click", function () {
    location.reload();
});