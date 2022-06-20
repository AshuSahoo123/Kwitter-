var firebaseConfig = {
      apiKey: "AIzaSyDvBXcLia9zQY50EePFgjCC33_jIRKX53s",
      authDomain: "kwitter-6898d.firebaseapp.com",
      databaseURL: "https://kwitter-6898d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6898d",
      storageBucket: "kwitter-6898d.appspot.com",
      messagingSenderId: "475519775163",
      appId: "1:475519775163:web:8b7d203e9d284c9996d49e"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirect1(this.id)'> #" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect1(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}