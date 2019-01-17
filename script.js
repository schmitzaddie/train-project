
//MomentJS  
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB1Yb4xocGy9yLAcJEI8HJ-uSd9d-nGy8I",
    authDomain: "train-project-3afcd.firebaseapp.com",
    databaseURL: "https://train-project-3afcd.firebaseio.com",
    projectId: "train-project-3afcd",
    storageBucket: "train-project-3afcd.appspot.com",
    messagingSenderId: "1077898592358"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-new").on("click", function (event) {
    event.preventDefault();
    var name = $("#name-input").val();
    var destination = $("#destination-input").val();
    var firstTrain = $("#first-train-input").val();
    var frequency = $("#frequency-input").val();
    //var next = moment;
    //var minutes = monthWorked*rate;

    $("#name-display").text(name);
    $("#destination-display").text(destination);
    $("#frequency-display").text(frequency);

    console.log(name);
    console.log(destination);
    console.log(frequency);
    console.log(firstTrain);

    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    })
});

database.ref().on(
    "child_added",
    function (childSnapshot) {

        var snap = childSnapshot.val();

        var name = snap.name;
        var destination = snap.destination;
        var firstTrain = snap.firstTrain;
        var frequency = snap.frequency;

        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().firstTrain);
        console.log(childSnapshot.val().frequency);

        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(frequency),
            $("<td>").text("next"),
            $("<td>").text("minutes")
        );

        $("#train-row").append(newRow);


    });