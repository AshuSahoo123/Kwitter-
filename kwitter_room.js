var firebaseConfig = {
      apiKey: "AIzaSyDXGzsnPoDPRmRUunf1W2-BQuwGxZxejTw",
      authDomain: "kwitter-dd81e.firebaseapp.com",
      databaseURL: "https://kwitter-dd81e-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd81e",
      storageBucket: "kwitter-dd81e.appspot.com",
      messagingSenderId: "46026378519",
      appId: "1:46026378519:web:692ff46f8db548101cfb52"
    };
    
    // Initialize Firebase
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
            row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirecttoroom(this.id)'> #" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoroom(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}