function getIndexFromURL(){
    const indexURL = window.location.search
    const params = new URLSearchParams(indexURL)
    return parseInt(params.get("index"))
}
  function loadeditdata() {
    const index = getIndexFromURL();
    const data = JSON.parse(localStorage.getItem("data") || "[]");
  
    if (index >= 0 && index < data.length) {
      const item = data[index];
      const container = document.getElementById("edit-container");
  
      container.innerHTML = `
        <label>Title:</label>
        <input type="text" id="edit-title" value="${item.title}">
        <br><br>
        <label>URL:</label>
        <input type="text" id="edit-url" value="${item.url}">
        <br><br>
        <label>Description:</label>
        <textarea id="edit-description">${item.description}</textarea>
        <br><br>
      `;
    }
  }
  function update() {
    const index = getIndexFromURL();
    const data = JSON.parse(localStorage.getItem("data") || "[]");
  

      const updatedTitle = document.getElementById("edit-title").value.trim();
      const updatedURL = document.getElementById("edit-url").value.trim();
      const updatedDescription = document.getElementById("edit-description").value.trim();
      data[index] = {
        title: updatedTitle,
        url: updatedURL,
        description: updatedDescription,
      };  
      localStorage.setItem("data", JSON.stringify(data));
      window.location.href = "/index/index.html";
    }

  function cancel() {
      window.location.href = "/index/index.html";
  }

  document.addEventListener("DOMContentLoaded", loadeditdata());
  