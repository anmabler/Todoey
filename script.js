let activities = [];

function populateList(){
    let activity = {
        activity: "Hämta test"
    }

    let activity2 = {
        activity: "Justera glasögon"
    }

    activities.push(activity);
    activities.push(activity2);
}

$("#form").submit(function(event){
    event.preventDefault();
    let userInput = $("#user-input").val();

    let eventToAdd = { activity: userInput }

    activities.push(eventToAdd);
    $("#user-input").val("");
    displayList();
})

function displayList() {
    let list = $("#ul-list");
    //list.empty();               // LÄGG TILL FUNKTION

    for (let i = 0; i< activities.length; i++){
        list.append (`<li> ${activities[i].activity} <span onmouseover="style ='cursor: pointer'">X</span></li><br>`)
    }

    deleteItem();               
    //updateItem();               //LÄGG TILL FUNKTION
    //onItemHover();              //LÄGG TILL FUNKTION
}

function deleteItem() {
    let allItems = $("span");

    for (let i = 0; i < allItems.length; i++) {
        $(allItems[i]).click( function () {
            let parentElement = this.parentElement;
            parentElement.style.display = "none";
            activities.splice(i, 1);
        })
    }
}

displayList();