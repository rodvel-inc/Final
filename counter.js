//DOM (Document Method querySelector() to return the 1st element within the HTML document that matches the
//specified selector; in this case, the div class "website-counter", #resetButton, 
var counterContainer = document.querySelector(".website-counter");

var resetButton = document.querySelector("#reset");

//Retrieve visitor count using the web browser's local storage by using the method local.storage.getItem() 
//with page_view as a parameter.
var visitCount = localStorage.getItem("page_view");

// If an entry for the “page_view” key is already present, the retrieved String value is converted to a 
//number datatype using Number(). The previous session visitCount is then incremented and the value is 
//updated in localStorage.
if (visitCount){
    visitCount = Number(visitCount) + 1;
    //// Update local storage value
    localStorage.setItem("page_view", visitCount);
} else {
    //Initialize visitor count to 1 in localStorage if entry is not found
    visitCount = 1;
    //Add entry for key="page_view"
    localStorage.setItem("page_view", 1);
}

counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
    }
  );