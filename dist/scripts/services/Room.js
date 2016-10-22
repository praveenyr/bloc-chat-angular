(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");



    var rooms = $firebaseArray(ref);

    window.foo = rooms;

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
