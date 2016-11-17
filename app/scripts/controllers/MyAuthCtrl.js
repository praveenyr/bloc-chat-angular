(function() {
    function MyAuthCtrl($firebaseAuth)  {
      console.log("in auth ctrl");
       this.myAuthObj = $firebaseAuth();
       this.adminUser = false;


       this.signInUser = () => {
         //Prompt for userEmail
         var userEmail;
         while (!userEmail || userEmail === '') {
          userEmail = prompt("Please enter your email: ");
         }
         //Prompt for user password
          var userPwd;
          while (!userPwd || userPwd === '') {
            userPwd = prompt("Please enter your password: ");
          }

          //Sign in using userEmail and userPwd
          this.myAuthObj.$signInWithEmailAndPassword(userEmail, userPwd)
              .then((firebaseUser) => {
                console.log("Signed in as:", firebaseUser.uid);

                  this.signedIn = true;
                  if(firebaseUser.uid === '1slgmR0Alxfiy3szyq6Rl2Og5iK2'){
                    this.adminUser = true;
                  }

              }).catch(function(error) {
                  console.error("Authentication failed:", error);
              });

          //var firebaseUser = this.myAuthObj.$getAuth();
          //var firebaseUser =  firebase.auth().currentUser;
          //  firebase.auth().onAuthStateChanged(function(firebaseUser) {

          //});

          }

        //Sign out the current user
        this.signOutUser = () => {
          this.myAuthObj.$signOut();
          this.signedIn = false;
          this.adminUser = false;
        }
  }

  angular
    .module('blocChat')
    .controller('MyAuthCtrl',["$firebaseAuth",MyAuthCtrl] );

})();
