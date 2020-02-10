var currentDate = new Date()
var hour = new Date().getHours();
// var hour = 10   
console.log(hour)

$("#date").text(currentDate.toDateString())



console.log(date);
console.log(hour)

$(".right").click(function () {
    var buttonValue = $(this).val()
    // var value = $("#userInput" + buttonValue).val()
    console.log(buttonValue)
    localStorage.setItem("hour" + buttonValue, $("#userInput" + buttonValue).val());
})

for (var i = 9; i < 18; i++) {
    var storage = localStorage.getItem("hour" + i)
    $("#userInput" + i).text(storage);
    // input.html(storage)
    console.log(storage)
}

$("#userInput" + hour).addClass("present")
// $("#textarea" + hour).addClass("present")

for (var i = 9; i < 18; i++) {
    console.log("hour")
    if (i < hour) {
        // $("#userInput" + i).removeClass("")
        $("#userInput" + i).addClass("past")
    } else if (i > hour) {
        // $("#userInput" + i).removeClass("")
        $("#userInput" + i).addClass("future")
    } 

}


