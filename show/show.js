function storeData(){
    let title = document.getElementById("title").value
    let url = document.getElementById("url").value
    let description = document.getElementById("description").value

    let a = { title: title, url: url, description: description };
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data.push(a);
    localStorage.setItem("data", JSON.stringify(data));

   window.onload = function() 
  { document.getElementById("hideAll").style.display = "none"; }
  
}

function showData(){
    document.getElementById("show-title").innerHTML= localStorage.getItem("title")
    document.getElementById("show-url").innerHTML = localStorage.getItem("url")
    document.getElementById("show-description").innerHTML= localStorage.getItem("description")
}
