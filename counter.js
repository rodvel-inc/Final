function updateCounter(){
    fetch("https://jwu4nmlfdf.execute-api.us-east-1.amazonaws.com/")
      .then(response => response.text())
      .then((body) => {
        document.getElementById("counter").innerHTML=body
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  