function storeData(event) {
    event.preventDefault(); 
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    const description = document.getElementById("description").value;
    const data = JSON.parse(localStorage.getItem("data") || "[]");

    data.push({ title, url, description });

    localStorage.setItem("data", JSON.stringify(data));

    window.location.href = "http://127.0.0.1:5500/index/index.html"; 
  }
  