    //display current day & time
    $("#currentDay").text(moment().format("MMM Do YYYY"));

$(document).ready(function (){

    $(".saveBtn").on("click", function(){
        let text = $(this).siblings(".description").val();
        let time = $(this).siblings(".hour").text();

    // set items in local storage
    localStorage.setItem(time, text);
    })

    $(".time-block").each(function () {
        let timeNow = moment().hour();
        let currentHour = parseInt($(this).attr("id").split("hour")[1]);

        if (currentHour > timeNow) {
            $(this).addClass("future");
        } else if (currentHour === timeNow) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })

    // load saved data from localStorage for each hour created
    $("#hour8 .description").val(localStorage.getItem("8:00 AM"));
    $("#hour9 .description").val(localStorage.getItem("9:00 AM"));
    $("#hour10 .description").val(localStorage.getItem("10:00 AM"));
    $("#hour11 .description").val(localStorage.getItem("11:00 AM"));
    $("#hour12 .description").val(localStorage.getItem("12:00 PM"));
    $("#hour13 .description").val(localStorage.getItem("1:00 PM"));
    $("#hour14 .description").val(localStorage.getItem("2:00 PM"));
    $("#hour15 .description").val(localStorage.getItem("3:00 PM"));
    $("#hour16 .description").val(localStorage.getItem("4:00 PM"));
    $("#hour17 .description").val(localStorage.getItem("5:00 PM"));

})