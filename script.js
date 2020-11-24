let activities = [];

$("#form").submit(function(event)){
    event.preventDefault();
    let userInput = $("#user-input").val();

    let eventToAdd = { activity: userInput }

    activities.push(eventToAdd);
    $("#user-input").val("");
    
}