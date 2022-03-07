$("document").ready(function() {

    // Time in header 
    const today = moment();
    $("#currentDay").text(today.format('dddd' + ', ' + 'MMMM Do YYYY'));

    // Save in localStorage
    $(".saveBtn").on('click', function() {
        var hour = $(this).parent().attr("id");
        var event = $(this).siblings(".description").val();
        localStorage.setItem(hour, event);
    });

    // current time 
    let currentTime = moment().hours();
    

    // Saved data from localStorage 
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12am .description").val(localStorage.getItem("12am"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    // timeframe color
    inputEl = $("textarea").each(function(){

        var textEL = $(this).attr("id");
        console.log(textEL);
    
        if ( textEL < currentTime) {
            $(this).addClass("past");

        } else if ( textEL == currentTime) {
            $(this).addClass("present");

        } else if ( textEL > currentTime) {
            $(this).addClass("future");
        }

        // time interval for function
        setInterval(function(){
            inputEl
            }, 1000);

        });

});