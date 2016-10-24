(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");

    var rooms = $firebaseArray(ref);

    window.foo = rooms;

    rooms.$add({name:"Code"});
    rooms.$add({name:"Sports"});
    rooms.$add({name:"Hangout"});

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
