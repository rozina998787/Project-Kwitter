// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCmX8ITYVQ2_K2LQ78dxH524RcfTD1kbxA",
  authDomain: "kwitter-1f950.firebaseapp.com",
  databaseURL: "https://kwitter-1f950-default-rtdb.firebaseio.com",
  projectId: "kwitter-1f950",
  storageBucket: "kwitter-1f950.appspot.com",
  messagingSenderId: "339771508761",
  appId: "1:339771508761:web:d33e65c7a766be4b93c288",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}
getData();
function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)'>#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem(user_name);
  localStorage.removeItem(room_name);
  window.location = "kwitter.html";
}
