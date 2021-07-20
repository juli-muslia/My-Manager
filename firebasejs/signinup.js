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


  /**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('VENDOSNI NJE EMAIL TE VLEFSHEM !');
          return;
        }
        if (password.length < 5) {
          alert('PASSWORD DUHET TE JETE MBI 6 KARAKTERE !');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('PERDORUES/FJALEKALIM GABIM !');
          } else {
            alert('PERDORUESI NUK EKZISTON ! JU LUTEM REGJISTROHUNI !');
          }
          console.log(error);
          document.getElementById('btnLogin').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('btnLogin').disabled = true;
    }
    /**
     * Handles the sign up button press.
     */


    function handleSignUp() {
      var email = document.getElementById('emailregister').value;
      var password = document.getElementById('passwordregister').value;
      var username = document.getElementById('userName').value;
      var surname = document.getElementById('userSname').value;
      var phone = document.getElementById('phone').value;
      if (email.length < 4) {
        alert('VENDOSNI NJE EMAIL TE VLEFSHEM !');
        return;
      }
      if (password.length < 5) {
        alert('PASSWORD DUHET TE JETE MBI 6 KARAKTERE !');
        return;
      }
      if (username.length < 3) {
        alert('VENDOSNI EMRIN TUAJ !');
        return;
      }
      
      if (surname.length < 3) {
        alert('VENDOSNI MBIEMRIN TUAJ !');
        return;
      }
      if (phone.length < 1 ) {
        alert ('TE GJITHA FUSHAT DUHET TE JENE TE PLOTESUARA ! ')
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('FJALEKALIMI ESHTE I DOBET !');
        } else {
          alert('PERDORUESI EKZISTON !');
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }
    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
    function sendPasswordReset() {
      var email = document.getElementById('emailReset').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('EMAIL U DERGUA !');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'SHKRUANI NJE EMAIL TE SAKTE !') {
          alert(errorMessage);
        } else if (errorCode == 'PERDORUESI NUK U GJET !') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [START_EXCLUDE silent]
       
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // [START_EXCLUDE]
          window.location='main.html';
          document.getElementById('btnLogin').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          
          // [END_EXCLUDE]
        } else {
            // User is signed out.
           // [START_EXCLUDE]
          //  document.getElementById('btnLogin').textContent = 'Signed out';
         // document.getElementById('btnLogin').textContent = 'Hyr';
        // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('btnLogin').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
      document.getElementById('btnLogin').addEventListener('click', toggleSignIn, false);
      document.getElementById('btnSignUp').addEventListener('click', handleSignUp, false);
      document.getElementById('resetpass').addEventListener('click', sendPasswordReset, false);
    }
    window.onload = function() {
      initApp();
    };
