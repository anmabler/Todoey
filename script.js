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
    list.empty();              

    for (let i = 0; i< activities.length; i++){
        list.append (`<li> ${activities[i].activity} <span onmouseover="style ='cursor: pointer'">[x]</span></li><br>`)
    }

    deleteEvent();               
    updateEvent();
    //onItemHover();              //LÄGG TILL FUNKTION
}

function deleteEvent() {
    let allItems = $("span");

    for (let i = 0; i < allItems.length; i++) {
        $(allItems[i]).click( function () {
            let parentElement = this.parentElement;
            parentElement.style.display = "none";
            activities.splice(i, 1);
        })
    }
}

function updateEvent(){
    let allEvents = $("li");

    for (let i = 0; i < allEvents.length; i++){
        $(allEvents[i]).click( function (){
             $(allEvents[i]).strike();
        });
    }

    }

populateList();
displayList();
updateEvent();