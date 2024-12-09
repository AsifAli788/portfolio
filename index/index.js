const link = document.createElement(link)


function showAllData() {
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  data.forEach((item, index) => {
    const itemDev = document.createElement("div");
    itemDev.classList.add("data-item");

      itemDev.innerHTML = `
        <input type="text" value="${item.title}"  class="edit-title" disabled>
        <input type="text" value="${item.url}" class="edit-url" disabled>
        <input type="text" value="${item.description}" class="edit-url" disabled>
        <button class="edit-button" onclick="activeEdit(${index})" data-index="${index}">Edit</button>
        <button class="delete-button" onclick="activateDelete(${index})" data-index="${index}">Delete</button>
        <br><br>`;
    container.appendChild(itemDev);
  });

}

function filterData() {
  const searchinput = document.getElementById("mySearch").value.toLowerCase();
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  if (!searchinput) {
    showAllData();
    return;
  }
 
  const filteredData = data.filter((item) =>
    item.title.includes(searchinput) || item.url.includes(searchinput) || item.description.includes(searchinput)
  );
  displayData(filteredData);
}
function displayData(datatofilter) {
  const container = document.getElementById("data-container");
  container.innerHTML = "";

  datatofilter.forEach((item, index) => {
    const itemDiv = document.createElement("div");
      itemDiv.classList.add("data-item");

    itemDiv.innerHTML = `
      <input type="text" class="input-field" value="${item.title}" disabled >
      <input type="text"class="input-field" value="${item.url}" disabled>
      <input type="text"class="input-field" value="${item.description}" disabled>
      <button onclick="activeEdit(${index})">Edit</button>
      <button onclick="activateDelete(${index})">Delete</button>
    `;
    container.appendChild(itemDiv);
  
  });
}

function showAllData() {
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  displayData(data);

}


function activeEdit(index) {
  window.location.href = `http://127.0.0.1:5500/edit/edit.html?index=${index}`;
}

function activateDelete(index) {
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showAllData();
}

document.addEventListener("DOMContentLoaded", showAllData);
