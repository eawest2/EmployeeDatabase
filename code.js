

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

        event.preventDefault();

        var nameInput = $("#name-input").val().trim()
        var roleInput = $("#role-input").val().trim()
        var dateInput = $("#start-input").val().trim()
        var rateInput = $("#rate-input").val().trim()

    //firebase object push
        database.users.ref().push({
        name: nameInput,
        role: roleInput,
        date: dateInput,
        rate: rateInput,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
        
            });
            //clears input values
            $("#name-input").value = "";
            $("#role-input").value = "";
            $("#start-input").value = "";
            $("#rate-input").value = "";

    };

//Event listeners
    //submit data to firebase
    $("#submit").on("click", function (event){
        event.preventDefault();
        datapush();
    });
    
    //on child added
    database.ref().on("child_added", function(childsnapshot){
        var assemblerStart = '<tr>'
        var assemblerFinish = '</tr>'
        var assemblerItem = '<td>'
        var assemblerItemFinish = '</td>'

        $("#employees").append(assemblerStart + assemblerItem + childsnapshot.name + assemblerItemFinish + assemblerItem + childsnapshot.role + assemblerItemFinish + assemblerItem);



    
    });


//initialize code



    

