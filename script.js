let activities = [];

function populateList(){
    let activity = {
        activity: "Hämta test",
        checked: ""
    }

    let activity2 = {
        activity: "Justera glasögon",   
        checked: ""
    }
   

    activities.push(activity);
    activities.push(activity2);
}

$("#form").submit(function(event){
    event.preventDefault();
    let userInput = $("#user-input").val();

    if (userInput.length > 0){
        let eventToAdd = { activity: userInput, checked:"" }
    
        activities.push(eventToAdd);
    } else {
        alert("Du måste skriva in något.");
    }
    
    $("#user-input").val("");
    showList();
})

function showList() {
    let list = $("#ul-list");
    list.empty();              

    for (let i = 0; i< activities.length; i++){
        list.append (`<li>  ${activities[i].activity} <span onmouseover="style ='cursor: pointer'">[x]</span></li><br>`)

    }
    
    deleteEvent();               
    updateEvent();
    onHover();
}

function deleteEvent() {
    let allEvents = $("span");

    for (let i = 0; i < allEvents.length; i++) {
        $(allEvents[i]).click( function () {
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
             $(allEvents[i]).toggleClass("checked");

             if (activities[i].checked === ""){
                 activities[i].checked ="checked";
             }
             else if (activities.checked ==="checked") {
                 activities[i].checked ="";
             }
        });
    }

}

function onHover(){
    $("li").mouseenter(function () {
        $(this).css("background-color", "grey");
    })

    $("li").mouseleave(function () {
        $(this).css("background-color", "white");
    })
}

populateList();
showList();
