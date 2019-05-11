$(document).ready(function() {


var firebaseConfig = {
    apiKey: "AIzaSyCVHD4K0AvXebjMd9kZhy_In_qWds8C4H4",
    authDomain: "timesheet-group.firebaseapp.com",
    databaseURL: "https://timesheet-group.firebaseio.com",
    projectId: "timesheet-group",
    storageBucket: "timesheet-group.appspot.com",
    messagingSenderId: "59221311784",
    appId: "1:59221311784:web:3a2a798ddcbe5578"
  };
  firebase.initializeApp(firebaseConfig);


var database = firebase.database()



var name
var role
var date
var rate

$("#submitBtn").on("click", function (event){
    event.preventDefault()


    name = $("#name").val().trim()
    role = $("#role").val().trim()
    date = $("#startDate").val().trim()
    rate = $("#rate").val().trim()

database.ref().push({
    name: name,
    role: role,
    date: date,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

})



})



database.ref().on("child_added", function (snapshot){

    $("#table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().role + "</td><td id='monthsWorked'>Placeholder</td><td>" + snapshot.val().rate + "</td><td id='totalBilled'>Placeholder</td></tr>")
}, function(err) {
    console.log(err)
})
})
