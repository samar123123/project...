
var firebaseConfig = {
      apiKey: "AIzaSyCPvlEi1b49evMVA5746CP6fgxom2sRg9A",
      authDomain: "kwitter-4918c.firebaseapp.com",
      databaseURL: "https://kwitter-4918c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4918c",
      storageBucket: "kwitter-4918c.appspot.com",
      messagingSenderId: "273670396124",
      appId: "1:273670396124:web:54a9e12960f22373e3bc19"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   function addRoom(){

      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
