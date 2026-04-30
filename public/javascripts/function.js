
document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("timestampParagraph").innerText = "This page was last viewed " + this.responseText;
        }
    };
    xhttp.open("GET", "/last.txt", true);
    xhttp.send();
});

document.addEventListener("DO`MContentLoaded", function() {

    if (window.location.pathname === '/color2.html') {
        changeColorButton();
    }
});

function changeColorButton() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("colorTitle").style.color = this.responseText;
            document.getElementById("colorTitle").innerText =  this.responseText;
        }
    };
    xhttp.open("GET", "/color.txt", true);
    xhttp.send();
}

document.addEventListener("DOMContentLoaded", function() {

    if (window.location.pathname === '/log2.html') {
        updateLog("/log.json");
    }

    // Fetch and display read-only logs every 10 seconds
   setInterval( function(){
        updateLog("/log-ro.json");}
    , 10000);

});

function updateLog(route){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var logs = JSON.parse(this.responseText); // Parse JSON response
            var ul = document.getElementById("timeLogShow");
            ul.innerHTML = ''; // Clear previous logs
            logs.forEach(function(log) {
                var li = document.createElement("li");
                li.textContent = log;
                ul.appendChild(li);});
        }
    };
    xhttp.open("GET", route, true);
    xhttp.send();

}
