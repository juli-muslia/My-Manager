 // Initialize Firebase
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

var rootRef = firebase.database().ref().child("shenimet");

rootRef.on("child_added", snap =>{
	
       var shenimtxt = snap.child("shenimText").val();
       var shenim = snap.child("shenimi").val();

	
$("#table_body").append("<tr><td>" + shenimtxt + "</td><td>" + shenim + "<td></tr>");
});

firebase.auth().onAuthStateChanged(user=>{ 
  if(user){
    
    document.getElementById("btnLogOut").classList.remove('hide')
  
  } else{
    document.getElementById("btnLogOut").classList.add('hide')

  }
})

document.getElementById("btnLogOut").addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log('logged out')
window.location = 'index.html';
})