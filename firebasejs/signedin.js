  //initialize the firebase app
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