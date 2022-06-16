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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
