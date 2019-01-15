
//MomentJS  
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAi2KEo7duYfbfa8juaHEV60o1EiWwc55Q",
    authDomain: "train-project-db860.firebaseapp.com",
    databaseURL: "https://train-project-db860.firebaseio.com",
    projectId: "train-project-db860",
    storageBucket: "train-project-db860.appspot.com",
    messagingSenderId: "245070673224"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-new").on("click", function (event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
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