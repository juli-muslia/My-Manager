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
var messagesRef = firebase.database().ref('shenimet');

// Listen for form submit
document.getElementById('notesAdd').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var shenimi = getInputVal('shenimi');
  var shenimText = getInputVal('shenimText');

  

  // Save message
  saveMessage(shenimi, shenimText);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('notesAdd').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(shenimi, shenimText){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    shenimi: shenimi,
    shenimText:shenimText,
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