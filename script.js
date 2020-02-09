var currentDate = new Date()
var hour = new Date().getHours() - 12;
// var hour = 5

$("#date").text(currentDate.toDateString())



console.log(date);
console.log(hour)

$(".right").click(function () {
    var buttonValue = $(this).val()
    // var value = $("#userInput" + buttonValue).val()
    // console.log(value)
    localStorage.setItem("hour" + buttonValue, $("#userInput" + buttonValue).val());
})

for (var i = 0; i < 9; i++) {
    var storage = localStorage.getItem("hour" + i)
    $("#userInput" + i).text(storage);
    // input.html(storage)
    console.log(storage)
}

$("#userInput" + hour).addClass("present")

for (var i = 0; i < 9; i++) {
    console.log("hour")
    if (i < hour) {
        $("#userInput" + i).removeClass("")
        $("#userInput" + i).addClass("past")
    }
    if (i > hour) {
        // $("#userInput" + i).removeClass("")
        $("#userInput" + i).addClass("future")
    }

}

``
