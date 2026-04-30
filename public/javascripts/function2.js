//bruhhhhhhhhhhhhhhhhhh
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/main2.html') {
        promotingPage();
    }
});

function promotingPage(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 403) {

            // Create paragraph element
            var paragraph = document.createElement("p");
            paragraph.textContent = "This is a paragraph.";

            // Create button element
            var button = document.createElement("button");
            button.textContent = "Click me";
            button.addEventListener("click", function() {
                xhttp.open("GET", "/accept", true);
                xhttp.send();
            });

            // Append paragraph and button to body
            document.body.appendChild(paragraph);
            document.body.appendChild(button);
        } else if(this.readyState == 4 && this.status == 200 ){

            var titleString = document.getElementById("title").innerText;
            var title = document.createElement("h1");
            title.textContent = titleString;
            var content = this.responseText;
            document.body.innerHTML = '';
            document.body.appendChild(title);
            document.body.appendChild(content);

        }
    };
    xhttp.open("GET", "/content.ajax", true);
    xhttp.send();

}