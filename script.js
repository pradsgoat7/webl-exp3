function changeText() {
    const p = document.getElementById('text-to-change');
    p.textContent = "The text has been successfully changed using JavaScript DOM manipulation!";
    p.style.color = "#6d8299";
    p.style.fontWeight = "bold";
}

function addItem() {
    const list = document.getElementById('dynamic-list');
    const newItem = document.createElement('li');
    const count = list.getElementsByTagName('li').length + 1;
    newItem.textContent = "Dynamically Added Item " + count;
    list.appendChild(newItem);
}

function removeItem() {
    const list = document.getElementById('dynamic-list');
    const items = list.getElementsByTagName('li');

    if (items.length > 0) {
        list.removeChild(items[items.length - 1]);
    } else {
        alert("No items left to remove!");
    }
}

function setTheme(theme) {

    document.body.classList.remove(
        "default-bg",
        "blue-bg",
        "green-bg",
        "orange-bg"
    );

    if (theme === "blue") {
        document.body.classList.add("blue-bg");
    } 
    else if (theme === "green") {
        document.body.classList.add("green-bg");
    } 
    else if (theme === "orange") {
        document.body.classList.add("orange-bg");
    } 
    else {
        document.body.classList.add("default-bg");
    }
}