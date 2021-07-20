  var config = {
  apiKey: "#",
  authDomain: "#",
  databaseURL: "#",
  projectId: "#",
  storageBucket: "#",
  messagingSenderId: "#",
  appId: "1:#:web:#"

  };
  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
       
        // [END_EXCLUDE]
        if (user) {
          
        } else {
           window.location="login.html";
           alert("DUHET TE LOGOHENI!")
        }
        // [START_EXCLUDE silent]
        document.getElementById('btnLogin').disabled = false;
        // [END_EXCLUDE]
      });