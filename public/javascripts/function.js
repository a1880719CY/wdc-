document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch actors from the server and populate the table
    function fetchActors() {
      var xhttp = new XMLHttpRequest();

      /* 4. Handle response (callback function) */
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          var actors = JSON.parse(this.responseText);
          var tbody = document.getElementById("actors-table-body");
          tbody.innerHTML = ""; // Clear table body before populating

          // Loop through actors and populate the table
          actors.forEach(function(actor) {
            var row = document.createElement("tr");
            var firstNameCell = document.createElement("td");
            var lastNameCell = document.createElement("td");
            firstNameCell.textContent = actor.first_name;
            lastNameCell.textContent = actor.last_name;
            row.appendChild(firstNameCell);
            row.appendChild(lastNameCell);
            tbody.appendChild(row);
          });
        }
      };

      /* 2. Open connection */
      xhttp.open("GET", "/actors", true);

      /* 3. Send request */
      xhttp.send();
    }

    // Fetch actors when the page loads
    fetchActors();

    // Function to handle adding a new actor
    function addActor() {
      var firstName = document.getElementById("actor-first-name").value;
      var lastName = document.getElementById("actor-last-name").value;

      // Perform further validation if needed

      // Create actor data object
      var actorData = {
        first_name: firstName,
        last_name: lastName
      };

      // Create AJAX request to add actor
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          // Actor added successfully, refresh actors table
          fetchActors();
          // Optionally, you can handle success message or perform other actions
          console.log("Actor added successfully!");
        }
      };
      xhttp.open("POST", "/actors", true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.send(JSON.stringify(actorData));
    }

    // Add event listener to the "Add" button
    var addButton = document.querySelector(".pure-button-primary");
    addButton.addEventListener("click", addActor);
  });

