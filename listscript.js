const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

function addTask(){
    if (inputBox.value === '') {
        alert("please write someting");
    }

    else{
        let li = document.createElement("li"); // this will create a html tag li
        li.innerHTML = inputBox.value; // the value in li will be the value entered in the input box
        listCont.appendChild(li); // the li will be displayed under the list-cont
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" // this is the cross sign
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listCont.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// if case ->in the above function if we click at list li then the class checked will be added or if it would have been already there then it would have been removed because we are using using toggle

// else if case -> when we click at span then the parent element i.e. is li will be removed 

function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
} // this function is made to store the data so that if we close our browser or refersh our browser our data does not get lost, this data will be accessed by using getItem() and "data"

function showData(){
    listCont.innerHTML = localStorage.getItem("data");
} // this function is made to display the data which was previously stored

showData();