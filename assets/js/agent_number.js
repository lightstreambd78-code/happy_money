const firebaseConfig = {
  apiKey: "AIzaSyAOIw_F9fqhfquSWmlMo71P3wuiOx1yms4",
  authDomain: "happymoney-3d353.firebaseapp.com",
  databaseURL: "https://happymoney-3d353-default-rtdb.firebaseio.com",
  projectId: "happymoney-3d353",
  storageBucket: "happymoney-3d353.firebasestorage.app",
  messagingSenderId: "518372624635",
  appId: "1:518372624635:web:e48e1487bcbc9fb36f885e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var ke = '';


var bkash_name = '';
var bkash_number = '';


var nogod_name = '';
var nogod_number = '';


var roc_name = '';
var roc_number = '';


var ref10 = firebase.database().ref().child("agent_number").child('1');
var ref11 = firebase.database().ref().child("agent_number").child('2');
var ref12 = firebase.database().ref().child("agent_number").child('3');



ref10.on("value", function (snapshot4) {
  if (snapshot4.exists()) {


    bkash_name = snapshot4.val().aname;
    bkash_number = snapshot4.val().mobile;


  }





  $('#bkas').val(bkash_number);
  $('#bkas2').val(bkash_name);




});




ref11.on("value", function (snapshot4) {
  if (snapshot4.exists()) {


    nogod_name = snapshot4.val().aname;
    nogod_number = snapshot4.val().mobile;


  }





  $('#nog').val(nogod_number);
  $('#nog2').val(nogod_name);




});




ref12.on("value", function (snapshot4) {
  if (snapshot4.exists()) {


    roc_name = snapshot4.val().aname;
    roc_number = snapshot4.val().mobile;


  }





  $('#roc').val(roc_number);
  $('#roc2').val(roc_name);




});





function dtl() {

  var bkas = document.getElementById("bkas").value;
  var bkas2 = document.getElementById("bkas2").value;




  var ref10 = firebase.database().ref().child("agent_number").child('1');

  var didConfirm = confirm("Are you sure You want to create??");
  if (didConfirm == true) {

    ref10.set({
      "aname": bkas2,
      "mobile": bkas,




    });
    // alert('create successfully !!!')

    location.reload();



  } else {
    return false;
  }





}



function dtl2() {

  var bkas = document.getElementById("nog").value;
  var bkas2 = document.getElementById("nog2").value;




  var ref10 = firebase.database().ref().child("agent_number").child('2');

  var didConfirm = confirm("Are you sure You want to create??");
  if (didConfirm == true) {

    ref10.set({
      "aname": bkas2,
      "mobile": bkas,




    });
    // alert('create successfully !!!')

    location.reload();



  } else {
    return false;
  }





}



function dtl3() {

  var bkas = document.getElementById("roc").value;
  var bkas2 = document.getElementById("roc2").value;




  var ref10 = firebase.database().ref().child("agent_number").child('3');

  var didConfirm = confirm("Are you sure You want to create??");
  if (didConfirm == true) {

    ref10.set({
      "aname": bkas2,
      "mobile": bkas,




    });
    // alert('create successfully !!!')

    location.reload();



  } else {
    return false;
  }





}



var alluser = firebase.database().ref().child("agent_number");

var admin = '';
var pass = '';






function myclose() {
  // get user input

  location.reload();

}




