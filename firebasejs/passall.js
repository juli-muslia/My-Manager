 // Initialize Firebase
  var config = {
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

var rootRef = firebase.database().ref().child("passwords");

rootRef.on("child_added", snap =>{
	
       var name1 = snap.child("name").val();
       var email1 = snap.child("email").val();
       var pass = snap.child("password").val();
       var shenim = snap.child("shenime").val();
	
$("#table_body").append("<tr><td>" + name1 + "</td><td>" + email1 + "</td><td>" + pass + "</td><td>" + shenim + "<td></tr>");
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