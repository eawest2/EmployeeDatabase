

//Initialize firebase
var config = {
    apiKey: "AIzaSyDC0n_Hjoc1h_tZM4dAjktE85ukJYPVG_g",
    authDomain: "class-4-2-2018.firebaseapp.com",
    databaseURL: "https://class-4-2-2018.firebaseio.com",
    projectId: "class-4-2-2018",
    storageBucket: "",
    messagingSenderId: "275569929795"
    };
    firebase.initializeApp(config);

//global variables
    //Firebase container
    var database = firebase.database();





//Initialize functions
    //push user data to Firebase
    function dataPush () {

        var nameInput = $("#name-input").val().trim()
        var roleInput = $("#role-input").val().trim()
        var dateInput = $("#start-input").val().trim()
        var rateInput = $("#rate-input").val().trim()

    //firebase object push
        database.ref().push({
        name: nameInput,
        role: roleInput,
        date: dateInput,
        rate: rateInput,
        
            });

    };


//initialize code



    

