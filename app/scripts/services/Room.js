(function() {
  function Room($firebaseArray) {

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    window.foo = rooms;

    var addRoom = function(name){
      rooms.$add({ name: name });
    };

    addRoom("Code");
    addRoom("Sports");
    addRoom("Hangout");

    return {
      all: rooms
    };

  }



  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
