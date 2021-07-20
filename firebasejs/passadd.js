// Initialize Firebase (ADD YOUR OWN DATA)
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

// Reference messages collection
var messagesRef = firebase.database().ref('passwords');

// Listen for form submit
document.getElementById('passAdd').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');
  var shenime = getInputVal('shenime');
  

  // Save message
  saveMessage(name, email, password, shenime);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('passAdd').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, password, shenime){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    password:password,
    shenime:shenime
  });
}

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