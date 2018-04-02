var nameInput = $("#name-input").val().trim()
var roleInput = $("#role-input").val().trim()
var dateInput = $("#start-input").val().trim()
var rateInput = $("#rate-input").val().trim()

database.ref().push({
    name: nameInput,
    role: roleInput,
    date: dateInput,
    rate: rateInput,

    });