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



    //-------------------------------------
  
  var uploader = document.getElementById('uploader');
  var fileButton =         document.getElementById('fileButton');
  fileButton.addEventListener('change', function(e){
  var file = e.target.files[0];
  var storageRef = firebase.storage().ref('bnk/'+file.name);
  var task = storageRef.put(file);
  task.on('state_changed', function progress(snapshot) {
    var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    uploader.value = percentage;

  }, function error(err) {


  },function complete() {

  });
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